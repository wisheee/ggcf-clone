import { init } from './swiper';

(() => {
  const container = document.querySelector('.container');
  const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');
  const sideMenu = document.querySelector('.js-side-menu-container');
  const culturalCenterActiveClass = 'cultural-center-active';
  let currentCulturalCenterImg = document.querySelector(`.cultural-center-img-wrap .${culturalCenterActiveClass}`);
  let currentCulturalCenterBtn = document.querySelector(`.js-cultural-center-btn.${culturalCenterActiveClass}`);
  const sideMenuActiveClass = 'side-menu-active';
  let currentSideMenuListBtn = document.querySelector(`.${sideMenuActiveClass}`);

  container.addEventListener('click', e => {

    // 패밀리 사이트 버튼 클릭 이벤트
    const familySiteBtn = getTarget(e.target, 'js-family-site-btn');
    if (familySiteBtn && !familySiteWrap.classList.contains('expand')) {
      familySiteWrap.classList.add('expand');
    } else {
      familySiteWrap.classList.remove('expand');
    }

    // 생활문화센터공간 버튼 클릭 이벤트
    const culturalCenterBtn = getTarget(e.target, 'js-cultural-center-btn');
    if (culturalCenterBtn) {
      const culturalCenterImg = document.querySelector(`.js-cultural-center-img-${culturalCenterBtn.dataset.imgNum}`);
      currentCulturalCenterImg.classList.remove(culturalCenterActiveClass);
      culturalCenterImg.classList.add(culturalCenterActiveClass);
      currentCulturalCenterImg = culturalCenterImg;
      
      currentCulturalCenterBtn.classList.remove(culturalCenterActiveClass);
      culturalCenterBtn.classList.add(culturalCenterActiveClass);
      currentCulturalCenterBtn = culturalCenterBtn;
    }

    // 사이드 메뉴 열기 버튼 클릭 이벤트
    const sideMenuOpenBtn = getTarget(e.target, 'js-side-menu-open-btn');
    if (sideMenuOpenBtn) {
      sideMenu.classList.add('side-menu-open-ani', 'side-menu-open');
      document.body.classList.add('lock-screen');
      sideMenu.addEventListener('animationend', (e) => {
        sideMenu.style.opacity = 1;
        sideMenu.classList.remove('side-menu-open-ani');
      }, { once: true });
    }

    // 사이드 메뉴 닫기 버튼 클릭 이벤트
    const sideMenuCloseBtn = getTarget(e.target, 'js-side-menu-close-btn');
    if (sideMenuCloseBtn) {
      sideMenu.classList.add('side-menu-close-ani');
      document.body.classList.remove('lock-screen');
      sideMenu.addEventListener('animationend', (e) => {
        sideMenu.style.opacity = null;
        sideMenu.classList.remove('side-menu-open');
        sideMenu.classList.remove('side-menu-close-ani');
      }, { once: true });
    }

    // 사이드 메뉴 항목 버튼 클릭 이벤트
    const sideMenuListBtn = getTarget(e.target, 'js-side-menu-list-btn');
    if (sideMenuListBtn) {
      if (sideMenuListBtn.classList.contains(sideMenuActiveClass)) {
        sideMenuListBtn.classList.remove(sideMenuActiveClass);
        currentSideMenuListBtn = null;
      } else {
        if (currentSideMenuListBtn)
          currentSideMenuListBtn.classList.remove(sideMenuActiveClass);
        
        sideMenuListBtn.classList.add(sideMenuActiveClass);
        currentSideMenuListBtn = sideMenuListBtn;
      }
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