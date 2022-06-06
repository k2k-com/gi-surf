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
        slidesToShow: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 1,
        slidesToShow: 4,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icons/slick-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icons/slick-next.svg" alt=""></button>',
    });
});