$(document).ready(function(){
  $('#mainBanner').slick({
    slide: 'div',
    infinite: true,
    dots: true,
    autoplay : true,
    speed: 200,
    autoplaySpeed : 5000,
    pauseOnHover : true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.img-slider').slick({
    slide: 'div',
    autoplay : true,
    infinite: true,
    speed: 500,
    dots: true,
    fade: true,
    cssEase: 'linear',
    arrows : true
  });
  $("#banner_box #mainBanner .slick-prev").append(
    '<i class="xi-angle-left-min"></i>'
  );
  $("#banner_box #mainBanner .slick-next").append(
    '<i class="xi-angle-right-min"></i>'
  );
  $("#ad .img .slick-prev").append(
    '<i class="xi-angle-left-min"></i>'
  );
  $("#ad .img .slick-next").append(
    '<i class="xi-angle-right-min"></i>'
  );
});
