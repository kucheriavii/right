$(function() {

    mainPageSliders();/*Слайдер главной страници*/
    fixedMenu(); /*Второе меню*/
    activeItems(); /*документы с классом актив*/
    sandwich() /*кнопка для меню мобильной версии*/
    bigMenuAccordeon();




});
function mainPageSliders(){
    var mainSliderCount = $('.slider .slide').length;
    var slider = $('.slider').slick({
        speed: 2000,
        /*autoplay: true,*/
    });
    $('.header__slider-max-slide').text(mainSliderCount);
    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.header__slider-actual-slide').text(currentSlide+1);
    });
    $('.header__slider-button-right').on('click', function(e){
        e.preventDefault();
        $('.slider').slick('slickNext');
    });
    $('.header__slider-button-left').on('click', function(e){
        e.preventDefault();
        $('.slider').slick('slickPrev');
    });



    var mainSlickMenu = $('.slider-menu').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
    $('.slider-menu__panel .slider-menu__prev-slide').on('click', function(e){
        e.preventDefault();
        mainSlickMenu.slick('slickPrev');
    });
    $('.slider-menu__panel .slider-menu__next-slide').on('click', function(e){
        e.preventDefault();
        mainSlickMenu.slick('slickNext');
    });

    var brandsSlide = $(".brands__list").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true
                }
            }
        ]
    });
    $('.brands__slider-panel .round-larrow').on('click', function(e){
        e.preventDefault();
        brandsSlide.slick('slickPrev');
    });
    $('.brands__slider-panel .round-rarrow').on('click', function(e){
        e.preventDefault();
        brandsSlide.slick('slickNext');
    });
}
function fixedMenu(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            console.log('active');
            $('.header__top-wrapper-fixed').fadeIn();
        } else {
            console.log('Deactive')
            $('.header__top-wrapper-fixed').fadeOut();
        }
    });
}
function activeItems(){
    $('.installation-item').on('mouseenter', function(e){
        $('.installation-item').removeClass('active');
        $(this).addClass('active');
    });


    /***main menu for mobile**/
    var menuButton = '.menu-button';
    var mobileMenu = '.main-menu';
    $(document).on('click', menuButton, function(e){
        $(mobileMenu).slideToggle(500);
    })
}
var sandwich = function(){ //Сендвич анимация на кнопку меню для мобильных версий
    $(".sandwich").click(function() {
        $(".sandwich").toggleClass("active");
        if($(".sandwich").hasClass("active")){
            $('.main-menu').addClass('active');
        } else{
            $('.main-menu').removeClass('active');
        }
    });
};
var bigMenuAccordeon = function(){
    var button = ".big-menu__subitem .arrow";
    var subitem = ".big-menu__subitem";
    var item = ".big-menu__item";

    $(document).on('click', button, function(e){
        e.preventDefault();
        $(this).parents('.big-menu__item-link').next().slideToggle();
    })
};