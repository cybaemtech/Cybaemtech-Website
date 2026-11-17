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
function careersDebugLog($message) {
    file_put_contents(__DIR__ . '/careers_debug.log', date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

careersDebugLog("=== Careers Script started ===");

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
function sendViaSmtp($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $attachmentPath = null, $attachmentName = null, $config = []) {
    $host = $config['host'] ?? 'localhost';
    $port = (int)($config['port'] ?? 465);
    $secure = strtolower($config['secure'] ?? 'ssl');
    $user = $config['user'] ?? '';
    $pass = $config['pass'] ?? '';
    
    $socketHost = ($secure === 'ssl') ? 'ssl://' . $host : $host;
    
    $socket = @fsockopen($socketHost, $port, $errno, $errstr, 15);
    if (!$socket) {
        careersDebugLog("SMTP Connection Failed to $socketHost:$port ($errno: $errstr)");
        return false;
    }

    $read = function($expectedCode) use ($socket) {
        $data = "";
        while ($str = fgets($socket, 515)) {
            $data .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        $code = substr($data, 0, 3);
        careersDebugLog("SMTP << " . trim($data));
        return ($code == $expectedCode);
    };

    $write = function($cmd, $logCmd = null) use ($socket) {
        careersDebugLog("SMTP >> " . ($logCmd !== null ? $logCmd : trim($cmd)));
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
            careersDebugLog("SMTP Authentication Failed for $user");
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
    $boundary = "==Multipart_Boundary_x" . md5(time()) . "x";

    $headers  = "Date: " . date("r") . "\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$replyToName} <{$replyToEmail}>\r\n";
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "Message-ID: <" . md5(uniqid(microtime(), true)) . "@" . $messageIdDomain . ">\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "X-Mailer: CybaemTech-Mailer/2.0\r\n";

    if (!empty($attachmentPath) && file_exists($attachmentPath)) {
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n\r\n";
        
        $body  = "--{$boundary}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body .= $htmlBody . "\r\n\r\n";
        
        $fileData = file_get_contents($attachmentPath);
        $fileDataEncoded = chunk_split(base64_encode($fileData));
        $fileExt = strtolower(pathinfo($attachmentName, PATHINFO_EXTENSION));
        $mimeType = ($fileExt === 'pdf') ? 'application/pdf' : 'application/octet-stream';
        
        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: {$mimeType}; name=\"" . addslashes($attachmentName) . "\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . addslashes($attachmentName) . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $fileDataEncoded . "\r\n\r\n";
        $body .= "--{$boundary}--";
    } else {
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body = $htmlBody;
    }

    fputs($socket, $headers . $body . "\r\n.\r\n");
    if (!$read('250')) {
        careersDebugLog("SMTP Failed to finish DATA transmission");
        fclose($socket);
        return false;
    }

    $write("QUIT");
    fclose($socket);
    careersDebugLog("SMTP Mail successfully delivered to $to via SMTP!");
    return true;
}

// -------------------------------------------------------------
// Unified Mail Dispatcher
// -------------------------------------------------------------
function sendCustomEmail($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $attachmentPath = null, $attachmentName = null, $smtpConfig = []) {
    if (!empty($smtpConfig['enabled']) && !empty($smtpConfig['pass'])) {
        $smtpResult = sendViaSmtp($to, $subject, $htmlBody, $fromEmail, $fromName, $replyToEmail, $replyToName, $attachmentPath, $attachmentName, $smtpConfig);
        if ($smtpResult) return true;
        careersDebugLog("SMTP delivery failed. Falling back to native PHP mail()...");
    }

    $messageIdDomain = preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST'] ?? 'cybaemtech.com');
    
    if (!empty($attachmentPath) && file_exists($attachmentPath)) {
        $boundary = "==Multipart_Boundary_x" . md5(time()) . "x";

        $headers  = "Date: " . date("r") . "\r\n";
        $headers .= "Message-ID: <" . md5(uniqid(microtime(), true)) . "@" . $messageIdDomain . ">\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
        $headers .= "Reply-To: {$replyToName} <{$replyToEmail}>\r\n";
        $headers .= "Return-Path: <{$fromEmail}>\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

        $fileData = file_get_contents($attachmentPath);
        $fileDataEncoded = chunk_split(base64_encode($fileData));
        $fileExt = strtolower(pathinfo($attachmentName, PATHINFO_EXTENSION));
        $mimeType = ($fileExt === 'pdf') ? 'application/pdf' : 'application/octet-stream';

        $body  = "--{$boundary}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $body .= $htmlBody . "\r\n\r\n";
        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: {$mimeType}; name=\"" . addslashes($attachmentName) . "\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . addslashes($attachmentName) . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $fileDataEncoded . "\r\n\r\n";
        $body .= "--{$boundary}--";

        return @mail($to, $subject, $body, $headers, "-f" . $fromEmail);
    } else {
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
}

// -------------------------------------------------------------
// Read Input Data
// -------------------------------------------------------------
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents("php://input");
    $input = json_decode($raw, true);
    careersDebugLog("JSON input: " . $raw);

    $name       = trim($input['name'] ?? '');
    $email      = trim($input['email'] ?? '');
    $phone      = trim($input['phone'] ?? '');
    $message    = trim($input['message'] ?? '');
    $sourcePage = trim($input['sourcePage'] ?? '');
    $city       = trim($input['city'] ?? '');
    $category   = trim($input['category'] ?? '');
} else {
    $name       = trim($_POST['name'] ?? '');
    $email      = trim($_POST['email'] ?? '');
    $phone      = trim($_POST['phone'] ?? '');
    $message    = trim($_POST['message'] ?? '');
    $sourcePage = trim($_POST['sourcePage'] ?? '');
    $city       = trim($_POST['city'] ?? '');
    $category   = trim($_POST['category'] ?? '');

    careersDebugLog("Form data received - Name: $name, Email: $email, Phone: $phone, Role: $category");
}

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email are required fields"]);
    exit();
}

// -------------------------------------------------------------
// Resume File Upload Handling
// -------------------------------------------------------------
$uploadedResumePath = null;
$uploadedResumeName = null;
$uploadedResumeUrl  = null;

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['resume']['tmp_name'];
    $originalFileName = basename($_FILES['resume']['name']);
    $fileSize = $_FILES['resume']['size'];
    $fileExt = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));

    $allowedExtensions = ['pdf', 'doc', 'docx'];
    if (in_array($fileExt, $allowedExtensions) && $fileSize <= 10 * 1024 * 1024) {
        $uploadDir = __DIR__ . '/uploads/resumes/';
        if (!is_dir($uploadDir)) {
            @mkdir($uploadDir, 0755, true);
        }

        $cleanBaseName = preg_replace('/[^a-zA-Z0-9_-]/', '_', pathinfo($originalFileName, PATHINFO_FILENAME));
        $newFileName = 'resume_' . time() . '_' . substr($cleanBaseName, 0, 30) . '.' . $fileExt;
        $destPath = $uploadDir . $newFileName;

        if (move_uploaded_file($fileTmpPath, $destPath)) {
            $uploadedResumePath = $destPath;
            $uploadedResumeName = $originalFileName;

            $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443) || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
            $protocol = $isHttps ? "https://" : "http://";
            $host = $_SERVER['HTTP_HOST'] ?? 'www.cybaemtech.com';
            $uploadedResumeUrl = $protocol . $host . '/uploads/resumes/' . $newFileName;

            careersDebugLog("Resume saved successfully: $destPath | URL: $uploadedResumeUrl");
        } else {
            careersDebugLog("Failed to move uploaded resume to: $destPath");
        }
    } else {
        careersDebugLog("Resume validation failed. Ext: $fileExt, Size: $fileSize");
    }
}

