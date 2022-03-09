import { getTarget } from '../common/utils';

const familySiteWrap = document.querySelector('.js-family-site-btn-wrap');

// 패밀리 사이트 버튼 클릭 이벤트
const onFamilySiteBtnClick = (e) => {
  const familySiteBtn = getTarget(e.target, 'js-family-site-btn');
  if (familySiteBtn && !familySiteWrap.classList.contains('expand')) {
    familySiteWrap.classList.add('expand');
  } else {
    familySiteWrap.classList.remove('expand');
  }
}

export {
  onFamilySiteBtnClick
};