<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dataFile = __DIR__ . '/product-emails.json';

// Initialize file if it doesn't exist
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode([]));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return all emails
    $data = file_get_contents($dataFile);
    echo $data;
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $postData = json_decode($input, true);

    if (isset($postData['email'])) {
        $data = json_decode(file_get_contents($dataFile), true);
        
        // Check for duplicates
        foreach ($data as $entry) {
            if ($entry['email'] === $postData['email']) {
                echo json_encode(['success' => false, 'message' => 'Email already exists']);
                exit;
            }
        }
        
        // Append new entry
        $data[] = [
            'id' => $postData['id'] ?? uniqid(),
            'email' => $postData['email'],
            'timestamp' => $postData['timestamp'] ?? date('c')
        ];
        
        file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid data']);
    }
    exit;
}
?>