// Helper for RFC 2047 Subject Encoding
function encodeSubject($str) {
    return '=?UTF-8?B?' . base64_encode($str) . '?=';
}

// -------------------------------------------------------------
// Senders and Recipients
// -------------------------------------------------------------
$adminEmail     = "hr@cybaemtech.com";
$noReplyEmail   = "no-reply@cybaemtech.com";
$fromName       = "Cybaem Tech Careers";
$hrReplyTo      = "hr@cybaemtech.com";

// Clean position display name
$displayPosition = str_ireplace('Career:', '', $category);
$displayPosition = trim($displayPosition);
if (empty($displayPosition)) {
    $displayPosition = "General Application";
}

$rawAdminSubject = "New Job Application: " . $name . " (" . $displayPosition . ")";
$adminSubject    = encodeSubject($rawAdminSubject);

// Build Resume Download / View HTML for Admin Email
if ($uploadedResumeUrl) {
    $resumeDownloadHtml = '<div style="margin-top:4px;">
        <a href="' . htmlspecialchars($uploadedResumeUrl) . '" target="_blank" style="display:inline-block; padding:10px 20px; background:primary; color:#ffffff !important; text-decoration:none; border-radius:8px; font-weight:700; font-size:13.5px; box-shadow:0 3px 10px rgba(0,82,204,0.25);">
            📥 View &amp; Download Resume PDF
        </a>
        <div style="font-size:12px; color:#64748b; margin-top:6px;">
            File: <strong>' . htmlspecialchars($uploadedResumeName) . '</strong> (also attached to this email)
        </div>
    </div>';
} else {
    $resumeDownloadHtml = '<span style="color:#64748b; font-size:13px;">No file uploaded (or check notes below)</span>';
}

