<?php
header('Access-Control-Allow-Origin: *'); 

include_once './connect.php';

$question_category = $_REQUEST['question_category'];
$question_difficulty = $_REQUEST['question_difficulty'];
$company = $_REQUEST['company'];

$sql = "select * from question where 1=1  ";


if ($question_category != null) {
    $sql .= " and question_category = '$question_category'";
    
} 
 if ($question_difficulty != null) {
    $sql .= " and question_difficulty = '$question_difficulty'";
    
}

if ($company != null) {
    $sql .= " and company = '$company'";
    
}

$sql .= 'ORDER BY RAND()';
$arr =  array();

$result  = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} 
print_r(json_encode($arr));

$conn->close();

?>