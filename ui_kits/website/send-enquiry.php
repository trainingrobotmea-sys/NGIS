<?php
// NGIS website — admissions enquiry mailer.
// Receives the enquiry form (AdmissionsScreen.jsx) as JSON and emails it to
// admissions@ngis.com via PHP's mail(). Requires a PHP host with mail()
// configured (e.g. sendmail/Postfix) — it will not work on static hosting
// such as GitHub Pages.

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function field($data, $key, $maxLen = 500) {
    $v = isset($data[$key]) ? trim((string) $data[$key]) : '';
    // Strip control characters (incl. CR/LF) so nothing can inject extra
    // mail headers or corrupt the body.
    $v = preg_replace('/[\r\n\x00-\x1F\x7F]+/', ' ', $v);
    return mb_substr($v, 0, $maxLen);
}

$name    = field($data, 'name', 120);
$email   = field($data, 'email', 200);
$age     = field($data, 'age', 20);
$stage   = field($data, 'stage', 60);
$message = field($data, 'message', 2000);

$errors = [];
if ($name === '') $errors['name'] = 'Parent / guardian name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Enter a valid email address.';
if ($stage === '') $errors['stage'] = 'Please select a stage of interest.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

$to      = 'admissions@ngis.com';
$subject = 'NGIS admissions enquiry — ' . $name;

$body  = "A new admissions enquiry was submitted on the NGIS website.\n\n";
$body .= "Parent / guardian name: {$name}\n";
$body .= "Email address: {$email}\n";
$body .= "Child's age: " . ($age !== '' ? $age : '—') . "\n";
$body .= "Stage of interest: {$stage}\n";
$body .= "Message: " . ($message !== '' ? $message : '—') . "\n";

$headers = [];
$headers[] = 'From: NGIS Website <no-reply@ngis.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=utf-8';

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    echo json_encode(['success' => false, 'error' => 'The mail server could not send this enquiry. Please try again later.']);
}