// -------------------------------------------------------------
// 1. HR Notification Email Template
// -------------------------------------------------------------
$adminMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background:#f4f6f9; margin:0; padding:24px 12px; }
    .container { max-width:620px; margin:auto; background:#ffffff; border-radius:14px; 
                 box-shadow:0 12px 35px rgba(0, 82, 204, 0.10); border: 1px solid #eef2f6; overflow:hidden; }
    .header { background:linear-gradient(135deg, primary 0%, #003d99 100%); padding:28px 24px; text-align:center; color:#ffffff; }
    .header h1 { margin:0; font-size:21px; font-weight:bold; letter-spacing:0.3px; }
    .header p { margin:6px 0 0 0; font-size:13px; opacity:0.9; }
    .content { padding:28px 24px; color:#1e293b; }
    .content h2 { margin-top:0; color:#0f172a; font-size:17px; font-weight:700; border-bottom:2px solid #f1f5f9; padding-bottom:12px; }
    table { width:100%; border-collapse:collapse; margin-top:14px; }
    td { padding:12px 14px; border-bottom:1px solid #f1f5f9; font-size:13.5px; vertical-align:top; }
    td.label { font-weight:600; color:#475569; background:#f8faff; width:34%; }
    td.value { color:#0f172a; line-height:1.5; font-weight:500; }
    .badge { display:inline-block; padding:4px 10px; background:#e0ecff; color:primary; border-radius:6px; font-weight:700; font-size:13px; }
    .footer { background:#f8fafc; padding:18px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #eef2f6; }
    .footer a { color:primary; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>💼 Cybaem Tech — Careers Portal</h1>
      <p>New Candidate Application Received</p>
    </div>
    <div class="content">
      <h2>Candidate Submission Details</h2>
      <table>
        <tr><td class="label">Candidate Name</td><td class="value"><strong>' . htmlspecialchars($name) . '</strong></td></tr>
        <tr><td class="label">Email Address</td><td class="value"><a href="mailto:' . htmlspecialchars($email) . '" style="color:primary; font-weight:600;">' . htmlspecialchars($email) . '</a></td></tr>
        <tr><td class="label">Phone Number</td><td class="value"><a href="tel:' . htmlspecialchars($phone) . '" style="color:primary; font-weight:600;">' . htmlspecialchars($phone) . '</a></td></tr>
        <tr><td class="label">Location / City</td><td class="value">' . htmlspecialchars($city) . '</td></tr>
        <tr><td class="label">Role Applied</td><td class="value"><span class="badge">' . htmlspecialchars($displayPosition) . '</span></td></tr>
        <tr><td class="label">Resume Attachment</td><td class="value">' . $resumeDownloadHtml . '</td></tr>
        <tr><td class="label">Application Notes</td><td class="value">' . nl2br(htmlspecialchars($message)) . '</td></tr>
        <tr><td class="label">Submitted From</td><td class="value">' . htmlspecialchars($sourcePage) . '</td></tr>
        <tr><td class="label">Submission Time</td><td class="value">' . date("d M Y, h:i A T") . '</td></tr>
      </table>
    </div>
    <div class="footer">
      Cybaem Tech HR Management System • <a href="https://www.cybaemtech.com/careers">Visit Careers Portal</a>
    </div>
  </div>
</body>
</html>';

// -------------------------------------------------------------
// 2. Candidate Confirmation Email (Dispatched via no-reply)
// -------------------------------------------------------------
$rawUserSubject = "Thank You for Applying to Cybaem Tech! (Application Received)";
$userSubject    = encodeSubject($rawUserSubject);

$userMessageHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background:#f4f6f9; margin:0; padding:24px 12px; }
    .container { max-width:600px; margin:auto; background:#ffffff; border-radius:14px; 
                 box-shadow:0 12px 35px rgba(0, 82, 204, 0.10); border: 1px solid #eef2f6; overflow:hidden; }
    .header { background:#ffffff; padding:28px 24px 20px 24px; text-align:center; border-bottom:1px solid #f1f5f9; }
    .header img { max-width:140px; height:auto; }
    .content { padding:32px 28px; color:#1e293b; }
    .badge-top { display:inline-block; padding:4px 12px; background:#e0ecff; color:primary; font-size:12px; font-weight:700; border-radius:20px; letter-spacing:0.5px; text-transform:uppercase; margin-bottom:14px; }
    .content h2 { margin:0 0 12px 0; color:#0f172a; font-size:22px; font-weight:800; }
    .content p { font-size:14.5px; color:#475569; line-height:1.65; margin:12px 0; }
    .summary-card { background:#f8faff; border:1px solid #dbeafe; border-radius:12px; padding:20px; margin:22px 0; }
    .summary-title { margin:0 0 10px 0; font-size:12px; font-weight:800; color:primary; letter-spacing:0.8px; text-transform:uppercase; }
    .timeline-box { background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:16px 18px; margin:20px 0; }
    .timeline-item { font-size:13px; color:#334155; margin:8px 0; line-height:1.5; }
    .btn { display:inline-block; margin-top:20px; padding:13px 28px; background:primary; 
           color:#ffffff !important; text-decoration:none; border-radius:10px; font-weight:700; font-size:14px; text-align:center; }
    .footer { background:#f8fafc; padding:20px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid #eef2f6; line-height:1.6; }
    .footer a { color:primary; text-decoration:none; font-weight:600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.cybaemtech.com/images/cybaem-logo.webp" alt="Cybaem Tech Logo" width="140" style="max-width:140px; height:auto;">
    </div>
    <div class="content">
      <div style="text-align:center;">
        <span class="badge-top">Application Received</span>
        <h2>Thank You for Applying, ' . htmlspecialchars($name) . '!</h2>
      </div>
      
      <p>Thank you for your interest in building your career with <strong>Cybaem Tech</strong>. We have successfully received your job application and resume for the <strong>' . htmlspecialchars($displayPosition) . '</strong> position.</p>
      
      <div class="summary-card">
        <div class="summary-title">Application Summary</div>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:5px 0; font-size:13.5px; color:#64748b; width:40%;">Applied Position:</td><td style="padding:5px 0; font-size:13.5px; font-weight:700; color:primary;">' . htmlspecialchars($displayPosition) . '</td></tr>
          <tr><td style="padding:5px 0; font-size:13.5px; color:#64748b;">Applicant Name:</td><td style="padding:5px 0; font-size:13.5px; font-weight:600; color:#0f172a;">' . htmlspecialchars($name) . '</td></tr>
          <tr><td style="padding:5px 0; font-size:13.5px; color:#64748b;">Location:</td><td style="padding:5px 0; font-size:13.5px; color:#0f172a;">' . htmlspecialchars($city) . '</td></tr>
          <tr><td style="padding:5px 0; font-size:13.5px; color:#64748b;">Current Status:</td><td style="padding:5px 0; font-size:13.5px; font-weight:700; color:#10b981;">Under Review by HR Team</td></tr>
        </table>
      </div>

      <p><strong>What Happens Next?</strong></p>
      <div class="timeline-box">
        <div class="timeline-item"><strong>1. Profile Review:</strong> Our Talent Acquisition team will carefully evaluate your profile and qualifications.</div>
        <div class="timeline-item"><strong>2. Next Steps:</strong> If your skills align with our current requirements, a member of our HR team will reach out directly to schedule an introductory discussion.</div>
      </div>

      <p>Have questions or wish to share an updated portfolio? You can reach our HR team directly at <a href="mailto:hr@cybaemtech.com" style="color:primary; font-weight:600;">hr@cybaemtech.com</a>.</p>

      <div style="text-align:center;">
        <a href="https://www.cybaemtech.com/life-at-cybaemtech" class="btn">Discover Life at Cybaem Tech</a>
      </div>
    </div>
    <div class="footer">
      Cybaem Tech HR Team • <a href="mailto:hr@cybaemtech.com">hr@cybaemtech.com</a><br>
      © ' . date("Y") . ' Cybaem Tech Pvt. Ltd. All rights reserved.<br>
      <a href="https://www.cybaemtech.com">www.cybaemtech.com</a>
    </div>
  </div>
</body>
</html>';

// -------------------------------------------------------------
// 1. Send HR Team Email (with attachment & reply-to candidate)
// -------------------------------------------------------------
$adminMailResult = sendCustomEmail(
    $adminEmail,
    $adminSubject,
    $adminMessageHtml,
    $noReplyEmail,
    $fromName,
    $email, // Reply-to Candidate email
    $name,  // Reply-to Candidate name
    $uploadedResumePath,
    $uploadedResumeName,
    $smtpConfig
);

// -------------------------------------------------------------
// 2. Send Candidate Confirmation Email (From: no-reply, Reply-To: hr)
// -------------------------------------------------------------
$userMailResult = sendCustomEmail(
    $email,
    $userSubject,
    $userMessageHtml,
    $noReplyEmail,
    $fromName,
    $hrReplyTo, // Reply-to HR Team
    "Cybaem Tech HR",
    null,
    null,
    $smtpConfig
);

careersDebugLog("HR Admin email sent to ($adminEmail): " . ($adminMailResult ? "YES" : "NO"));
careersDebugLog("Candidate email sent to ($email) from ($noReplyEmail): " . ($userMailResult ? "YES" : "NO"));

// Return JSON response to frontend
if ($adminMailResult || $userMailResult) {
    echo json_encode([
        "success" => true,
        "message" => "Application submitted successfully."
    ]);
} else {
    echo json_encode([
        "success" => true,
        "message" => "Application recorded successfully."
    ]);
}

careersDebugLog("=== Careers Script ended ===\n");
?>
