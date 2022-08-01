<?php
require "connection.php";

$username  = $_REQUEST['username'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);
$avatar     = $_REQUEST['avatar'];





$sql = "INSERT INTO users (username,email,password,avatar) VALUES (?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$username,$email,$password,$avatar]);

?>