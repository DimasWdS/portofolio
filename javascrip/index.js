// nav
// nav container
window.onscroll = function () {
  // Logika untuk navigasi
  const containerNav = document.querySelector(".container-nav");
  const fixednav = containerNav.offsetTop;

  if (window.pageYOffset > fixednav) {
    containerNav.classList.add("nav-fortofolio");
  } else {
    containerNav.classList.remove("nav-fortofolio");
  }

  //   // Logika untuk beranda
  //   const containerBeranda = document.getElementById("beranda");
  //   const fixedberanda = containerBeranda.offsetTop;

  //   if (window.pageYOffset > fixedberanda) {
  //     containerBeranda.classList.add("beranda-scrool");
  //   } else {
  //     containerBeranda.classList.remove("beranda-scrool");
  //   }
};
// haburger btn
const hamBtn = document.getElementById("hamburger");
const xBtn = document.getElementById("xbtn");
const navMenu = document.getElementById("nav-menu");

hamBtn.addEventListener("click", function () {
  hamBtn.classList.add("move-left");
  xBtn.classList.remove("move-right");
  navMenu.classList.remove("item-gone");
});
xBtn.addEventListener("click", function () {
  hamBtn.classList.remove("move-left");
  xBtn.classList.add("move-right");
  navMenu.classList.add("item-gone");
});

// const width = window.innerWidth;
// const navMobile = document.getElementById("nav-menu");

// if (width >= 600 && width <= 1024) {
//   navMobile.classList.remove("item-gone");
// } else {
//   console.log("Layar besar (desktop)");
// }
