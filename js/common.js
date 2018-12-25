$(function() {

    mainPageSliders();/*Слайдер главной страници*/
    fixedMenu(); /*Второе меню*/
    activeItems(); /*документы с классом актив*/
    sandwich() ;/*кнопка для меню мобильной версии*/
    bigMenuAccordeon();
    filterSliders(); /*диапазоны в фильтрах*/
    sortItemsCatalog(); /*Бургеры в фильтре для сортировки*/
    filterInputs(); /*нстройка инпутов в фильтре*/
    filterTable();/*скрывает лишнии строки в таблице описания товара и делает гармошку*/
    slidersProduct();
    popup();
    articleSlider(); //слайдер в статьи
    orderList() //нумирация елементов в списке .ol-list--red-dots li
    pageSearch()//поиск


});


function pageSearch(){
    $('.contacts .contacts__search').on('click', function(e){

        $('<div class="nav-bar__search-wrap-ins"><input type="text" id="nav-bar__search-ins"><button class="nav-bar__search"></button></div>').insertBefore('.header__top-wrapper .contacts .contacts__phone');
        $(this).css('display', 'none')
    });

    $(document).click(function (e) {
        var container = $(".nav-bar__search-wrap-ins");
        if(e.target.className !== 'contacts__search'){
            if (e.target!=container[0]&&container.has(e.target).length === 0){
                container.hide();
                $('.contacts .contacts__search').css('display','block')
            }
        }
    });


    $('.header__top-find').on('click', function(e){
        e.preventDefault();
        if (!$(this).hasClass('searchActive')){
            $('<div class="nav-bar__search-wrap-ins-fix"><input type="text" id="nav-bar__search-ins-fix"><button class="nav-bar__search"></button></div>').insertBefore('.header__top-wrapper-fixed .header__top-find');
            $(this).addClass('searchActive').find('img').attr('src','img/icons/close-icon.png')
        } else {
            $('.header__top-wrapper-fixed .nav-bar__search-wrap-ins-fix').remove();
            $(this).removeClass('searchActive').find('img').attr('src','img/icons/search-blue-icon.png');
        }

    });

    $(document).on('click','.nav-bar__search-wrap-ins .nav-bar__search', function(){
        // $('.nav-bar__search-wrap-ins').remove();
    })
}
function orderList() {

    $('.ol-list--red-dots li').each(function(index){
        $(this).prepend('<span class="ol-list--red-num">'+(index+1)+'</span>')
    })
}
function articleSlider() {
    var mainSlider = $('.article-slider__main-slider-list').slick();
    var panelSlider = $('.article-slider__main-slider-list--small').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.article-slider__main-slider-list',
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.article-slider__main-slider-panel .header__slider-button-left').on('click', function(e){
        e.preventDefault();
        panelSlider.slick('slickPrev');
    });
    $('.article-slider__main-slider-panel .header__slider-button-right').on('click', function(e){
        e.preventDefault();
        panelSlider.slick('slickNext');
    });
}
function popup(){
    var close = '.question-form__close';
    $(document).on('click', close, function(e){
        $(this).parents('.popup').fadeOut(300);
        $('.popup-wrapper').css('background','#fff');
        $('.popup-wrapper').fadeOut(300);
    });

    var questForm = '.question-form__leave-message';
    $(document).on('click', questForm, function(e){
        e.preventDefault();
        $('.popup-wrapper').fadeIn(300);
        $('.popup-submit').fadeIn(300);
    });

    var popupLeave = '.popup-submit .question-form__submit';
    $(document).on('click', popupLeave, function(e){
        e.preventDefault();
        $('.popup-wrapper').css('background','transparent');
        $('.popup-submit').fadeOut(300);
        $('.popup-submit-accept').fadeIn(300);
        console.log($('.popup-submit-accept'));
    });
}
function slidersProduct(){
    var productSlider = $('.product-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    $('.slider-menu__panel-wrap .round-larrow').on('click', function(e){
        e.preventDefault();
        productSlider.slick('slickPrev');
        console.log('test')
    });
    $('.slider-menu__panel-wrap .round-rarrow').on('click', function(e){
        e.preventDefault();
        productSlider.slick('slickNext');
    });

    var productItem = ".product-slider__item";
    var imageSrc = $('.product-image img')
    $(document).on('mouseup', productItem, function(e){
        var src = $(this).find('img').attr('src');
        imageSrc.attr('src', src);
    })
}

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
            $('.header__top-wrapper-fixed').fadeIn();
        } else {
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

    if(userMethods.isMobile(768)){
        var menuButton = '.menu-button';
        var mobileMenu = '.main-menu';
        $(document).on('click', menuButton, function(e){
            $(mobileMenu).slideToggle(500);
        });
    }


    /***catalog menu for mobile***/
    var mobileNavBar = ".mobile-show-category-nav-bar";
    $(document).on('click', mobileNavBar, function(e){
        if($(this).hasClass('active') && userMethods.isMobile(769)){
            $(this).removeClass('active');
            $('.nav-bar__menu').slideUp(300);
            $(this).text('Показать меню');
        } else {
            $(this).addClass('active');
            $('.nav-bar__menu').slideDown(300);
            $(this).text('Скрыть меню');
        }
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

    if(userMethods.isMobile){
        $('.main-menu').addClass('mobile-menu-link');
    }
    $('.mobile-menu-link .main-menu__item').on('click', function(){
        $('.sandwich').trigger('click')
    })


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
function filterSliders(){
    $( "#slider-range-temp" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#temperature-from" ).val( ui.values[ 0 ] );
            $( "#temperature-to" ).val( ui.values[ 1 ] );
        }
    });

    $( "#slider-range-pressure" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#pressure-from" ).val( ui.values[ 0 ] );
            $( "#pressure-to" ).val( ui.values[ 1 ] );
        }
    });
}
function sortItemsCatalog(){
    var catalogBurgerLink  = ".catalog-filter__burger-menu a";
    $(document).on('click', catalogBurgerLink, function(){
        $(catalogBurgerLink).removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('catalog-filter__sort-horisontal')){
            $('.category-item-big-wrap--vertical').removeClass('active');
            $('.category-item-big-wrap--horizontal').addClass('active')
        } else if($(this).hasClass('catalog-filter__sort-vertical')){
            $('.category-item-big-wrap--horizontal').removeClass('active');
            $('.category-item-big-wrap--vertical').addClass('active')
        }
    });
}
function filterInputs(){
    var filterCheck  = '.nav-bar__block-checkline .filter-check';
    $(document).on('change', filterCheck, function(){
        if(this.checked){
            //если елемент активен
            $(this).parents('label').addClass('active');

        } else {
            //если елемент неактивен
            $(this).parents('label').removeClass('active');
        }
    });
    var filterRadio  = '.nav-bar__block-radioline .filter-radio';
    $(document).on('change', filterRadio, function(){
        if(this.checked){
            //если елемент активен
            $('.nav-bar__block-radioline').removeClass('active');
            $(this).parents('label').addClass('active');

        } else {
            //если елемент неактивен
            $(this).parents('label').removeClass('active');
        }
    });


    var input = ".nav-bar__block-wrap input";
    var button = ".nav-bar__search-btn";

    $(document).on('blur', input, function(e){
        $(this).parents('.nav-bar__block-wrap').find('.nav-bar__search-btn').fadeOut(300)
    })
    $(document).on('focus', input, function(e){
        $(this).parents('.nav-bar__block-wrap').find('.nav-bar__search-btn').fadeIn(300)
    });
}
function filterTable(){
    var table = ".views-table";
    var tableRows = ".views-table tr";
    var button = ".category-item-big__table-button";

    $(table).each(function(){
        $(this).find('tr').slice(6).css('display', 'none').parents(table).addClass('slided');
    });

    $(document).on('click', button, function(e){
        e.preventDefault();
        if($(this).parents('.category-item-big').find(table).hasClass('slided')){
            $(this).parents('.category-item-big').find(tableRows).slideDown(300).parents(table).removeClass('slided');
        } else {
            $(this).parents('.category-item-big').find(tableRows).slice(6).css('display','none').parents(table).addClass('slided');
        }
    })
}

var userMethods = {
    isMobile: function (size) {
        if ($(window).width() < size) {
            // console.log($(window).width())
            return true;
        } else {
            return false;
            //console.log($(window).width())
        }
    }
}
