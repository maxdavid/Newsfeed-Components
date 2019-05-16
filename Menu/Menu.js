
const MENU_OPEN_CLASS = 'menu--open';
const toggleMenu = () => {
  if (menu.classList.contains(MENU_OPEN_CLASS)) menu.classList.remove(MENU_OPEN_CLASS);
  else menu.classList.add(MENU_OPEN_CLASS);
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu')[0];
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button')[0];
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => {toggleMenu();});