$(window).ready(function () {
    var left, width, cont = "#frageinnehall";
    $('.fragebyte').click(function () {
        next();
    });
    $('.re').click(function () {
        $(cont).css("left", "0px");
    });

    function next() {
        width = $(cont).width() / 4;
        left = $(cont).css("left").slice(0, -2) * 1;
        left -= width;
        $(cont).css("left", left + "px");
    }

});

$('#sida').animateCss('bounce');
