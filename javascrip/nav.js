// Pilih elemen "contact"
// const contactSection = document.getElementById("contack");
// console.log(contactSection);
// // Buat observer
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("Masuk Contact");
//       }
//     });
//   },
//   { threshold: 0.5 }
// ); // Akan aktif ketika 50% bagian terlihat

// // Amati bagian "contact"
// observer.observe(contactSection);
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const navBtn = document.getElementById("nav-btn");
const conNav = document.querySelector(".nav");
const conBtn = document.querySelector(".container-nav-btn");
console.log(navBtn);
// setTimeout(() => conNav.classList.toggle("nav-active"), 1000);
navBtn.addEventListener("click", function () {
  if (!conNav.classList.contains("nav-active")) {
    // Jika menu belum aktif (akan dibuka)
    conNav.classList.add("nav-active");
    conBtn.classList.add("btn-active");
    navBtn.classList.add("ham-active");

    setTimeout(() => {
      conNav.classList.add("menu-enter");
    }, 500); // Tambahkan efek setelah 500ms
  } else {
    // Jika menu sudah aktif (akan ditutup)
    conNav.classList.remove("menu-enter");

    setTimeout(() => {
      conNav.classList.remove("nav-active");
      conBtn.classList.remove("btn-active");
      navBtn.classList.remove("ham-active");
    }, 200); // Hapus kelas utama setelah efek selesai
  }
});

document.addEventListener("click", function (e) {
  if (!navBtn.contains(e.target) && !conNav.contains(e.target)) {
    conNav.classList.remove("nav-active");
    conBtn.classList.remove("btn-active");
    navBtn.classList.remove("ham-active");
    setTimeout(() => conNav.classList.remove("menu-enter"), 500);
  }
});
