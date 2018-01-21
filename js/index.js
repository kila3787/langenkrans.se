/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function () {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function () {

    if ($(window).scrollTop() > 600) {
        $('.menyn').addClass('sticky');
    } else {
        $('.menyn').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobilvy').click(function () {
    if ($('.menyn').hasClass('menyOppen')) {
        $('.menyn').removeClass('menyOppen');
    } else {
        $('.menyn').addClass('menyOppen');
    }
});

$('.menyn li a').click(function () {
    if ($('.menyn').hasClass('menyOppen')) {
        $('.navigation').removeClass('menyOppen');
        $('.menyn').removeClass('menyOppen');
    }
});


/*----------------------------------------------------*/
/* skroll
------------------------------------------------------ */

jQuery(document).ready(function ($) {

    $('.skroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

});


TweenMax.staggerFrom(".heading", 0.8, {
    opacity: 0,
    y: 20,
    delay: 0.2
}, 0.4);
