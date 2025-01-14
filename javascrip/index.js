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

document.addEventListener("click", function (e) {
  if (!hamBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("item-gone");
    xBtn.classList.add("move-right");
    hamBtn.classList.remove("move-left");
  }
});
//
// pengalaman
// tombol lihat pengalaman
const sp = document.getElementById("desc-pengalaman");
const ab = document.getElementById("icon"); //icon panh btn
const kd = document.getElementById("konten-desc"); //konten deskripsi

sp.addEventListener("click", function () {
  ab.classList.toggle("rotate180");
  kd.classList.toggle("work-desc-active");
});
