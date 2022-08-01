<?php
include('./connect.php');

$user_id=$_REQUEST['user_id'];
$newComment=$_REQUEST['comment_description'];
$commentId=$_REQUEST['comment_id'];
$post_id=$_REQUEST['experience_id'];
$deleted=$_REQUEST['is_deleted'];
$changeDate= time();



if ($comment != null) {
    $st= $connect->prepare("INSERT INTO comment(comment_description,user_id,comment_id) VALUES('$comment','$user_id','$post_id');");
    $st->execute();
}
elseif ($newComment != null) {
    $st= $connect->prepare("UPDATE comment SET comment='$newComment',updated_at='$changeDate' WHERE id='$commentId';");
    $st->execute();
}
elseif ($deleted == true) {
    $st= $connect->prepare("UPDATE comment SET is_deleted=1 WHERE id='$commentId';");
    $st->execute();
}
?>