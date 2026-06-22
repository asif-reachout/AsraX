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

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['result' => 'error', 'msg' => 'Please enter a valid email address.']);
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
