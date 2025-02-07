const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector(".logo-container").appendChild(logo);
const teks = document.querySelector(".teks").cloneNode(true);

document.querySelector(".container-teks").appendChild(teks);

const cl = document.querySelector(".logo-container");
// cl.addEventListener("mouseover", function () {
//   console.log("Mouse masuk ke elemen!");
// });
cl.addEventListener("mouseenter", function () {
  cl.classList.add("opacity-full");
});
cl.addEventListener("mouseleave", function () {
  cl.classList.remove("opacity-full");
});
//
const karya = document.querySelector(".container-dua");
window.addEventListener("scroll", () => {
  // Ambil posisi scroll saat ini
  const onscroll = window.scrollY;

  // Tentukan kapan elemen akan bergerak keluar
  if (onscroll > 5) {
    // console.log("ye");
    karya.classList.add("dua-active");
  } else {
    // console.log("no");
    karya.classList.remove("dua-active");
  }
});
