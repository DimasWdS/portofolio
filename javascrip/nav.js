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
const navBtn = document.getElementById("nav-btn");
const conNav = document.querySelector(".nav");
const conBtn = document.querySelector(".container-nav-btn");
console.log(navBtn);

navBtn.addEventListener("click", function () {
  conNav.classList.toggle("nav-active");
  conBtn.classList.toggle("btn-active");
  navBtn.classList.toggle("ham-active");
});
document.addEventListener("click", function (e) {
  if (!navBtn.contains(e.target) && !conNav.contains(e.target)) {
    conNav.classList.remove("nav-active");
    conBtn.classList.remove("btn-active");
    navBtn.classList.remove("ham-active");
  }
});
