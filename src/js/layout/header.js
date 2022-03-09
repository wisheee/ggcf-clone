const lnb = document.querySelector('.lnb');
const headerBackground = document.querySelector('.header-background');
const snbMenuWrap = document.querySelectorAll('.snb-menu-wrap');

const onNavigationMouseEvent = () => {
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
}

export {
  onNavigationMouseEvent
};