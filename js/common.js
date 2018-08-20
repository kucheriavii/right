$(function() {
    $('.slider').slick({
        speed: 2000,
        autoplay: true,
    });

    $('.slider-menu').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true
    })

});
