<?php
include('./connect.php');

$user_id=$_REQUEST['user_id'];
$comment=$_REQUEST['comment_description'];
$newComment=$_REQUEST['new_comment'];

$post_id=$_REQUEST['experience_id'];
$deleted=$_REQUEST['is_deleted'];
$changeDate= time();


if ($comment != null) {
    $st= $conn->prepare("INSERT INTO comment(comment_description,user_id,experience_id) VALUES('$comment','$user_id','$post_id');");
    $st->execute();
}
elseif ($newComment != null) {
    $st= $conn->prepare("UPDATE comment SET comment='$newComment',updated_at='$changeDate' WHERE id='$commentId';");
    $st->execute();
}
elseif ($deleted == true) {
    $st= $conn->prepare("UPDATE comment SET is_deleted=1 WHERE id='$commentId';");
    $st->execute();
}
?>