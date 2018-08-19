$(function() {
    $('.slider').slick({
        infinite: false,
        speed: 300,
        //variableWidth: true
    });

    $('.slider-menu').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true
    })

});
