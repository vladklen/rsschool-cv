// BurgerMenu

const burgerIcon = document.querySelector(".header__icon");
const navLink = document.querySelectorAll(".nav__link");
const headerNav = document.querySelector(".header__nav");
const footerYear = document.querySelector(".footer__year");
const year = new Date().getFullYear();

console.log(year);

footerYear.innerHTML = year;

if (burgerIcon) {
  burgerIcon.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    headerNav.classList.toggle("active");
    burgerIcon.classList.toggle("active");
  });
}

if (navLink.length > 0) {
  navLink.forEach((el) => {
    el.addEventListener("click", () => {
      if (burgerIcon.classList.contains("active")) {
        console.log("fejkgdfjhkgjdfhkgfkdjh");
        document.body.classList.remove("lock");
        headerNav.classList.remove("active");
        burgerIcon.classList.remove("active");
      }
    });
  });
}
