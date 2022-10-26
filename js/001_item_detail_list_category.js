$(document).ready(() => {
  $('.js-slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 6,
    variableWidth: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: 'unslick',
      },
    ],
  });
});
