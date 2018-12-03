
var blade;
var helicopter;
var rotor;
var cnt = 0;
var steps = [800, 600, 400];
var ground;
var tail;
var cd;
var windMills;
var body = $(document.body);
var mySwiper;
var slides = ['helicopter-page', 'bigwheel-page', 'music-page', 'windmill-page', 'description-page', 'redirect-page'];
var slideCnt = 0;
var navDown;
var wheel;
var bgAudio;
var isPlaying = false;
var finger1;
var finger2;
var finger3;
var finger4;
var startBtn;
var gear1;
var gear2;
var url;

var idxByPage = {
    'helicopter-page': 0,
    'bigwheel-page': 1,
    'music-page': 2,
    'windmill-page': 3,
    'description-page': 4,
    'redirect-page': 5
	
};

var btnPlay;
var pageTxt = [
//    ['一','架','最','大','速','度','3','6','5','千','米','/','小','时','，','最','大','爬','升','率','4','.','3','2','米','/','秒','的','直','升','机','，','螺','旋','桨','转','速','每','分','钟','至','少','9','6','0','次'],
	['螺','旋','桨','转','动','让','直','升','机','拥','抱','天','空','，','随','进','随','出','，','活','期','般','便','利','，','天','添','赢','2','号','让','财','富','遇','见','更','好','的','你'],
//    ['世','界','上','最','大','的','摩','天','轮','一','圈','有','3','6','个','观','光','舱','，','每','个','观','光','舱','可','承','载','4','0','名','乘','客','，','一','次','游','览','花','费','3','8','分','钟'],
	['花','1','0','0','0','元','就','能','买','到','天','添','赢','2','号','，','就','像','很','少','钱','坐','一','次','摩','天','轮','，','却','看','到','了','世','界','转','动','的','颜','色'],
//    ['爱','迪','生','1','8','7','7','年','发','明','了','第','一','台','留','声','机','，','之','后','每','一','张','转','动','的','唱','片','记','录','下','人','类','活','动','的','旋','律'],
	['周','四','购','买','，','坐','享','3','天','利','率','，','开','心','的','听','起','了','转','速','频','率','每','分','钟','7','8','转','黑','胶','唱','片'],
//    ['最','好','的','财','富','增','长','，','是','由','无','数','个','金','融','产','品','的','小','齿','轮','在','驱','动','，','我','们','最','终','极','的','追','求','就','是','安','全','、','灵','活','、','高','效']
	['点','亮','城','市','夜','空','的','是','矗','立','在','旷','野','的','风','力','发','电','机','，','让','财','富','增','值','的','是','足','额','抵','押','保','本','保','息','的','天','添','赢','2','号']
];

$(document).ready(function () {
    // var blade = document.querySelector('#helicopter > blade');
    blade = $('#helicopter > .blade')
    helicopter = $('#helicopter');
    rotor = $('#helicopter > .rotor');
    tail = $('#helicopter > .tail');
    ground = $('#helicopter-page > .ground');
    helicopter.bind('click', helicopterClick);

    cd = $('#music-page .layer1').bind('click', playMusic);
    cdPlayer = $('#music-page .player').bind('click', playMusic);

    windMills = $('#windmill-page .windmill').bind('click', startWindMill);
    wheel = $('#bigwheel-page .rotor').bind('click', startBigWheel);

    $('#windmill-page .building .cube').addClass('hidden');
    // createFlowers();
    navDown = $('.nav-down').bind('click', nextSlide).hide();

    finger1 = $('#helicopter-page .finger-1').bind('click', helicopterClick);
    finger2 = $('#bigwheel-page .finger-2').bind('click', startBigWheel);
    finger3 = $('#music-page .finger-3').bind('click', playMusic);
    finger4 = $('#windmill-page .finger-4').bind('click', startWindMill);

    $('#redirect-page .main').bind('click', openPage);
    startBtn = $('#redirect-page .start-btn');
    gear1 = $('#redirect-page .main .gear-1');
    gear2 = $('#redirect-page .main .gear-2');
    url = startBtn.attr('data-redirect');

    initBgAudio();

    $('.page').hide();
    $('#helicopter-page').show();
    // $('#description-page').show();
    // $('#windmill-page').show();
    // $('#bigwheel-page').show();
    // $('#music-page').show();
    // $('#redirect-page').show();
    // $('#description-page .row').addClass('hidden');

    mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        mousewheelControl: true,
        grabCursor: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 300,
        // effect: "flip",      // "fade", "cube", "coverflow" or "flip"
        // effect: "slide",
        onSlideNextStart: function () {
            navDown.hide();
        },
        onSlideNextEnd: function () {
            var idx = mySwiper.activeIndex;
            /*
            if (idx < 4) {
                setFingerPos(idx);
            }
            */
            if (idx === 4) {
                delay(showDescr, 200);
            }
            else if (idx === 5) {
                $('#description-page .down-icon').removeClass('start');
            }
        },

      onProgress: function(swiper, progress){
        for (var i = 0; i < swiper.slides.length; i++){
          var slide = swiper.slides[i];
          var translate, innerTranslate;
          progress = slide.progress;

          if (progress > 0) {
            translate = progress * swiper.height;
          }
          else {        
            translate = 0;
          }

          $(slide).css({
            transform: 'translate3d(0,' + translate + 'px,0)'
          });
        }
      },

      onTouchStart: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          $(swiper.slides[i]).css({ transition: '' });
        }
      },

      onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          $(swiper.slides[i])
            .css({ transition: speed + 'ms' });
        }
      }

    });
    // appendSlide('windmill-page');
    // appendSlide('bigwheel-page');
    // appendSlide('music-page');
    // appendSlide('redirect-page');
    // appendSlide('description-page');
    // appendSlide('redirect-page');
    // setTimeout(showDescr, 3000);
    /*
    function haha () {
        $('#description-page .down-icon').bind('click', nextSlide).show();
    }
    setTimeout(haha, 1000);
    */
});

