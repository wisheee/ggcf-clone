export const init = () => {
  new Swiper('.intro-section .swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
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
    autoplay: {
      delay: 3000,
    }
  });
};