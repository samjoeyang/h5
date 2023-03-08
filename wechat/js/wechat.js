var appID = "wx7fd0be08ea2fc7b6"
// var api_domain = window.top.location.origin
var api_domain = "https://www.zhenzhidaole.com"
var isWXBrowser = navigator.appVersion.indexOf('MicroMessenger/') > -1 || navigator.userAgent.indexOf('MicroMessenger/') > -1

function trim(str) {
    var whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    for (var i = 0, len = str.length; i < len; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    for (i = str.length - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}

function isNone(s) {
    if (s == undefined || s == null || s.toString().length == 0 || s == '') { 
        return true
    } else {
        return false
    }
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]); return null;
}

function getFavIconUrl(url) {
    var prohost;
    prohost = url.match(/([^:\/?#]+:\/\/)?([^\/@:]+)/i);
    prohost = prohost ? prohost : [true, "http://", document.location.hostname];

    //补全url
    if (!prohost[1]) {
        prohost[1] = "http://";
    }
    //抓取ico
    return "http://www.google.com/s2/favicons?domain=" + prohost[1] + prohost[2];
}

function getUserKey() {
    var key = (new Date().getTime()) + '' + Math.random()
    if (window.localStorage.getItem('zhenzhidaole_viewercounterkey') === null) {
        window.localStorage.setItem('zhenzhidaole_viewercounterkey', key)
    } else {
        key = window.localStorage.getItem('zhenzhidaole_viewercounterkey')
    }
    return key
}

function chkOpenid() {
    try {
        if (isNone($.cookie("openid"))) {
            openid = window.localStorage.getItem('openid')
        } else {
            openid = $.cookie("openid")
        }
    } catch (error) {
        openid = window.localStorage.getItem('openid')
    }
    openid_from_url = GetQueryString("openid")

    if (isNone(openid)) {
        // 没有openid,跳转去登陆
        if (isWXBrowser) {
            if (window.top.location.href.indexOf('code') < 0) {
                window.location.replace(api_domain + "/wechat/auth/?appid=" + appID + "&scope=snsapi_userinfo&noparams=1&backurl=" + encodeURIComponent(window.top.location.href));
            } else {
                window.localStorage.setItem('openid',openid_from_url)
                window.localStorage.setItem('userInfo',GetQueryString("data"))
            }
        } else {
            // do nothing
            console.log("not wechat browser")
        }
    } else {
        console.log("wechat has login!")
    }
}

function getConfigData() {
    var api_url = api_domain + "/wechat/config/?appid=" + appID

    $.ajax({
        url: api_url,
        type: "get",
        contentType: 'application/json;charset=utf-8',
        // data: JSON.stringify({ "url": window.top.location.href }),
        data: { "url": window.top.location.href },
        dataType: "json",
        success: function (res) {
            c_timestamp = res.timestamp
            c_nonceStr = res.nonceStr
            c_signature = res.signature
            console.log(res)
            alert(JSON.stringify(res))
            return res
        }
    })
}

$(document).ready(function () {
    /*
    setInterval(function () {
        var audio = document.querySelector('audio')
        if (audio.paused) {
            audio.play().catch(function(error) {
                alert(error)
            })
        }
    }, 5000)
    */

    var c_timestamp = ""
    var c_nonceStr = ""
    var c_signature = ""

    var shareTitle = document.title
    var shareLink = window.location.href
    var shareDesc = document.getElementsByName('description')[0].content
    var keywords = document.getElementsByName('keywords')[0].content
    // var meta = document.getElementsByTagName('meta');
    // for (i in meta) {
    //     if (typeof meta[i].name != "undefined" && meta[i].name.toLowerCase() == "description") {
    //         shareDesc = meta[i].content;
    //     }
    // }
    var shareImgUrl = 'https://www.zhenzhidaole.com/media/filer_public_thumbnails/filer_public/19/33/193321a0-48f2-4632-aeb3-4a20ea1e98e6/logo.png__200.0x200.0_q85_subsampling-2.png'
    // var shareImgUrl = document.getElementsByTagName('img')[0].src
    // var icon = "http://www.google.com/s2/favicons?domain=http://www.baidu.com"
    document.getElementsByTagName('link')

    getConfigData()
    if (isWXBrowser) {

        getUserKey()
        chkOpenid()
        getConfigData()

        if (window.top.location.href.indexOf('code') > -1 || (openid !== null && openid.toString().length > 0)) {
            // do nothing
        } else {
            // do something
        }

        //获得JS-SDKj相关信息
        $.get("/wechat/ajax_getconfig/1:Q/", { url: window.location.href }, function (data) {
            // wx.config(data)
            wx.config({
                debug: false,               // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appID,               // 必填，公众号的唯一标识
                timestamp: c_timestamp,     // 必填，生成签名的时间戳
                nonceStr: c_nonceStr,       // 必填，生成签名的随机串
                signature: c_signature,     // 必填，签名
                jsApiList: [                // 必填，需要使用的JS接口列表
                    'checkJsApi',
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'chooseImage',
                    // 'onMenuShareWeibo',
                    // 'onMenuShareQZone',
                    // 'startRecord',
                    // 'stopRecord',
                    // 'onVoiceRecordEnd',
                    // 'playVoice',
                    // 'pauseVoice',
                    // 'stopVoice',
                    // 'onVoicePlayEnd',
                    // 'uploadVoice',
                    // 'downloadVoice',
                    // 'chooseImage',
                    // 'previewImage',
                    // 'uploadImage',
                    // 'downloadImage',
                    // 'translateVoice',
                    // 'getNetworkType',
                    // 'openLocation',
                    // 'getLocation',
                    // 'hideOptionMenu',
                    // 'showOptionMenu',
                    // 'hideMenuItems',
                    // 'showMenuItems',
                    // 'hideAllNonBaseMenuItem',
                    // 'showAllNonBaseMenuItem',
                    // 'closeWindow',
                    // 'scanQRCode',
                    // 'chooseWXPay',
                    // 'openProductSpecificView',
                    // 'addCard',
                    // 'chooseCard',
                    // 'openCard',
                ]
            });

            wx.ready(function () {
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                wx.checkJsApi({
                    jsApiList: ['chooseImage', 'updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                    success: function (res) {
                        // 以键值对的形式返回，可用的api值true，不可用为false
                        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                        if (res.checkResult.updateAppMessageShareData) {
                            wx.updateAppMessageShareData({
                                title: shareTitle, // 分享标题
                                desc: shareDesc,   // 分享描述
                                link: shareLink,   // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                imgUrl: shareImgUrl, // 分享图标
                                success: function () {
                                    // 设置成功
                                    console.log("updateAppMessageShareData_suc")
                                },
                                cancel: function () {
                                    // 用户取消分享后执行的回调函数
                                    console.log("updateAppMessageShareData_cancel")
                                }
                            });
                        }

                        if (res.checkResult.updateTimelineShareData) {
                            wx.updateTimelineShareData({
                                title: shareTitle,
                                link: shareLink,
                                imgUrl: shareImgUrl,
                                success: function () {
                                    // 设置成功
                                    console.log("updateTimelineShareData_suc")
                                },
                                cancel: function () {
                                    // 用户取消分享后执行的回调函数
                                    console.log("updateTimelineShareData_cancel")
                                }
                            });
                        }
                        if (res.checkResult.chooseImage) {
                            // wx.chooseImage({
                            //     count: 1, // 默认9
                            //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                            //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                            //     success: function (res) {
                            //     var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                            //     }
                            // });  
                        }
                    }
                });
            });

            wx.error(function (res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.log(res)
            });

        });
    }
})