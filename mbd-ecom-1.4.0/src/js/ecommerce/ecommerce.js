require ('./js.cookie');
import './rating';

$(document).ready(function () {

  $.fn.mdbEcommerceGallery = function () {
    const $mainImg = $(this).find('.main-img');

    $mainImg.on('mousemove', function (e) {

      let posx = $(this).offset().left;
      let posy = $(this).offset().top;
      let x = ((e.pageX - posx - $(this).width() / 2) * -1 / 2);
      let y = ((e.pageY - posy - $(this).height() / 2) * -1 / 2);

      $(this).find('img').first().css({
        'transform-origin': 'center center',
        'transform': `scale(4.5) translate(${x}px, ${y}px)`
      });
    });

    $mainImg.on('mouseleave click', function (e) {

      $(this).find('img').first().css({
        'transform': 'scale(1)'
      });
    });

    $(this).find('.gallery-item').on('click', function () {

      const newSrc = $(this).find('img').first().attr('src');
      
      $(this).closest('.product-gallery').find('.main-img a').first().attr('href', newSrc);
      $(this).closest('.product-gallery').find('.main-img img').first().attr('src', newSrc);
    });

    $(this).find('.gallery-item.hoverable').on('mouseenter', function () {

      const newSrc = $(this).find('img').first().attr('src');

      $(this).closest('.product-gallery').find('.main-img a').first().attr('href', newSrc);
      $(this).closest('.product-gallery').find('.main-img img').first().attr('src', newSrc);
    });
  }

  $('.product-gallery').mdbEcommerceGallery();

});
