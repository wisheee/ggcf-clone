import { initSwiper } from './common/swiper';
import { onNavigationMouseEvent } from './layout/header';
import { onFamilySiteBtnClick } from './layout/footer';
import { onCulturalCenterBtnClick } from './pages/culturalCenter';
import { onScrollTopBtnClick, handleScrollTopBtn } from './components/topBtn';
import { onSideMenuOpenBtnClick, onSideMenuCloseBtnClick, onTargetSideMenuItemClick } from './layout/sideMenu';

(() => {
  const container = document.querySelector('.container');
  
  // container 이벤트 위임
  container.addEventListener('click', e => {
    // 패밀리 사이트 버튼 클릭 이벤트
    onFamilySiteBtnClick(e);

    // 생활문화센터공간 버튼 클릭 이벤트
    onCulturalCenterBtnClick(e);

    // 사이드 메뉴 열기 버튼 클릭 이벤트
    onSideMenuOpenBtnClick(e);

    // 사이드 메뉴 닫기 버튼 클릭 이벤트
    onSideMenuCloseBtnClick(e);
    
    // 사이드 메뉴 항목 클릭 이벤트
    onTargetSideMenuItemClick(e);

    // 맨 위로 이동 버튼 클릭 이벤트
    onScrollTopBtnClick(e);
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('before-load');
  });

  window.addEventListener('scroll', e => {
    handleScrollTopBtn();
  });

  initSwiper();
  handleScrollTopBtn();
  onNavigationMouseEvent();
})();