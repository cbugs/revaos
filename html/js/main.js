$(document).ready(function() {
    $('.text-trunc').Cuttr({
        //options here
        truncate: 'words',
        length: 15
    });



    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    document.onscroll = function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('fixed-top');
        } else {
            $('.menu').removeClass('fixed-top');
        }
    };


    $('.carousel-home').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

});