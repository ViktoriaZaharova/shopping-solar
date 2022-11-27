$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
});

$('.nav-dates').slick({
    slidesToShow: 1,
    variableWidth: true,
    // infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></svg></button>'
});

$('.posters-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></svg></button>'
});

$('.entertainment-kids-content').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.entertainment-kids-images'
});

$('.entertainment-kids-images').slick({
    slidesToShow: 1,
    dots: true,
    asNavFor: '.entertainment-kids-content',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></svg></button>'
});

$('.there-slider').slick({
    slidesToShow: 3,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                variableWidth: true,
                infinite: true,
            }
        }
    ]
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

// show list all
$('.btn-scheme').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $('.shops-content'),
        maps = $('.shops-maps');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('магазины');

        content.fadeOut();
        maps.fadeIn();
    } else {
        $this.removeClass('trigger');
        $this.html('схема торгового комплекса');

        content.fadeIn();
        maps.fadeOut();
    }
});
// show list all