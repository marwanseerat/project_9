<?php
include_once "./connection.php";

$username=$_REQUEST["username"];
$email=$_REQUEST["email"];
$password=$_REQUEST["password"];
$avatar=$_REQUEST["avatar"];
// $phone=$_REQUEST["phone"];

$sql="INSERT INTO users (username, email, password, avatar) 
                   VALUES ('$username','$email','$password','$avatar')";

mysqli_query($con,$sql);
?>