<?php
include_once "./connection.php";

$id = $_REQUEST['id']; 
$name=$_REQUEST["name"];
$des=$_REQUEST["des"];
$img=$_REQUEST["img"];
$price=$_REQUEST["price"];
$start=$_REQUEST["start"];
$end=$_REQUEST["end"];

$sql="UPDATE auction SET name = '$name', description = '$des', img = '$img', min_price = '$price', start_date = '$start', end_date = '$end' WHERE id='$id';";

mysqli_query($con,$sql);

?>