<?php
include_once "./connection.php";

$id=$_REQUEST["id"];

$sql = "DELETE FROM comment where comment_id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>