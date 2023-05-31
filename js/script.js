const isOpenedMenu = className => !!document.body.classList.contains(className);
const toggleMenu = className => document.body.classList.toggle(className);

document.addEventListener('click', clickSomewhere);
function clickSomewhere(event) {
  if (isOpenedMenu('showMobileMenu')) {
    if (isIgnoreElements(event.target)) return;
    toggleMenu('showMobileMenu');
  } else if (event.target.closest('.burger')) {
    toggleMenu('showMobileMenu');
  }
}
function isIgnoreElements(target) {
  if (target.classList.contains('headerMenu')) return true;
  if (target.classList.contains('headerMenu__list')) return true;
  return false;
}