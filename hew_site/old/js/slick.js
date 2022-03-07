$(document).on('ready', function() {
    $(".full-screen_one").slick({
        centerMode: true,
        centerPadding: '5%',
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1000,
        infinite: true,
    });
    $(".full-screen_one").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        switch (currentSlide){
        case 0:
          // 1枚目のスライド
            $(this).slick("slickSetOption", "autoplaySpeed", 10000);
            break;
        default:
          // その他のスライド
            $(this).slick("slickSetOption", "autoplaySpeed", 3500);
            break;
        }
    });
    });