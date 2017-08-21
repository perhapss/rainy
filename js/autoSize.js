(function (doc, win, D, $){
    D._mix(D, {
        /**
         *
         * @param options
         */
        fontSize: (function (options){

          //if(!options.setup) return false;
            var defaults = {
                    setup: '100*640'
                },
                opts = $.extend(true, {}, defaults, options),
                str = opts.setup.split('*'),
                size = str[0],
                Windth = str[1];
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function (){
                    var clientWidth = docEl.clientWidth;
                    if(!clientWidth) return;
                    if(clientWidth >= Windth){
                        docEl.style.fontSize = size + 'px';
                    } else {
                        docEl.style.fontSize = size * (clientWidth / Windth) + 'px';
                    }
                };
            if(!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
            $(document).ready(function ($){
                $('body').removeClass('dgg-layout');
            });
        })({setup: "100*640"}),
    });
})(document, window, DGG, jQuery);
