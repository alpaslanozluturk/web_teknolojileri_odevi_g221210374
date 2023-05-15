<?php
// Define your username and password
$USERNAME = 'g221213074@sakarya.edu.tr';
$PASSWORD = 'g221210374';

// Get the username and password from the POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Check if the username and password match
if ($username === $USERNAME && $password === $PASSWORD) {
    // If the username and password match, return 'success'
    echo 'success';
} else {
    // If the username and password don't match, return 'error'
    echo 'error';
}
?>