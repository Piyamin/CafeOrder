<?php
include 'config_api.php';
$message = '';

$conn = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);
if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);
   } 
    
   $sql = "SELECT m.order_id,m.order_name ,m.order_image,d.detail_price FROM menu as m join detail as d
   on m.order_id = d.detail_id";
    
   $result = $conn->query($sql);
    
   if ($result->num_rows >0) {
    
    
    while($row[] = $result->fetch_assoc()) {
    
    $tem = $row;
    
    $json = json_encode($tem);
    
    
    }
    
   } else {
    echo "No Results Found.";
   }
    echo $json;
   $conn->close();
   ?>