<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx36396085547b4a8a", "e829f38070b7556a89269fada6d9acac",$_GET['url']);
$signPackage = $jssdk->GetSignPackage();
$signPackage['jsApiList'] = array('onMenuShareTimeline','onMenuShareAppMessage');
$signPackage['debug'] = false;
echo json_encode($signPackage);
?>