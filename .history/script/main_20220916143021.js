const headerMenuList = document.querySelector(".header-menu--list");
const headerBar = document.querySelector(".header-bar");
const overlay = document.querySelector(".overlay");

headerBar.addEventListener("click", (item) => {
  headerMenuList.classList.toggle("header-menu--active");
  overlay.classList.toggle("show-overlay");
});
