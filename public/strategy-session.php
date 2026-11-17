<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Debug function
function strategyDebugLog($message) {
    @file_put_contents(__DIR__ . '/strategy_session_debug.log', date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

strategyDebugLog("=== Strategy Session Script started ===");

// =============================================================
// SMTP CONFIGURATION (Matching contact.php credentials)
// =============================================================
$smtpConfig = [
    'enabled' => false,                  // Set to true if using Authenticated SMTP
    'host'    => 'mail.cybaemtech.com',  // cPanel mail host
    'port'    => 465,                    // 465 (SSL) or 587 (TLS)
    'secure'  => 'ssl',                  // 'ssl' or 'tls'
    'auth'    => true,
    'user'    => 'no-reply@cybaemtech.com', // Authenticated mailbox
    'pass'    => ''                      // Mailbox password
];

// -------------------------------------------------------------
// Pure PHP Lightweight SMTP Client (Zero External Dependencies)
// -------------------------------------------------------------
function sendViaSmtp($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $config = []) {
    $host = $config['host'] ?? 'localhost';
    $port = (int)($config['port'] ?? 465);
    $secure = strtolower($config['secure'] ?? 'ssl');
    $user = $config['user'] ?? '';
    $pass = $config['pass'] ?? '';
    
    $socketHost = ($secure === 'ssl') ? 'ssl://' . $host : $host;
    
    $socket = @fsockopen($socketHost, $port, $errno, $errstr, 15);
    if (!$socket) {
        strategyDebugLog("SMTP Connection Failed to $socketHost:$port ($errno: $errstr)");
        return false;
    }

    $read = function($expectedCode) use ($socket) {
        $data = "";
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        $code = substr($data, 0, 3);
        strategyDebugLog("SMTP << " . trim($data));
        return ($code == $expectedCode);
    };

    $write = function($cmd, $logCmd = null) use ($socket) {
        strategyDebugLog("SMTP >> " . ($logCmd !== null ? $logCmd : trim($cmd)));
        fputs($socket, $cmd . "\r\n");
    };

    if (!$read('220')) { fclose($socket); return false; }

    $write("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'cybaemtech.com'));
    if (!$read('250')) {
        $write("HELO " . ($_SERVER['SERVER_NAME'] ?? 'cybaemtech.com'));
        if (!$read('250')) { fclose($socket); return false; }
    }

    if ($secure === 'tls') {
        $write("STARTTLS");
        if (!$read('220')) { fclose($socket); return false; }
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $write("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'cybaemtech.com'));
        if (!$read('250')) { fclose($socket); return false; }
    }

    if (!empty($config['auth']) && !empty($user)) {
        $write("AUTH LOGIN");
        if (!$read('334')) { fclose($socket); return false; }
        $write(base64_encode($user));
        if (!$read('334')) { fclose($socket); return false; }
        $write(base64_encode($pass), "******");
        if (!$read('235')) {
            strategyDebugLog("SMTP Authentication Failed for $user");
            fclose($socket);
            return false;
        }
    }

    $write("MAIL FROM: <$fromEmail>");
    if (!$read('250')) { fclose($socket); return false; }

    $write("RCPT TO: <$to>");
    if (!$read('250')) { fclose($socket); return false; }

    $write("DATA");
    if (!$read('354')) { fclose($socket); return false; }

    $messageIdDomain = preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST'] ?? 'cybaemtech.com');

    $headers  = "Date: " . date("r") . "\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$replyToName} <{$replyToEmail}>\r\n";
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "Message-ID: <" . md5(uniqid(microtime(), true)) . "@" . $messageIdDomain . ">\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "X-Mailer: CybaemTech-Mailer/2.0\r\n";

    fputs($socket, $headers . "\r\n" . $htmlBody . "\r\n.\r\n");
    if (!$read('250')) {
        strategyDebugLog("SMTP Failed to finish DATA transmission");
        fclose($socket);
        return false;
    }

    $write("QUIT");
    fclose($socket);
    strategyDebugLog("SMTP Mail successfully delivered to $to!");
    return true;
}

// -------------------------------------------------------------
// Unified Mail Dispatcher
// -------------------------------------------------------------
function sendStrategyEmail($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $smtpConfig = []) {
    if (!empty($smtpConfig['enabled']) && !empty($smtpConfig['pass'])) {
        $smtpResult = sendViaSmtp($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $smtpConfig);
        if ($smtpResult) return true;
        strategyDebugLog("SMTP delivery failed. Falling back to native PHP mail()...");
    }

    $messageIdDomain = preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST'] ?? 'cybaemtech.com');
    
    $headers  = "Date: " . date("r") . "\r\n";
    $headers .= "Message-ID: <" . md5(uniqid(microtime(), true)) . "@" . $messageIdDomain . ">\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$replyToName} <{$replyToEmail}>\r\n";
    $headers .= "Return-Path: <{$fromEmail}>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    return @mail($to, $subject, $htmlBody, $headers, "-f" . $fromEmail);
}

// -------------------------------------------------------------
// Parse Request Data (JSON or FormData)
// -------------------------------------------------------------
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents("php://input");
    $input = json_decode($raw, true);
    strategyDebugLog("JSON input: " . $raw);

    $fullName     = trim($input['fullName'] ?? '');
    $orgName      = trim($input['orgName'] ?? '');
    $phone        = trim($input['phone'] ?? '');
    $email        = trim($input['email'] ?? '');
    $serviceType  = trim($input['serviceType'] ?? '');
    $location     = trim($input['location'] ?? '');
    $message      = trim($input['message'] ?? '');
    $sourcePage   = trim($input['sourcePage'] ?? '');
} else {
    $fullName     = trim($_POST['fullName'] ?? '');
    $orgName      = trim($_POST['orgName'] ?? '');
    $phone        = trim($_POST['phone'] ?? '');
    $email        = trim($_POST['email'] ?? '');
    $serviceType  = trim($_POST['serviceType'] ?? '');
    $location     = trim($_POST['location'] ?? '');
    $message      = trim($_POST['message'] ?? '');
    $sourcePage   = trim($_POST['sourcePage'] ?? '');

    strategyDebugLog("Form data received - Name: $fullName, Email: $email, Phone: $phone, Service: $serviceType");
}

if (empty($fullName) || empty($email) || empty($phone) || empty($serviceType)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Full Name, Email, Phone Number, and Service Type are required fields."
    ]);
    exit();
}

// Helper for RFC 2047 Subject Encoding
function encodeSubject($str) {
    return '=?UTF-8?B?' . base64_encode($str) . '?=';
}

// -------------------------------------------------------------
// Senders and Recipients
// -------------------------------------------------------------
$adminEmail     = "info@cybaemtech.com";
$noReplyEmail   = "no-reply@cybaemtech.com";
$fromName       = "Cybaem Tech";
$infoReplyTo    = "info@cybaemtech.com";

// -------------------------------------------------------------
// 1. Admin Email Template (Contains all user details)
// -------------------------------------------------------------
$rawAdminSubject = "New Strategy Session Request: {$fullName} ({$serviceType})";
$adminSubject    = encodeSubject($rawAdminSubject);

$adminMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Strategy Session Request</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background:#f4f6f9; margin:0; padding:24px; color:#1e293b; }
    .container { max-width:620px; margin:auto; background:#ffffff; border-radius:14px; 
                 box-shadow:0 12px 35px rgba(15, 35, 60, 0.08); border: 1px solid #e2e8f0; overflow:hidden; }
    .header { background:#ffffff; padding:24px 30px; text-align:center; border-bottom:2px solid #004e8c; }
    .header img { max-width:130px; height:auto; }
    .badge { display:inline-block; background:#e0f2fe; color:#0284c7; font-size:11px; font-weight:700; 
             letter-spacing:0.1em; text-transform:uppercase; padding:4px 12px; rounded-full; border-radius:20px; margin-top:8px; }
    .content { padding:30px; }
    .content h2 { margin:0 0 8px 0; color:#0f172a; font-size:22px; font-weight:800; }
    .content p.intro { margin:0 0 20px 0; font-size:14px; color:#64748b; line-height:1.5; }
    table { width:100%; border-collapse:collapse; margin-top:10px; background:#fafcff; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden; }
    td { padding:12px 16px; border-bottom:1px solid #e2e8f0; font-size:14px; }
    tr:last-child td { border-bottom:none; }
    td.label { font-weight:700; color:#0f172a; background:#f1f5f9; width:34%; }
    td.value { color:#1e293b; }
    .cta-box { margin-top:24px; padding:18px; background:#f8fafc; border-radius:10px; text-align:center; border:1px solid #e2e8f0; }
    .btn { display:inline-block; padding:10px 22px; background:#004e8c; color:#ffffff !important; 
           text-decoration:none; border-radius:8px; font-size:13px; font-weight:700; margin:4px; }
    .footer { background:#f8fafc; padding:18px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #e2e8f0; }
    .footer a { color:#004e8c; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.cybaemtech.com/images/cybaem-logo.webp" alt="Cybaem Tech Logo" width="130" style="max-width:130px; height:auto; display:block; margin:0 auto;">
      <span class="badge">Strategy Session Lead</span>
    </div>
    <div class="content">
      <h2>New Strategy Session Booking</h2>
      <p class="intro">A prospective client has requested a free strategy session through the website form. Below are the submission details:</p>
      
      <table>
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>' . htmlspecialchars($fullName) . '</strong></td>
        </tr>
        <tr>
          <td class="label">Company / Org</td>
          <td class="value">' . htmlspecialchars($orgName ?: 'Not specified') . '</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:' . htmlspecialchars($email) . '" style="color:#004e8c; font-weight:600;">' . htmlspecialchars($email) . '</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:' . htmlspecialchars($phone) . '" style="color:#004e8c; font-weight:600;">' . htmlspecialchars($phone) . '</a></td>
        </tr>
        <tr>
          <td class="label">Requested Service</td>
          <td class="value"><strong style="color:#004e8c;">' . htmlspecialchars($serviceType) . '</strong></td>
        </tr>
        <tr>
          <td class="label">Location / City</td>
          <td class="value">' . htmlspecialchars($location ?: 'Not specified') . '</td>
        </tr>
        <tr>
          <td class="label">Project / Notes</td>
          <td class="value">' . nl2br(htmlspecialchars($message ?: 'None provided')) . '</td>
        </tr>
        <tr>
          <td class="label">Source Page</td>
          <td class="value">' . htmlspecialchars($sourcePage ?: 'Direct / Industry Page') . '</td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td class="value">' . date("d M Y, h:i A T") . '</td>
        </tr>
      </table>

      <div class="cta-box">
        <a href="mailto:' . htmlspecialchars($email) . '?subject=Re:%20Free%20Strategy%20Session%20with%20Cybaem%20Tech" class="btn">Reply to Lead</a>
        <a href="tel:' . htmlspecialchars($phone) . '" class="btn" style="background:#0284c7;">Call Client</a>
      </div>
    </div>
    <div class="footer">
      Cybaem Tech Internal Notification System &bull; © ' . date("Y") . ' <a href="https://www.cybaemtech.com">Cybaem Tech</a>. All rights reserved.
    </div>
  </div>
</body>
</html>';

// -------------------------------------------------------------
// 2. User Confirmation / Thank You Email Template
// -------------------------------------------------------------
$rawUserSubject = "Thank You for Booking a Strategy Session with Cybaem Tech";
$userSubject    = encodeSubject($rawUserSubject);

$userMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Your Strategy Session Request with Cybaem Tech</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background:#f4f6f9; margin:0; padding:24px; color:#1e293b; }
    .container { max-width:620px; margin:auto; background:#ffffff; border-radius:14px; 
                 box-shadow:0 12px 35px rgba(15, 35, 60, 0.08); border: 1px solid #e2e8f0; overflow:hidden; }
    .header { background:#ffffff; padding:26px 30px; text-align:center; border-bottom:2px solid #004e8c; }
    .header img { max-width:130px; height:auto; }
    .content { padding:32px 30px; }
    .content h2 { margin:0 0 12px 0; color:#0f172a; font-size:22px; font-weight:800; }
    .content p { font-size:14px; line-height:1.6; color:#475569; margin:0 0 16px 0; }
    .highlight-card { background:#f8fafc; border-left:4px solid #004e8c; padding:16px 20px; border-radius:0 10px 10px 0; margin:22px 0; }
    .highlight-card h4 { margin:0 0 8px 0; color:#0f172a; font-size:14px; font-weight:700; }
    .highlight-card p { margin:0; font-size:13px; color:#64748b; line-height:1.5; }
    .steps-box { background:#f0f9ff; border:1px solid #bae6fd; border-radius:10px; padding:20px; margin:24px 0; }
    .steps-box h4 { margin:0 0 12px 0; color:#0369a1; font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; }
    .step-item { display:flex; margin-bottom:10px; font-size:13px; color:#334155; line-height:1.5; }
    .step-num { width:22px; height:22px; background:#0284c7; color:#ffffff; font-weight:700; font-size:11px; border-radius:50%; display:inline-block; text-align:center; line-height:22px; margin-right:12px; flex-shrink:0; }
    .btn-container { text-align:center; margin:28px 0 10px 0; }
    .btn { display:inline-block; padding:13px 28px; background:#004e8c; color:#ffffff !important; 
           text-decoration:none; border-radius:10px; font-size:14px; font-weight:700; box-shadow:0 4px 12px rgba(0, 78, 140, 0.25); }
    .contact-info { margin-top:24px; padding-top:20px; border-top:1px solid #e2e8f0; font-size:13px; color:#64748b; }
    .footer { background:#f8fafc; padding:20px; text-align:center; font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0; }
    .footer a { color:#004e8c; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.cybaemtech.com/images/cybaem-logo.webp" alt="Cybaem Tech Logo" width="130" style="max-width:130px; height:auto; display:block; margin:0 auto;">
    </div>
    <div class="content">
      <h2>Thank You, ' . htmlspecialchars($fullName) . '!</h2>
      <p>We have successfully received your request for a <strong>Free Strategy Session</strong> with our technology consulting experts.</p>
      
      <div class="highlight-card">
        <h4>Requested Consultation</h4>
        <p><strong>Service:</strong> ' . htmlspecialchars($serviceType) . '</p>
        ' . (!empty($orgName) ? '<p><strong>Company:</strong> ' . htmlspecialchars($orgName) . '</p>' : '') . '
        <p><strong>Contact Phone:</strong> ' . htmlspecialchars($phone) . '</p>
      </div>

      <div class="steps-box">
        <h4>What Happens Next?</h4>
        <div class="step-item">
          <span class="step-num">1</span>
          <div><strong>Requirement Review:</strong> Our senior solution architects will evaluate your project scope and objectives.</div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div><strong>Consultant Outreach:</strong> We will reach out to you within <strong>2 to 4 business hours</strong> to schedule your 1-on-1 strategy call.</div>
        </div>
        <div class="step-item">
          <span class="step-num">3</span>
          <div><strong>Tailored Roadmap:</strong> During your session, we will deliver actionable architectural insights, cost estimates, and deployment timelines.</div>
        </div>
      </div>

      <p>If you have any immediate questions or need priority assistance, feel free to reach out to our team directly.</p>

      <div class="btn-container">
        <a href="https://www.cybaemtech.com" class="btn">Explore Our Solutions &amp; Case Studies</a>
      </div>

      <div class="contact-info">
        <p style="margin:0 0 6px 0;"><strong>Need immediate assistance?</strong></p>
        <p style="margin:0;">Call us at: <a href="tel:+919028541383" style="color:#004e8c; text-decoration:none; font-weight:600;">+91 90 2854 1383</a> &bull; Email: <a href="mailto:info@cybaemtech.com" style="color:#004e8c; text-decoration:none; font-weight:600;">info@cybaemtech.com</a></p>
      </div>
    </div>
    <div class="footer">
      You received this email because you submitted a request on <a href="https://www.cybaemtech.com">cybaemtech.com</a>.<br>
      © ' . date("Y") . ' Cybaem Tech. All Rights Reserved. &bull; Pune, Maharashtra, India.
    </div>
  </div>
</body>
</html>';

// -------------------------------------------------------------
// 1. Dispatch Admin Notification Email
// -------------------------------------------------------------
$adminMailResult = sendStrategyEmail(
    $adminEmail,
    $adminSubject,
    $adminMessageHtml,
    $noReplyEmail,
    $fromName,
    $email, // Reply-To User
    $fullName,
    $smtpConfig
);

// -------------------------------------------------------------
// 2. Dispatch User Confirmation Email (From: no-reply, Reply-To: info)
// -------------------------------------------------------------
$userMailResult = sendStrategyEmail(
    $email,
    $userSubject,
    $userMessageHtml,
    $noReplyEmail,
    $fromName,
    $infoReplyTo, // Reply-To info@cybaemtech.com
    "Cybaem Tech Support",
    $smtpConfig
);

strategyDebugLog("Admin email sent to ($adminEmail): " . ($adminMailResult ? "YES" : "NO"));
strategyDebugLog("User confirmation sent to ($email) from ($noReplyEmail): " . ($userMailResult ? "YES" : "NO"));

// Return JSON response to frontend
if ($adminMailResult || $userMailResult) {
    echo json_encode([
        "success" => true,
        "message" => "Strategy session request submitted successfully. Our team will contact you shortly."
    ]);
} else {
    // If local mail system returns false, we still confirm receipt to user and log it
    echo json_encode([
        "success" => true,
        "message" => "Strategy session request recorded. Our team will contact you shortly."
    ]);
}

strategyDebugLog("=== Strategy Session Script ended ===\n");
?>
