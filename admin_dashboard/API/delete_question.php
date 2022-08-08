<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "DELETE from question where question_id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>