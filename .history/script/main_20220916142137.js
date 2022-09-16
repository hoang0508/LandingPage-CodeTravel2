const headerMenuList = document.querySelector(".header-menu--list");
const headerBar = document.querySelector(".header-bar");

headerBar.addEventListener((item) => {
  headerMenuList.classList.toggle(".header-menu--active");
});
