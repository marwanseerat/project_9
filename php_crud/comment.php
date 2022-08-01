<?php
include('./connect.php');
$st= $connect->prepare("SELECT comment.experience_id,comment.user_id,comment.is_deleted,comment.id,comment.created_at,users.username,users.avatar FROM comment LEFT JOIN users ON comment.user_id=users.id;");
$st->execute();
$info=$st->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
?>