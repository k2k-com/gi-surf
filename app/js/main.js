$(function () {
    $('.header__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        asNavFor: '.slider-dots',
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icons/slick-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icons/slick-next.svg" alt=""></button>',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icons/slick-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icons/slick-next.svg" alt=""></button>',
        asNavFor: '.surf__subtitle',
        asNavFor: '.slider__map',
    });

    $('.slider__map').slick({
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.surf-slider',
        asNavFor: '.surf__subtitle',
        focusOnSelect: true

    });
    $('.surf__subtitle').slick({
        asNavFor: '.slider__map', 
        asNavFor: '.surf-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

    $('.travel__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        asNavFor: '.slider-dots',
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icons/slick-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icons/slick-next.svg" alt=""></button>',
    });
});