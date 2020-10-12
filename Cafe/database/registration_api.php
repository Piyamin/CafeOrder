<?php
// Importing DBConfig.php file.
include 'config_api.php';
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 $user_name = $obj['user_name'];
 $user_email = $obj['user_email'];
 $user_password = $obj['user_password'];
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES (NULL, '$user_name', '$user_email', '$user_password');";
 
 if(mysqli_query($con,$Sql_Query)){
 // If the record inserted successfully then show the message.
$MSG = 'Successfully please back to login screen' ;
// Converting the message into JSON format.
$json = json_encode($MSG);
// Echo the message.
 echo $json ;
 }
 else{
 echo 'Try Again';
 }
 mysqli_close($con);
?>