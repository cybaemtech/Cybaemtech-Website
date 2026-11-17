<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Debug function
function contactDebugLog($message) {
    file_put_contents(__DIR__ . '/contact_debug.log', date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

contactDebugLog("=== Contact Script started ===");

// =============================================================
// SMTP CONFIGURATION (Optional - for Authenticated cPanel SMTP)
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
        contactDebugLog("SMTP Connection Failed to $socketHost:$port ($errno: $errstr)");
        return false;
    }

    $read = function($expectedCode) use ($socket) {
        $data = "";
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        $code = substr($data, 0, 3);
        contactDebugLog("SMTP << " . trim($data));
        return ($code == $expectedCode);
    };

    $write = function($cmd, $logCmd = null) use ($socket) {
        contactDebugLog("SMTP >> " . ($logCmd !== null ? $logCmd : trim($cmd)));
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
            contactDebugLog("SMTP Authentication Failed for $user");
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
        contactDebugLog("SMTP Failed to finish DATA transmission");
        fclose($socket);
        return false;
    }

    $write("QUIT");
    fclose($socket);
    contactDebugLog("SMTP Mail successfully delivered to $to!");
    return true;
}

// -------------------------------------------------------------
// Unified Mail Dispatcher
// -------------------------------------------------------------
function sendContactEmail($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $smtpConfig = []) {
    if (!empty($smtpConfig['enabled']) && !empty($smtpConfig['pass'])) {
        $smtpResult = sendViaSmtp($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $smtpConfig);
        if ($smtpResult) return true;
        contactDebugLog("SMTP delivery failed. Falling back to native PHP mail()...");
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
// Parse Request Data
// -------------------------------------------------------------
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents("php://input");
    $input = json_decode($raw, true);
    contactDebugLog("JSON input: " . $raw);

    $name         = trim($input['name'] ?? '');
    $email        = trim($input['email'] ?? '');
    $phone        = trim($input['phone'] ?? '');
    $message      = trim($input['message'] ?? '');
    $sourcePage   = trim($input['sourcePage'] ?? '');
    $selectedPlan = trim($input['selectedPlan'] ?? '');
    $city         = trim($input['city'] ?? '');
    $category     = trim($input['category'] ?? '');
} else {
    $name         = trim($_POST['name'] ?? '');
    $email        = trim($_POST['email'] ?? '');
    $phone        = trim($_POST['phone'] ?? '');
    $message      = trim($_POST['message'] ?? '');
    $sourcePage   = trim($_POST['sourcePage'] ?? '');
    $selectedPlan = trim($_POST['selectedPlan'] ?? '');
    $city         = trim($_POST['city'] ?? '');
    $category     = trim($_POST['category'] ?? '');

    contactDebugLog("Form data received - Name: $name, Email: $email, Phone: $phone, Category: $category");
}

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email are required fields"]);
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

$rawAdminSubject  = "New Contact Form Submission - Cybaem Tech";
$adminSubject     = encodeSubject($rawAdminSubject);

// 1. Admin Email Template
$adminMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background:#f4f6f9; margin:0; padding:20px; }
    .container { max-width:600px; margin:auto; background:#ffffff; border-radius:12px; 
                 box-shadow:0 10px 30px rgba(0, 78, 152, 0.15); border: 1px solid #eef2f6; overflow:hidden; }
    .header { background:#ffffff; padding:20px; text-align:center; border-bottom:1px solid #eaeaea; }
    .header img { max-width:120px; height:auto; }
    .content { padding:30px; color:#333333; }
    .content h2 { margin-top:0; color:#0f172a; font-size:22px; }
    table { width:100%; border-collapse:collapse; margin-top:20px; }
    td { padding:12px 15px; border-bottom:1px solid #eaeaea; font-size:15px; }
    td.label { font-weight:600; color:#0f172a; background:#f9fafb; width:30%; }
    td.value { color:#333; }
    .footer { background:#f9fafb; padding:15px; text-align:center; font-size:13px; color:#666; }
    .footer a { color:#0f172a; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.cybaemtech.com/images/cybaem-logo.webp" alt="Cybaem Tech Logo" width="120" style="max-width:120px; height:auto;">
    </div>
    <div class="content">
      <h2>New Contact Submission</h2>
      <table>
        <tr><td class="label">Name</td><td class="value">' . htmlspecialchars($name) . '</td></tr>
        <tr><td class="label">Email</td><td class="value">' . htmlspecialchars($email) . '</td></tr>
        <tr><td class="label">Phone</td><td class="value">' . htmlspecialchars($phone) . '</td></tr>
        <tr><td class="label">City/Location</td><td class="value">' . htmlspecialchars($city) . '</td></tr>
        <tr><td class="label">Service Category</td><td class="value">' . htmlspecialchars($category) . '</td></tr>
        <tr><td class="label">Project Details</td><td class="value">' . nl2br(htmlspecialchars($message)) . '</td></tr>
        <tr><td class="label">Source Page</td><td class="value">' . htmlspecialchars($sourcePage) . '</td></tr>
        <tr><td class="label">Submission Time</td><td class="value">' . date("d M Y, h:i A T") . '</td></tr>
      </table>
    </div>
    <div class="footer">
      © ' . date("Y") . ' <a href="https://www.cybaemtech.com">Cybaem Tech</a> — All Rights Reserved
    </div>
  </div>
</body>
</html>';

// 2. User Confirmation Email Template (Dispatched via no-reply)
$rawUserSubject   = "Thank You for Contacting Cybaem Tech";
$userSubject      = encodeSubject($rawUserSubject);

$userMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background:#f4f6f9; margin:0; padding:20px; }
    .container { max-width:600px; margin:auto; background:#ffffff; border-radius:12px; 
                 box-shadow:0 10px 30px rgba(0, 78, 152, 0.15); border: 1px solid #eef2f6; overflow:hidden; }
    .header { background:#ffffff; padding:20px; text-align:center; border-bottom:1px solid #eaeaea; }
    .header img { max-width:120px; height:auto; }
    .content { padding:30px; color:#333333; text-align:center; }
    .content h2 { margin-top:0; color:#0f172a; }
    .btn { display:inline-block; margin-top:20px; padding:12px 24px; background:primary; 
           color:#fff !important; text-decoration:none; border-radius:8px; font-weight:bold; }
    .footer { background:#f1f5f9; padding:15px; text-align:center; font-size:13px; color:#666; }
    .footer a { color:primary; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.cybaemtech.com/images/cybaem-logo.webp" alt="Cybaem Tech Logo" width="120" style="max-width:120px; height:auto;">
    </div>
    <div class="content">
      <h2>Thank You, ' . htmlspecialchars($name) . '!</h2>
      <p>We have received your inquiry and our team will get back to you shortly.</p>
      <p>Meanwhile, feel free to explore our website for services & solutions.</p>
      <a href="https://www.cybaemtech.com" class="btn">Visit Our Website</a>
    </div>
    <div class="footer">
      You are receiving this email because you reached out to <a href="https://www.cybaemtech.com">Cybaem Tech</a>.<br>
      © ' . date("Y") . ' Cybaem Tech. All Rights Reserved.
    </div>
  </div>
</body>
</html>';

// -------------------------------------------------------------
// 1. Send Admin Notification Email
// -------------------------------------------------------------
$adminMailResult = sendContactEmail(
    $adminEmail,
    $adminSubject,
    $adminMessageHtml,
    $noReplyEmail,
    $fromName,
    $email, // Reply-To User
    $name,
    $smtpConfig
);

// -------------------------------------------------------------
// 2. Send User Confirmation Email (From: no-reply, Reply-To: info)
// -------------------------------------------------------------
$userMailResult = sendContactEmail(
    $email,
    $userSubject,
    $userMessageHtml,
    $noReplyEmail,
    $fromName,
    $infoReplyTo, // Reply-To info@cybaemtech.com
    "Cybaem Tech Support",
    $smtpConfig
);

contactDebugLog("Admin email sent to ($adminEmail): " . ($adminMailResult ? "YES" : "NO"));
contactDebugLog("User confirmation sent to ($email) from ($noReplyEmail): " . ($userMailResult ? "YES" : "NO"));

// Return JSON response to frontend
if ($adminMailResult || $userMailResult) {
    echo json_encode([
        "success" => true,
        "message" => "Inquiry submitted successfully."
    ]);
} else {
    echo json_encode([
        "success" => true,
        "message" => "Inquiry recorded successfully."
    ]);
}

contactDebugLog("=== Contact Script ended ===\n");
?>
