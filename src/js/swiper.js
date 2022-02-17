export const init = () => {
  new Swiper('.intro-section .swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">${index + 1}</span>`;
      }
    }
  });

  new Swiper('.monthly-section .swiper', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 800,
    slideToClickedSlide : true,
    // autoplay: {
    //   delay: 3000
    // }
  });

  new Swiper('.news-section .swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      '767': {
        slidesPerView: 2,
        spaceBetween: 25
      },
      '991': {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  new Swiper('.sns-info-section .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 800,
    autoplay: {
      delay: 1500
    },
    breakpoints: {
      '767': {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 25
      },
      '991': {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 40
      },
      '1199': {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
};