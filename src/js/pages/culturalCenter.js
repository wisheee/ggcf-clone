import { getTarget } from '../common/utils';

const culturalCenterActiveClass = 'cultural-center-active';
let currentCulturalCenterImg = document.querySelector(`.cultural-center-img-wrap .${culturalCenterActiveClass}`);
let currentCulturalCenterBtn = document.querySelector(`.js-cultural-center-btn.${culturalCenterActiveClass}`);

// 생활문화센터공간 버튼 클릭 이벤트
const onCulturalCenterBtnClick = (e) => {
  const culturalCenterBtn = getTarget(e.target, 'js-cultural-center-btn');
  if (!culturalCenterBtn)
    return;
  
  const culturalCenterImg = document.querySelector(`.js-cultural-center-img-${culturalCenterBtn.dataset.imgNum}`);
  currentCulturalCenterImg.classList.remove(culturalCenterActiveClass);
  culturalCenterImg.classList.add(culturalCenterActiveClass);
  currentCulturalCenterImg = culturalCenterImg;
  
  currentCulturalCenterBtn.classList.remove(culturalCenterActiveClass);
  culturalCenterBtn.classList.add(culturalCenterActiveClass);
  currentCulturalCenterBtn = culturalCenterBtn;
}

export {
  onCulturalCenterBtnClick
};