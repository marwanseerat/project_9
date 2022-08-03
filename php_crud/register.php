<?php
header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "project_9";

$dsn ="mysql:host=$dbsn;dbname=$dbname";
$conn = new PDO($dsn,$dbun,$password);

$username  = $_REQUEST['username'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);
$sql = "INSERT INTO users (username,email,password) VALUES (?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$username,$email,$password]);


?>