<?php
// Define your username and password
$USERNAME = 'g221210374@sakarya.edu.tr';
$PASSWORD = 'g221210374';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == $USERNAME && $password == $PASSWORD) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>