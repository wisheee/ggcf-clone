import { init } from './swiper';

(() => {
  const container = document.querySelector('.container');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  const lnb = document.querySelector('.lnb');
  const headerBackground = document.querySelector('.header-background');
  const snbMenuWrap = document.querySelectorAll('.snb-menu-wrap');
  const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');
  const sideMenu = document.querySelector('.js-side-menu-container');
  const culturalCenterActiveClass = 'cultural-center-active';
  let currentCulturalCenterImg = document.querySelector(`.cultural-center-img-wrap .${culturalCenterActiveClass}`);
  let currentCulturalCenterBtn = document.querySelector(`.js-cultural-center-btn.${culturalCenterActiveClass}`);
  const sideMenuActiveClass = 'side-menu-active';
  let currentSideMenuListBtn = document.querySelector(`.${sideMenuActiveClass}`);

  lnb.addEventListener('mouseover', e => {
    snbMenuWrap.forEach((item) => {
      item.classList.add('visible-item');
    });
    headerBackground.classList.add('visible-item');
  });

  lnb.addEventListener('mouseout', e => {
    snbMenuWrap.forEach((item) => {
      item.classList.remove('visible-item');
    });
    headerBackground.classList.remove('visible-item');
  });

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
    const targetSideMenuListBtn = getTarget(e.target, 'js-side-menu-list-btn');
    if (targetSideMenuListBtn) {
      if (currentSideMenuListBtn)
        currentSideMenuListBtn.classList.remove(sideMenuActiveClass);

      if (targetSideMenuListBtn == currentSideMenuListBtn) {
        currentSideMenuListBtn = null;
        return;
      }
      
      targetSideMenuListBtn.classList.add(sideMenuActiveClass);
      currentSideMenuListBtn = targetSideMenuListBtn;
    }

    // 맨 위로 이동 버튼 클릭 이벤트
    const scrollTopBtn = getTarget(e.target, 'js-scroll-top-btn');
    if (scrollTopBtn) {
      // window.scrollTo(0, 0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  function handleScrollTopBtn() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('attached');
    } else {
      scrollTopBtn.classList.remove('attached');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('before-load');
  });

  window.addEventListener('scroll', e => {
    handleScrollTopBtn();
  });

  init();
  handleScrollTopBtn();
})();