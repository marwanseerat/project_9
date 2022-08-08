<?php

include_once 'connection.php';

$is_accepted = $_REQUEST['is_accepted'];


$sql="SELECT * from question WHERE 1=1";

if ($is_accepted != null) {
  $sql .= " and is_accepted = '$is_accepted'";
  
} 

$result=mysqli_query($con,$sql);

if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
echo "[";
for($i=0;$i<mysqli_num_rows($result);$i++){
  echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo "]";


 ?>