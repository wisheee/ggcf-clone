import { init } from './swiper';

(() => {
  const container = document.querySelector('.container');
  const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');
  const culturalCenterActiveClass = 'cultural-center-active';
  let currentCulturalCenterImg = document.querySelector(`.cultural-center-img-wrap .${culturalCenterActiveClass}`);
  let currentCulturalCenterBtn = document.querySelector(`.js-cultural-center-btn.${culturalCenterActiveClass}`);

  container.addEventListener('click', e => {

    // 패밀리 사이트 버튼 클릭 이벤트
    let familySiteBtn = getTarget(e.target, 'js-family-site-btn');
    if (familySiteBtn && !familySiteWrap.classList.contains('expand')) {
      familySiteWrap.classList.add('expand');
    } else {
      familySiteWrap.classList.remove('expand');
    }

    // 생활문화센터공간 버튼 클릭 이벤트
    let culturalCenterBtn = getTarget(e.target, 'js-cultural-center-btn');
    if (culturalCenterBtn) {
      const culturalCenterImg = document.querySelector(`.js-cultural-center-img-${culturalCenterBtn.dataset.imgNum}`);
      currentCulturalCenterImg.classList.remove(culturalCenterActiveClass);
      culturalCenterImg.classList.add(culturalCenterActiveClass);
      currentCulturalCenterImg = culturalCenterImg;
      
      currentCulturalCenterBtn.classList.remove(culturalCenterActiveClass);
      culturalCenterBtn.classList.add(culturalCenterActiveClass);
      currentCulturalCenterBtn = culturalCenterBtn;
    }
  });

  function getTarget(elem, className) {
    while (!elem.classList.contains(className)) {
      elem = elem.parentNode;

      if (elem.nodeName == 'BODY') {
        elem = null;
        return;
      }
    }

    return elem;
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('before-load');
  });

  init();
})();