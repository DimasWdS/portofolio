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

// const conTeks = document.querySelector(".container-teks");

// const hovMe = document.querySelector(".hover-me");
// const conTop = document.querySelector(".atas");
// const conMid = document.querySelector(".tengah");
// const conLow = document.querySelector(".bawah");

const teksAtas = document.querySelector(".atas h1:nth-child(1)");
const teksAtas2 = document.querySelector(".atas h1:nth-child(2)");
const teksMid = document.querySelector(".tengah h1:nth-child(1)");
const teksMid2 = document.querySelector(".tengah h1:nth-child(2)");
const teksLow = document.querySelector(".bawah h1:nth-child(1)");
const teksLow2 = document.querySelector(".bawah h1:nth-child(2)");

// Fungsi umum untuk memulai animasi
function setupAnimation(element1, element2, class1, class2, interval = 5000) {
  // Kondisi awal
  element1.classList.add(class1);
  element2.classList.add(class2);

  // Buat interval animasi
  const animationInterval = setInterval(() => {
    // Toggle kelas untuk kedua elemen
    element1.classList.toggle(class1);
    element2.classList.toggle(class2);
  }, interval);

  // Kembalikan referensi interval untuk pembersihan jika diperlukan
  return animationInterval;
}

// Inisialisasi semua animasi saat DOM telah dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Simpan semua interval dalam satu objek untuk manajemen yang lebih baik
  const intervals = {
    atas: setupAnimation(teksAtas, teksAtas2, "counter-bottom", "from-bottom"),
    tengah: setupAnimation(teksMid, teksMid2, "counter-bottom", "from-bottom"),
    bawah: setupAnimation(teksLow, teksLow2, "counter-bottom", "from-bottom"),
  };

  // Simpan referensi interval di window
  window.animationIntervals = intervals;

  // Bersihkan semua interval saat halaman ditutup
  window.addEventListener("beforeunload", () => {
    Object.values(intervals).forEach((interval) => clearInterval(interval));
  });
});