function showTxt (page) {
    var dom = $('#' + page + ' .intro');
    var txt = pageTxt[idxByPage[page]];
    updateTxt(dom, txt);
}

function updateTxt (dom, txt) {
    for (var i = 0; i < txt.length; i++) {
        (function (num) {
            setTimeout(function () {
                dom.text(txt.slice(0, num + 1).join(""));
                if (num === txt.length - 1) {
                    setTimeout(dom.addClass('start'), 100);
                    setTimeout(appendNextSlide, 600);
                }
            }, 80 * num);
        }) (i);
    }
}

function nextSlide () {
    mySwiper.slideNext();
}

function appendNextSlide () {
    var slide = slides[++slideCnt];
    if (slide) {
        appendSlide(slide);
        var currPage = slides[slideCnt - 1];
        if (currPage !== 'description-page') {
            navDown.appendTo($('#' + currPage)).show();
        }
        else {
            /*
            $('#description-page .down-icon').bind('click', nextSlide).addClass('start').show();
            */
            $('#description-page .down-icon').bind('click', nextSlide).show();
        }
    }
}
function appendSlide (page) {
    var dom = $('#' + page).show();
    mySwiper.appendSlide(dom[0]);
}

function createFlowers () {
    var flower = $('#flower-1');

    for (var i = 0; i < 5; i++) {
        body.append(flower.clone().attr('id', 'flower-' + (i + 2)));
    }
}

function helicopterClick () {
    helicopter.unbind('click', helicopterClick);
    finger1.unbind('click', helicopterClick);
    finger1.hide();
    step();
}
function step () {
    cnt = cnt + 1;

    if (cnt < 4) {
        blade.removeClass('step-' + (cnt -1));
        tail.removeClass('step-' + (cnt -1));

        blade.addClass('step-' + cnt);
        tail.addClass('step-' + cnt);

        setTimeout(step, steps[cnt - 1]);
    }
    else 
        fast();
}

function fast () {
    // blade.removeClass('mid').addClass('fast');
    blade.addClass('fast');
    rotor.addClass('show');
    setTimeout(up, 400);
}
function up () {
    helicopter.addClass('uping');
    // setTimeout(downABit, 2500);
    setTimeout(flyAway, 2400);
}

function downABit () {
    helicopter.addClass('down-before-fly');
}
function flyAway () {
    helicopter.addClass('fly-away');
    setTimeout(switchPage, 500);
    setTimeout(switchPageBack, 1500);
}

function switchPage () {
    $('.swiper-container').addClass('switch');
}
function switchPageBack () {
    $('.swiper-container').removeClass('switch');
    helicopterPage2();
}

function helicopterPage2 () {
    $('#helicopter-page .ground').addClass('hidden');
    $('#helicopter-page .cloud').addClass('start reset');
    helicopter.addClass('reset');
    setTimeout(flyBack, 800);
}

function flyBack () {
    helicopter.addClass('fly-back');
    body.addClass('second-color');
    setTimeout(hover, 1500);
    // setTimeout(flyForward, 800);
}
function flyForward () {
    helicopter.addClass('fly-forward hover');
    $('#helicopter-page .cloud').addClass('fast');
}

/*
function down () {
    ground.addClass('down');
    setTimeout(down2, 1500);
}
function down2 () {
    helicopter.addClass('down');
    setTimeout(hover, 1000);
}
*/
function hover () {
    // helicopter.removeClass('uping').addClass('hover');
    helicopter.addClass('hover');
    $('#helicopter-page .cloud').addClass('fast');
    showTxt('helicopter-page');
}


function playMusic () {
    cd.unbind('click', playMusic);
    cdPlayer.unbind('click', playMusic);
    finger3.unbind('click', playMusic);
    finger3.hide();

    cdPlayer.addClass('start');
    setTimeout(play, 1400);
}

var noteCnt = 0;

function play () {
    $('#music-page .layer3').addClass('start');

    noteStart();
    setTimeout(function () {
        showTxt('music-page');
    }, 2400);
}

