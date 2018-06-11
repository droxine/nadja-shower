$(document).ready(function () {
    $(".row .col-sm-4 img").addClass("animated bounceIn");
});

$(function () {
    $('li a').click(function (e) {
        var $this = $(this);
        $this.closest('ul').find('.active').removeClass('active');
        $this.parent().addClass('active');
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $('.container.text-justify').each(function (i) {
        if ($(this).position().top <= scrollDistance + 100) {
            console.log("scrollDistance");
            $('.tabs li').removeClass('active');
            $('.tabs li').eq(i).addClass('active');
        }
    });
}).scroll();