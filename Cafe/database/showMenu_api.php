<?php
include 'config_api.php';
$message = '';

$conn = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);


$obj = json_decode($_REQUEST, true);

$type_id = $obj['type_id'];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT *  FROM menu WHERE $type_id = order_type ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row[] = $result->fetch_assoc()) {
        $item = $row;
        $json = json_encode($item);
    }
} else {
    echo "No result";
}
echo $json;
$conn->close();
