import { getTarget } from '../common/utils';

const scrollTopBtnWrap = document.querySelector('.scroll-top-btn');

// 맨 위로 이동 버튼 클릭 이벤트
const onScrollTopBtnClick = (e) => {
  const scrollTopBtn = getTarget(e.target, 'js-scroll-top-btn');
  if (!scrollTopBtn)
    return;
  
  // window.scrollTo(0, 0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const handleScrollTopBtn = () => {
  if (window.pageYOffset > 300) {
    scrollTopBtnWrap.classList.add('attached');
  } else {
    scrollTopBtnWrap.classList.remove('attached');
  }
}

export {
  onScrollTopBtnClick,
  handleScrollTopBtn
};