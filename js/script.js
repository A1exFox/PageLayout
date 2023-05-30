const isOpenedMenu = className => Boolean(document.body.classList.contains(className));
const toggleMenu = className => document.body.classList.toggle(className);

document.addEventListener('click', clickSomewhere);
function clickSomewhere(event) {
  if (isOpenedMenu('showMobileMenu')) {
    if (event.target.classList.contains('headerMenu')) return;
    if (event.target.classList.contains('headerMenu__list')) return;
    toggleMenu('showMobileMenu');
  } else if (event.target.closest('.burger')) {
    toggleMenu('showMobileMenu');
  }
}