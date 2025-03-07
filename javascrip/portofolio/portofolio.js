// document.addEventListener("DOMContentLoaded", function () {
//   const circle = document.querySelector(".circle");
//   const icons = document.querySelectorAll(".circle div");

//   icons.forEach((icon) => {
//     icon.addEventListener("mouseenter", function () {
//       circle.classList.add("spin-stop");
//       icons.forEach((i) => (i.style.animationPlayState = "paused"));
//     });

//     icon.addEventListener("mouseleave", function () {
//       circle.classList.remove("spin-stop");
//       icons.forEach((i) => (i.style.animationPlayState = "running"));
//     });
//   });
// });

// const gallery = document.getElementById("portofolio-galery");
// const btnTop = document.querySelector(".back-top");
// window.addEventListener("scroll", () => {
//   let scrollY = Math.round(window.scrollY); // Ambil posisi scroll saat ini
//   // console.log("Scroll Position:", scrollY);
//   if (scrollY >= 1000) {
//     btnTop.classList.remove("back-top-gone");
//   } else {
//     btnTop.classList.add("back-top-gone");
//   }
// });

const conTeks = document.querySelector(".container-teks");

const conTop = document.querySelector(".atas");
const conMid = document.querySelector(".tengah");
const conLow = document.querySelector(".bawah");

const teksAtas = document.querySelector(".atas h1");
const teksMid = document.querySelector(".tengah h1");
const teksLow = document.querySelector(".bawah h1");

conTeks.addEventListener("mouseenter", function () {
  // console.log("tes");
  setTimeout(() => {
    conTop.classList.add("scale-1");
    conMid.classList.add("scale-1");
    conLow.classList.add("scale-1");
  }, 200);
  setTimeout(() => {
    teksAtas.classList.add("counter-bottom");
  }, 300);
  setTimeout(() => {
    teksMid.classList.add("counter-bottom");
  }, 350);
  setTimeout(() => {
    teksLow.classList.add("counter-bottom");
  }, 350);
});
conTeks.addEventListener("mouseleave", function () {
  // console.log("tes");
  setTimeout(() => {
    conTop.classList.remove("scale-1");
    conMid.classList.remove("scale-1");
    conLow.classList.remove("scale-1");
  }, 600);
  setTimeout(() => {
    teksAtas.classList.remove("counter-bottom");
  }, 200);
  setTimeout(() => {
    teksMid.classList.remove("counter-bottom");
  }, 150);
  setTimeout(() => {
    teksLow.classList.remove("counter-bottom");
  }, 50);
});
