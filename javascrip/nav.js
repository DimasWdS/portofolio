const hamburgerBtn = document.getElementById("ham-btn");
const menu = document.querySelector(".container-list");
hamburgerBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});

document.addEventListener("click", function (e) {
  if (!hamburgerBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("menu-active");
  }
});

//
const btn = document.getElementById("ham-btn");
const blokAtas = document.querySelector(".blokAtas");
const blokTengan = document.querySelector(".blokTengah");
const blokBawah = document.querySelector(".blokBawah");

btn.addEventListener("click", function () {
  blokAtas.classList.toggle("atas");
  blokTengan.classList.toggle("tengah");
  blokBawah.classList.toggle("bawah");
});
