/**
 * Created by admin on 2017/8/21.
 */
function setFontSize() {
    // 获取window 宽度
    // zepto实现 $(window).width()就是这么干的
    if(window.innerWidth <= 640){
        var winWidth =  window.innerWidth;
    }else{
        var winWidth = 640;
    }
    document.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;

}

var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';

var timer = null;

window.addEventListener(evt, function () {
    clearTimeout(timer);

    timer = setTimeout(setFontSize, 300);
}, false);

window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }
}, false);

//初始化
setFontSize();