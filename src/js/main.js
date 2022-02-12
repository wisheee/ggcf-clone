import { init } from './swiper';

(() => {
  const container = document.querySelector('.container');
  const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');

  container.addEventListener('click', e => {

    // 패밀리 사이트 버튼 클릭 이벤트
    let familySiteBtn = getTarget(e.target, 'js-family-site-btn');
    if (familySiteBtn && !familySiteWrap.classList.contains('expand')) {
      familySiteWrap.classList.add('expand');
    } else {
      familySiteWrap.classList.remove('expand');
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