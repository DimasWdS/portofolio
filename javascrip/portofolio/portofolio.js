const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector(".logo-container").appendChild(logo);
const teks = document.querySelector(".teks").cloneNode(true);

document.querySelector(".container-teks").appendChild(teks);

// const text = document.querySelector(".text").cloneNode(true);
// document.querySelector(".header").appendChild(text);

// const element = document.getElementById("card");
// const elementTwo = document.getElementById("header");
// const elementtes = document.querySelector(".animated-element");

// // Tambahkan event listener untuk scroll
// window.addEventListener("scroll", () => {
//   // Ambil posisi scroll saat ini
//   const scrollPosition = window.scrollY;

//   // Tentukan kapan elemen akan bergerak keluar
//   if (scrollPosition > 10) {
//     element.classList.add("hide"); // Tambahkan kelas 'hide' saat scroll
//     elementTwo.classList.add("hide");
//     elementtes.classList.add("tes");
//   } else {
//     element.classList.remove("hide"); // Tampilkan kembali jika scroll ke atas
//     elementTwo.classList.remove("hide");
//     elementtes.classList.remove("tes");
//   }
// });

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
