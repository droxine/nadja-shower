$(document).ready(function(){
    $(".row .col-sm-4 img").addClass("animated bounceIn");
});

$(function() {
    $('li a').click(function(e) {
        var $this = $(this);
        $this.closest('ul').find('.active').removeClass('active');
        $this.parent().addClass('active');
    });
});