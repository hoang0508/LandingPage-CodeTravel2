const headerMenuList = document.querySelector(".header-menu--list");
const headerBar = document.querySelector(".header-bar");

headerBar.addEventListener("click", (item) => {
  headerMenuList.classList.toggle(".header-menu--active");
});
