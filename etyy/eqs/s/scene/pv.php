<?php
$mysql_server="rm-wz9wqr4cw7156k75fmo.mysql.rds.aliyuncs.com";
$mysql_username="huaiyumysql1";
$mysql_password="Huaiyu!mysql1";
$mysql_database="jinchat";

$key = isset($_GET['key']) ? $_GET['key']: time() . '' . mt_rand(100000, 999999);

$db= new mysqli($mysql_server,$mysql_username,$mysql_password,$mysql_database);
if(mysqli_connect_error()){
  echo 'Could not connect to database.';
  exit;
}
 
$result = $db->query("SELECT `id` FROM `eg_log_visite_keys` where `key` = '".substr($key, 0, 32)."'");
$row = $result->fetch_array();

if (!$row || !isset($row['id'])) {
  $result = $db->query("INSERT INTO `jinchat`.`eg_log_visite_keys` (`key`) VALUES ('".substr($key, 0, 32)."');");
  $result = $db->query("SELECT LAST_INSERT_ID();");
  $row = $result->fetch_array();
  // var_dump($row);
  if ($row && isset($row[0])) {
    echo $row[0];
  } else {
    $result = $db->query("SELECT `id` FROM `eg_log_visite_keys` where `key` = '".substr($key, 0, 32)."'");
    $row = $result->fetch_array();
    if ($row && isset($row['id'])) {
      echo $row['id'];
    } else {
      echo '189';
    }
  }
} else {
  echo $row['id'];
}
// var_dump($key, $row);