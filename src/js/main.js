import { init } from './swiper';

(() => {
  const container = document.querySelector('.container');
  const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');
  const culturalCenterImg = document.querySelector('.js-cultural-center-img');
  let currentCulturalCenterBtn = document.querySelector('.cultural-center-active');

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
      culturalCenterImg.classList.add('hidden');
      setTimeout(() => {
        culturalCenterImg.setAttribute('src', `images/cultural_center/space_${culturalCenterBtn.dataset.imgNum}.png`);
        culturalCenterImg.setAttribute('alt', culturalCenterBtn.dataset.alt);
        culturalCenterImg.classList.remove('hidden');
      }, 500);
      
      currentCulturalCenterBtn.classList.remove('cultural-center-active');
      culturalCenterBtn.classList.add('cultural-center-active');
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