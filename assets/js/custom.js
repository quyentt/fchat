$(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.header').addClass('is-fixed');
        } else {
            $('.header').removeClass('is-fixed');
        }
        // lastScrollTop = st;
    });
    $('.menu-icon').click(function() {
        $('.menu').addClass('show');
    });
    $('.menu-close').click(function() {
        $('.menu').removeClass('show');
    });
});