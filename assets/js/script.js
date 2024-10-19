// eslint-disable-next-line no-undef
$(document).ready(function(){
    // eslint-disable-next-line no-undef
    $('.carousel__inner').slick({

      speed: 1200,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});