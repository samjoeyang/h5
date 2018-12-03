function WeChat(url,title,img,desc){
    $.get("./ajax_getconfig.php",{url:window.location.href},function(data) {

            wx.config(data);
            wx.ready(function () {
                // 在这里调用 API
                wx.onMenuShareTimeline({  //例如分享到朋友圈的API
                    title: title, // 分享标题
                    link: url, // 分享链接
                    imgUrl: img, // 分享图标
                    success: function () {
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: url, // 分享链接
                    imgUrl: img, // 分享图标
                    type:"link", // 分享类型,music、video或link，不填默认为link
                    dataUrl:"", // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
                wx.error(function (res) {

                    //alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示

                });
            });
        },
        "json"
    );
}

//需要调用时执行这个方法。
var url ="http://h5.zhenzhidaole.com/dfzq/yuanxiaojie/";//用户要分享的网址
var title  ="东方证券闹元宵 转起福气赢好礼";//分享的标题
var shareimg ="http://h5.zhenzhidaole.com/dfzq/yuanxiaojie/images/shareimg.png";//分享的图片
console.log(shareimg);
var desc ="东方福运来";//分享的描述信息
WeChat(url,title,shareimg,desc);