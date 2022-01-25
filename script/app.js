$(document).ready(function(){
    $('.content__place-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        prevArrow: '<div class="slick-prev"> <i class="btn-left far fa-arrow-alt-circle-left"></i></div>',
        nextArrow: '<div class="slick-next"> <i class="btn-right far fa-arrow-alt-circle-right"></i></div>',
    });
  });
  $(document).ready(function(){
    $('.content__place-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        dots: true,
    });
  });
  if($(window).width() < 740)
{
  $(document).ready(function(){
      $('.header__list-contact').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          
      });
    });
}
$(document).ready(function(){
  $('.product__item-list-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      draggable: false,
      prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
      dots: true,
  });
});