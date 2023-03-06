<?PHP
    header("Content-type:application/json");
	$appid = '';
	$secret = '';
    $baseurl= 'https://api.weixin.qq.com/sns/userinfo'; // ?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN';
	$tokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token'; // 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code'; 

    if (!isset($_POST['code']) && !isset($_POST['openid'])) {
        echo '0';
        exit;
    }
    $code = substr(strval($_POST['code']), 0, 64);
    $state = isset($_POST['state']) ? substr(strval($_POST['state']), 0, 64) : '';
    $scope = isset($_POST['scope']) ? substr(strval($_POST['scope']), 0, 64) : '';
    $openid = isset($_POST['openid']) ? substr(strval($_POST['openid']), 0, 64) : '';
    if (strlen($openid) > 0) {
        $info = getUserInfoFormDb($openid);
        if ($info && isset($info['nickname'])) {
            echo json_encode($info); //
            exit;
        }
    }
    if (strlen($code) < 5) {
        echo '0';
        exit;
    }
    $result = getAccessToken($code, $tokenUrl, $appid, $secret);
    if(isset($result['openid']) && isset($result['access_token'])){
        if ($scope == 'snsapi_userinfo') {
            $result = getUserInfo($baseurl, $appid, $result['access_token']);
            
            if($result && isset($result['openid'])) {
                // return $result;
                @insertUserInfoFormDb($result['openid'], $result);
            } else {
                $result = array(
                    'openid' => $result['openid']
                );
            }
        } else {
            $result = array(
                'openid' => $result['openid']
            );
        }
    }else{
        // echo 'false';
        // exit;
        /*
        $result = array(
            'openid' => '23423423',
            'nickname' => 'nickname',
            'headimgurl' => 'headimgurl'
        );
        */
    }

    echo json_encode($result);

	function getAccessToken($code, $tokenUrl, $appid, $secret) {
		$url = $tokenUrl.'?appid='.$appid.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code';
        /*
        echo json_encode(array(
            'url' => $url,
            'code' =>  $code
        ));
        exit;
        */
		$info = file_get_contents($url); // get请求网址，获取数据
		$result = json_decode($info, true);// 对json数据解码
		// halt($result);
        return $result;
	}

	function getUserInfo($baseurl, $openid, $access_token) {
		$url = $baseurl.'?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';
		$info = file_get_contents($url); // get请求网址，获取数据
		$result = json_decode($info, true);// 对json数据解码
		// halt($result);
        return $result;
	}

    function getUserInfoFormDb($openid) {
        $mysql_server="rm-wz9wqr4cw7156k75fmo.mysql.rds.aliyuncs.com";
        $mysql_username="huaiyumysql1";
        $mysql_password="Huaiyu!mysql1";
        $mysql_database="jinchat";

        $db= new mysqli($mysql_server,$mysql_username,$mysql_password,$mysql_database);
        if(mysqli_connect_error()){
            return false;
        }
        $result = $db->query("SELECT `*` FROM `eg_log_openid_keys` where `openid` = '".substr($openid, 0, 64)."'");
        $row = $result->fetch_array();
        // echo json_encode($row);exit;
        if ($row && isset($row[0])) {
            unset($row[0]);
            unset($row[1]);
            unset($row[2]);
            unset($row[3]);
            unset($row[4]);
            return $row;
        } else {
            return false;
        }
    }

    function insertUserInfoFormDb($openid, $userInfo) {
        $mysql_server="rm-wz9wqr4cw7156k75fmo.mysql.rds.aliyuncs.com";
        $mysql_username="huaiyumysql1";
        $mysql_password="Huaiyu!mysql1";
        $mysql_database="jinchat";

        $db= new mysqli($mysql_server,$mysql_username,$mysql_password,$mysql_database);
        if(mysqli_connect_error()){
            return false;
        }
        $result = $db->query("INSERT INTO `jinchat`.`eg_log_openid_keys` (`openid`, `nickname`, `headimgurl`) VALUES ('".substr($openid, 0, 64)."', '".substr($userInfo['nickname'], 0, 255)."', '".substr($userInfo['headimgurl'], 0, 255)."');");
    }

    function curl_request($url, $post='',$cookie='', $returnCookie=0, $json_string=''){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)');
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1);
        curl_setopt($curl, CURLOPT_REFERER, "http://XXX");
        if($post) {
            curl_setopt($curl, CURLOPT_POST, 1);
            if($json_string){
                curl_setopt($curl, CURLOPT_POSTFIELDS,$post);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
                curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($post))
                );
            }else{
                curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post));
            }
        }
        if($cookie) {
            curl_setopt($curl, CURLOPT_COOKIE, $cookie);
        }
        curl_setopt($curl, CURLOPT_HEADER, $returnCookie);
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        if (curl_errno($curl)) {
            return curl_error($curl);
        }
        curl_close($curl);
        if($returnCookie){
            list($header, $body) = explode("\r\n\r\n", $data, 2);
            preg_match_all("/Set\-Cookie:([^;]*);/", $header, $matches);
            $info['cookie']  = substr($matches[1][0], 1);
            $info['content'] = $body;
            return $info;
        }else{
            return $data;
        }
    }

?>