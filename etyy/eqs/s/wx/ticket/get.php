<?php
  header("Content-type:application/json");
  $appid = '';
  $secret = '';
  $tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token'; // 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET'
  $ticketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'; // https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi

  $ticketContent = file_get_contents('./ticket.json');
  $ticket = '';
  try {
    $ticketContent = json_decode($ticketContent, true);
    // var_dump($ticketContent);exit;
    if ($ticketContent && isset($ticketContent['ticket']) && isset($ticketContent['expires_in']) && time() < intval($ticketContent['expires_in'])) {
      $ticket = $ticketContent['ticket'];
    }
  } catch (Exception $e) {
    // echo $e->getMessage();
    $ticket = '';
  }

  if ($ticket !== '' && strlen($ticket) > 10) {
    echo json_encode(array(
      "success" => true,
      "code" => 200,
      "msg" => "操作成功",
      "obj" => array(
        "ticket" => $ticket,
        "appId" => $appid
      ),
      "map" => null,
      "list" => null
    ));
    exit;
  }
  $url = $tokenUrl.'?appid='.$appid.'&secret='.$secret.'&grant_type=client_credential';
  $info = file_get_contents($url); // get请求网址，获取数据
  $result = json_decode($info, true);// 对json数据解码
  // var_dump($result);
  if ($result && isset($result['access_token']) && isset($result['expires_in'])) {
    $result['expires_in'] = time() + intval($result['expires_in']);
    $url = $ticketUrl.'?type=jsapi&access_token='.$result['access_token'];
    $info = file_get_contents($url); // get请求网址，获取数据
    $result = json_decode($info, true);// 对json数据解码
    if ($result && isset($result['ticket']) && isset($result['expires_in'])) {
      $result['expires_in'] = time() + intval($result['expires_in']);
      file_put_contents('./ticket.json', json_encode($result));
      echo json_encode(array(
        "success" => true,
        "code" => 200,
        "msg" => "操作成功",
        "obj" => array(
          "ticket" => $result['ticket'],
          "appId" => $appid
        ),
        "map" => null,
        "list" => null
      ));
      exit;
    }
  }
  echo json_encode(array(
    "success" => false,
    "code" => 301,
    "msg" => "操作失败",
    "obj" => null,
    "map" => null,
    "list" => null
  ));
?>