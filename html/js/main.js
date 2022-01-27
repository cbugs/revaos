$(document).ready(function() {
    $('.text-trunc').Cuttr({
        //options here
        truncate: 'words',
        length: 15
    });

    $('.text-trunc-long').Cuttr({
        //options here
        truncate: 'words',
        length: 100
    });

    $('.text-trunc-medium').Cuttr({
        //options here
        truncate: 'words',
        length: 25
    });



    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    document.onscroll = function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            // $('.menu').addClass('fixed-top');
        } else {
            // $('.menu').removeClass('fixed-top');
        }
    };

        $('.carousel-post').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $('.carousel-home').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $(".search-bar-toggler").click(function(){
          $(".search-bar").toggleClass("show");
          $(".search-bar-toggler .fas").toggleClass("fa-search");
          $(".search-bar-toggler .fas").toggleClass("fa-times");
      })

});


