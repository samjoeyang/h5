//中文编码格式转换
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}
function generateQRCodeof(s) {
    $(".div-qrcode").html(null)
    jQuery('.div-qrcode').qrcode({
        render: canvas, // 渲染方式有table方式（IE兼容）和canvas方式，默认使用canvas方式
        width: 250,
        height: 250,
        text: utf16to8(s), //设置二维码文本的内容 
        typeNumber: -1,//计算模式
        correctLevel: 2,//二维码纠错级别
        background: "#fff",//背景颜色
        foreground: "#000", //二维码颜色

    });
    // $("#save").click(function () {
    var canvas = $('.div-qrcode').find("canvas").get(0);
    var url = canvas.toDataURL('image/jpeg');
    $(".div-qrcode > canvas").attr("data-img", url).click(function () {
        convert2canvas()
    })
    $('.div-qrcode').html("<img src=" + url + ">")
    // $(".div-qrcode").attr('data-img', url).get(0).click(function() {
    //     alert(url)
    // });
    // return false;
    // });
}

function convert2canvas() {
    var shareContent = document.getElementsByClassName("div-qrcode")[0]
    var canvas = document.createElement("canvas");
    var width = document.body.offsetWidth;
    var height = document.body.offsetHeight;
    var scale = window.devicePixelRatio; // 设备的devicePixelRatio

    // canvas.width = width * scale;
    // canvas.height = height * scale;
    canvas.width = 150;
    canvas.height = 150;
    canvas.getContext("2d").scale(scale, scale);

    var opts = {
        scale: scale,
        canvas: canvas,
        logging: true, //日志开关
        width: width,
        height: height,
        useCORS: true
    };

    html2canvas(shareContent, opts).then(function (canvas) {
        var context = canvas.getContext('2d');
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        var img = Canvas2Image.saveAsJPEG(canvas, 1, canvas.width, canvas.height);
        img.src = canvas.toDataURL('image/jpeg');
        var rstElem = document.getElementsByClassName("div-qrcode")[0]
        var rstElem = $(".div-qrcode > canvas")[0]
        rstElem.innerHTML = '';
        rstElem.style.display = 'block';
        rstElem.style.padding = '0';
        rstElem.style.width = 'calc( 100vw )';
        rstElem.appendChild(img);
        img.style.width = "100%";
        // img.style.display = "none";
        img.style.padding = '0';
        img.style.margin = '0';
        img.style.cssText = "width:100%;height:" + height + ";position:absolute;top:0;left:0";
        alert("生成图片成功，长按保存！")
        // saveImgtoServer();
    });
}
$(document).ready(function () {
    var show_text = GetQueryString("text")
    if (isNone(show_text)) {
        $("#text-content").val(current_page)
    } else {
        $("#text-content").val(show_text)
    }
    $("#click-create").click(function () {
        generateQRCodeof($("#text-content").val())
    })
    // $("div-qrcode").click(function () {
    //     convert2canvas()
    // })
})