<?php
include_once "./connect.php";

$Created_by = $_REQUEST['Created_by'];
$company = $_REQUEST['company'];
$question_category = $_REQUEST['question_category'];
$Type = $_REQUEST['Type'];
$question_difficulty = $_REQUEST['question_difficulty'];
$question  = $_REQUEST['question'];
$question_answer  = $_REQUEST['question_answer'];
$correct_answer  = $_REQUEST['correct_answer'];


$sql = "INSERT INTO question (Created_by, question_category, Type, question_difficulty , question , question_answer , correct_answer) VALUES('$Created_by', '$question_category', '$Type', '$question_difficulty', '$question', '$question_answer', '$correct_answer')";

mysqli_query($conn,$sql);

$conn->close();
