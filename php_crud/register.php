<?php
include_once "connect.php";

$username  = $_REQUEST['username'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);
$avatar     = $_REQUEST['avatar'];

$sql = "INSERT INTO users (username,email,password,avatar) VALUES ('$username','$email','$password',$avatar);";

mysqli_query($conn,$sql);

$conn->close();


?>