<?php
$nickname = $_POST['nickname'];
$mobile = $_POST['mobile'];
if (empty($nickname) || empty($mobile)) return;
$handler = new PDO('mysql:host=127.0.0.1;dbname=db_yuanxiaojie', 'username', 'password',array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8"));
//$handler->exec("SET names utf-8");
$sql="INSERT INTO tbl_act_festival (nickname, mobile) VALUES (:nickname,:mobile)";
$query = $handler->prepare($sql);
$query->execute(array(
    ':nickname' => $nickname,
    ':mobile' => $mobile
));
