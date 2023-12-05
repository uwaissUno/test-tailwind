// NAVBAR
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const totop = document.querySelector("#toTop");
  if (window.pageYOffset > fixedNav) {
    header.classList.add("header-fixed");
    totop.classList.add("flex");
    totop.classList.remove("hidden");
  } else {
    header.classList.remove("header-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};

//HAMBURGER MENU
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});

// Klik Di luar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// DARK MODE
const darkToggle = document.querySelector("#toggle-dark");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = 'dark'
  } else {
    html.classList.remove("dark");
    localStorage.theme = 'light'
  }
});
// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
darkToggle.checked = true
  } else {
    darkToggle.checked = false
  }