function noteStart () {
    noteCnt++;

    if (noteCnt !== 3)
        $('#music-page .note' + noteCnt).addClass('start');

    $('#music-page .note' + (noteCnt + 3)).addClass('start');

    if (noteCnt < 3)
        setTimeout(noteStart, 1500);
}

function startWindMill () {
    windMills.unbind('click', startWindMill);
    finger4.unbind('click', startWindMill);
    finger4.hide();

    windMills.addClass('start');
    setTimeout(light, 500);
}

function flower () {
    for (var i = 1; i < 7; i++) {
        (function (num) {
            setTimeout(function () {
                $('.flower-' + num).addClass('start');
            }, 350 * num);
        }) (i);
    }
}
function light () {
    light1();
    setTimeout(light2, 1400);
    setTimeout(light3, 1800);
    setTimeout(light4, 2200);
    setTimeout(flower, 2600);

    setTimeout(function () {
		showTxt('windmill-page');
    }, 2200);
}

function light1 () {
    for (var i = 1; i < 8; i++) {
        (function (num) {
            setTimeout(function () {
                $('#windmill-page .building .light-1 .cube-' + num).removeClass('hidden');
            }, 300 * num);
        }) (i);
    }

}
function light2 () {
    for (var i = 5; i >= 0; i--) {
        (function (num) {
            setTimeout(function () {
                var num2 = num * 3 + 1;
                $('#windmill-page .building .light-2 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-2 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-2 .cube-' + num2).removeClass('hidden');
            }, 200 * (6 - num));
        }) (i);
    }
}

function light3 () {
    for (var i = 4; i >= 0; i--) {
        (function (num) {
            setTimeout(function () {
                var num2 = num * 4 + 1;
                $('#windmill-page .building .light-3 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-3 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-3 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-3 .cube-' + num2).removeClass('hidden');
            }, 300 * (5 - num));
        }) (i);
    }
}

function light4 () {
    for (var i = 5; i >= 0; i--) {
        (function (num) {
            setTimeout(function () {
                var num2 = num * 4 + 1;
                $('#windmill-page .building .light-4 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-4 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-4 .cube-' + num2++).removeClass('hidden');
                $('#windmill-page .building .light-4 .cube-' + num2).removeClass('hidden');
            }, 300 * (6 - num));
        }) (i);
    }
}

function startBigWheel () {
    wheel.unbind('click', startBigWheel);
    finger2.unbind('click', startBigWheel);
    finger2.hide();
    wheel.addClass('start');

    setTimeout(function () {
        showTxt('bigwheel-page');
    }, 1500);
}

function showDescr () {
    for (var i = 0; i < 4; i++) {
        (function (num) {
            var row = $('#description-page .row-' + num);
            var domHdr = row.find('.col-hdr .inner');
            var domTitle = row.find('.col-title .inner');
            var domContent = row.find('.col-content .inner');
            // delayShow(dom, 300 * num);
            delay(function () {
                domTitle.addClass('start');
                domHdr.addClass('start');
            }, 1200 * (num - 1));
            delay(function () {
                domContent.addClass('start');
            }, 1200 * (num - 1) + 500);
            if (num === 4) {
                delay(appendNextSlide, 1200 * (num - 1) + 800);
            }
        }) (i + 1);
    }
}

/*
function showDescr () {
    for (var i = 0; i < 4; i++) {
        var row = $('#description-page .row-' + (i + 1));
        var colHdr = row.find('.col-hdr .inner');
        var colTitle = row.find('.col-title .inner');
        var content = row.find('.col-content .inner');

        (function (num, colHdr, colTitle, content) {
            delay(function () {
                delayShow(colHdr, 0);
                delayShow(colTitle, 300);
                delayShow(content, 600);
                if (num === 3) {
                    delay(appendNextSlide, 1500);
                }
            }, 1000 * num);
        }) (i, colHdr, colTitle, content);
    }
}
*/

function delayShow (dom, ms) {
    delay(function () {
        dom.removeClass('hidden');
    }, ms);
}

function delay (fn, ms) {
    setTimeout(function () {
        fn();
    }, ms);
}

function togglePlayBgMusic () {
    if (isPlaying)
        bgAudio.pause();
    else 
        bgAudio.play();

    isPlaying = !isPlaying;
    btnPlay.toggleClass('playing', isPlaying);
}

function initBgAudio () {
    btnPlay = $('#play-bg-music').bind('click', togglePlayBgMusic);
    var $bgAudio = $('#bg-music');
    $bgAudio.attr('src', $bgAudio.attr('data-src'));
    bgAudio = $bgAudio[0];
    $bgAudio.bind('canplay', togglePlayBgMusic);
}

function openPage () {
    rotateGear();
}

function rotateGear () {
    gear1.addClass('start');
    gear2.addClass('start');
    // setTimeout(stopRotate, 400);
    setTimeout(openUrl, 200);
}

/*
function stopRotate () {
    $('#redirect-page .main .gear-1').removeClass('start');
    $('#redirect-page .main .gear-2').removeClass('start');
    setTimeout(openUrl, 100);
}
*/

function openUrl () {
    location.href = url;
}
