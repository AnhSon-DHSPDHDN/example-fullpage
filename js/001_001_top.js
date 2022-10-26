$(document).ready(() => {
  $('.js-slick-banner').slick({
    arrows: false,
    slidesToShow: 1,
    swipe: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          dots: true,
        },
      },
    ],
  });
});
