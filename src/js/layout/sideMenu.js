import { getTarget } from '../common/utils';

const sideMenu = document.querySelector('.js-side-menu-container');
const sideMenuActiveClass = 'side-menu-active';
let currentSideMenuListBtn = document.querySelector(`.${sideMenuActiveClass}`);

// 사이드 메뉴 열기 버튼 클릭 이벤트
const onSideMenuOpenBtnClick = (e) => {
  const sideMenuOpenBtn = getTarget(e.target, 'js-side-menu-open-btn');
  if (!sideMenuOpenBtn)
    return;
  
  sideMenu.classList.add('side-menu-open-ani', 'side-menu-open');
  document.body.classList.add('lock-screen');
  sideMenu.addEventListener('animationend', (e) => {
    sideMenu.style.opacity = 1;
    sideMenu.classList.remove('side-menu-open-ani');
  }, { once: true });
}

// 사이드 메뉴 닫기 버튼 클릭 이벤트
const onSideMenuCloseBtnClick = (e) => {
  const sideMenuCloseBtn = getTarget(e.target, 'js-side-menu-close-btn');
  if (!sideMenuCloseBtn)
    return;
  
  sideMenu.classList.add('side-menu-close-ani');
  document.body.classList.remove('lock-screen');
  sideMenu.addEventListener('animationend', (e) => {
    sideMenu.style.opacity = null;
    sideMenu.classList.remove('side-menu-open');
    sideMenu.classList.remove('side-menu-close-ani');
  }, { once: true });
}

// 사이드 메뉴 항목 클릭 이벤트
const onTargetSideMenuItemClick = (e) => {
  const targetSideMenuListBtn = getTarget(e.target, 'js-side-menu-list-btn');
  if (!targetSideMenuListBtn) 
    return;
  
  if (currentSideMenuListBtn)
    currentSideMenuListBtn.classList.remove(sideMenuActiveClass);

  if (targetSideMenuListBtn == currentSideMenuListBtn) {
    currentSideMenuListBtn = null;
    return;
  }
  
  targetSideMenuListBtn.classList.add(sideMenuActiveClass);
  currentSideMenuListBtn = targetSideMenuListBtn;
}

export {
  onSideMenuOpenBtnClick,
  onSideMenuCloseBtnClick,
  onTargetSideMenuItemClick
};