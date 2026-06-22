<?php
// Mailchimp Subscribe Proxy
// Hostinger pe server-side se API call — CORS issue nahi hota

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://asraxmedia.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['result' => 'error', 'msg' => 'Method not allowed']);
    exit;
}

// ── Honeypot check ─────────────────────────────────────────────────────────
// Hidden field 'website' — real users never fill it, bots always do
if (!empty($_POST['website'])) {
    // Silently pretend success so bots think they worked
    echo json_encode(['result' => 'success', 'msg' => "You're subscribed!"]);
    exit;
}

// ── Rate limiting (5 requests per IP per hour) ──────────────────────────────
$ip       = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$ip_hash  = md5($ip);
$rl_file  = sys_get_temp_dir() . '/mc_rl_' . $ip_hash . '.json';
$now      = time();
$limit    = 20;   // 20 subscribe attempts per IP per hour
$window   = 3600;

$rl_data = file_exists($rl_file) ? json_decode(file_get_contents($rl_file), true) : ['count' => 0, 'reset' => $now + $window];
if ($now > $rl_data['reset']) $rl_data = ['count' => 0, 'reset' => $now + $window];

if ($rl_data['count'] >= $limit) {
    http_response_code(429);
    echo json_encode(['result' => 'error', 'msg' => 'Too many attempts. Please try again in an hour.']);
    exit;
}
$rl_data['count']++;
file_put_contents($rl_file, json_encode($rl_data), LOCK_EX);

// ── Email validation ────────────────────────────────────────────────────────
$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['result' => 'error', 'msg' => 'Please enter a valid email address.']);
    exit;
}

// ── Block temp/disposable emails ──────────────────────────────────────────
$disposable_domains = [
    'yopmail.com', 'mailinator.com', 'tempmail.com', '10minutemail.com',
    'dispostable.com', 'getairmail.com', 'guerrillamail.com', 'sharklasers.com',
    'maildrop.cc', 'trashmail.com', 'tempr.email', 'generator.email',
    'fakeinbox.com', 'mailnesia.com', 'mailcatch.com', 'mintemail.com',
    'spamgourmet.com', 'temp-mail.org', 'temp-mail.ru', 'temp-mail.com',
    'guerrillamailblock.com', 'guerrillamail.net', 'guerrillamail.org',
    'guerrillamail.biz', 'guerrillamail.co', 'guerrillamail.de',
    'guerrillamail.se', 'grr.la', 'duck.com'
];
$email_parts = explode('@', $email);
$email_domain = isset($email_parts[1]) ? strtolower(trim($email_parts[1])) : '';

if (in_array($email_domain, $disposable_domains)) {
    echo json_encode(['result' => 'error', 'msg' => 'Temporary/disposable email addresses are not allowed. Please use a work or personal email.']);
    exit;
}

// Load API key from environment — key is NOT stored in git
// On Hostinger: create /home/u150244648/domains/asraxmedia.com/.mailchimp_key
//   containing just the API key on one line
$key_file = dirname(__DIR__) . '/.mailchimp_key';
$api_key  = file_exists($key_file) ? trim(file_get_contents($key_file)) : getenv('MAILCHIMP_API_KEY');

if (!$api_key) {
    http_response_code(500);
    echo json_encode(['result' => 'error', 'msg' => 'Server configuration error.']);
    exit;
}

$list_id  = '5e76804856';
$server   = 'us3';

$data = json_encode([
    'email_address' => $email,
    'status'        => 'subscribed',
]);

$ch = curl_init("https://{$server}.api.mailchimp.com/3.0/lists/{$list_id}/members");
curl_setopt($ch, CURLOPT_USERPWD,       "anystring:{$api_key}");
curl_setopt($ch, CURLOPT_POST,          true);
curl_setopt($ch, CURLOPT_POSTFIELDS,    $data);
curl_setopt($ch, CURLOPT_HTTPHEADER,    ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT,       10);

$response  = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
    echo json_encode(['result' => 'error', 'msg' => 'Connection failed. Please try again.']);
    exit;
}

$result = json_decode($response, true);

if ($http_code === 200) {
    echo json_encode(['result' => 'success', 'msg' => "You're subscribed!"]);
} elseif ($http_code === 400 && isset($result['title'])) {
    if ($result['title'] === 'Member Exists') {
        echo json_encode(['result' => 'error', 'msg' => "You're already subscribed!"]);
    } else {
        echo json_encode(['result' => 'error', 'msg' => $result['detail'] ?? 'Something went wrong.']);
    }
} else {
    echo json_encode(['result' => 'error', 'msg' => 'Something went wrong. Please try again.']);
}
