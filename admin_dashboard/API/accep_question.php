<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "UPDATE  question SET is_accepted = 1 where question_id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>