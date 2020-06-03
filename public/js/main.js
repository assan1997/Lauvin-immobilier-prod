'use strict';

(function ($) {
  /*------------------
        Slick Nav
    --------------------*/
  $('.main-menu').slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true,
  });

  /*------------------
        Preloader
    --------------------*/
  $(window).on('load', function () {
    $('.loader').fadeOut();
    $('#preloder').delay(400).fadeOut('slow');
  });

  /*------------------
        Background Set
    --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  /*------------------
        Nice Select
    --------------------*/
  $(document).ready(function () {
    $('.filter-location').niceSelect();
  });

  $(document).ready(function () {
    $('.filter-property').niceSelect();
  });

  $(document).ready(function () {
    $('.date-select').niceSelect();
  });

  /*------------------
        Carousel Slider
    --------------------*/
  $('.slider-active').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });

  /*--------------------------------
        Property Image Carousel Slider
    -----------------------------------*/
  $('.property-img').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });

  /*--------------------------------
        Price Slider
    -----------------------------------*/
  $('#slider-range').slider({
    range: true,
    min: 50,
    max: 300,
    step: 50,
    value: 50,
    values: [50, 300],
    slide: function (event, ui) {
      $('#slider-range .slider-left').text(ui.values[0] + 'k');
      $('#slider-range .slider-right').text(ui.values[1] + 'k');
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      // add padding top to show content behind navbar
      $('.header-section').css('position', 'fixed');
      $('.header-section').css('background', 'white');
      $('.main-menu a').css('color', '#000');
      $('.top-social a').css('color', '#fff');
      $('.logo h6').css('color', 'black');
      $('.header-section').css('transition', 'all ease-in-out .3s');
      $('.header-section').css(
        'box-shadow',
        '0px 8px 16px 0px rgba(0, 0, 0, 0.2)'
      );
    } else {
      $('.header-section').css('background', 'transparent');
      $('.main-menu a').css('color', '#fff');
      $('.logo h6').css('color', '#fff');
      $('.header-section').css('transition', 'all ease-in-out .3s');
      $('.header-section').css('box-shadow', 'none');
    }
  });
})(jQuery);
