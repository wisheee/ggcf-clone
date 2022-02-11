import { init } from './swiper';

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('before-load');
  });

  init();
})();