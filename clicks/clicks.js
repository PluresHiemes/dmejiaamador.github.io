/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("YAAAAAS GAGA YAAAS WERK");
/*
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                     top: e.pageY  });
    $('.logo').toggleClass('rotated');
});

setInterval(function () {
    return Math.random() * 200 - 100;
}
            
setInterval(Function () {
    $('logo').css({
        'margin-left': randomMargin(),
        'margin-top': randomMargin()
    });
},200);
*/
var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;
setInterval(function () {
    $('.logo').css({
        'left': x,
        'top': y
    });
    x = x + vx;
    y = y + vy;
    if (x < 0) {
        x = 0;
        vx = -vx;
    }   else if (x > $(window).width()){
        x = $(window).width();
        vx = -vx;
    }
},20);
    
