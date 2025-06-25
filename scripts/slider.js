  const swiper = new Swiper('.course__reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.course__reviews-btn--next',
      prevEl: '.course__reviews-btn--prev',
    },
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });