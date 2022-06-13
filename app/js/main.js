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

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        asNavFor: '.slider-dots',
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/icons/slick-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next slick-arrow"><img class="left" src="../images/icons/slick-next.svg" alt=""></button>',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/icons/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="../images/icons/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $('.quantity-button').on('click', function () {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);

    $('.surfboard-box__circle').on('click', function () {
        $(this).toggleClass('active')
    });
});