<?php
header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "project_9";

$dsn ="mysql:host=$dbsn;dbname=$dbname";

$conn = new PDO($dsn,$dbun,$password , [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);


    $email    =  $_REQUEST['email'];
    $username =  $_REQUEST['username'];
    $password = md5($_REQUEST['password']);


    try {
        $sql = "SELECT * FROM users WHERE (email='$email'  OR username='$username') AND password='$password'";
    
        $q = $conn->query($sql);
        $q->setFetchMode(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
     while ($row = $q->fetch()): 
            echo htmlspecialchars($row['email'].' '.$row['username']);
     endwhile; 
     ?>
