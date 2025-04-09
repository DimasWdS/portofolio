const navBtn = document.getElementById("nav-btn");
const conNav = document.querySelector(".nav");
const conBtn = document.querySelector(".container-nav-btn");

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
    setTimeout(() => {
      conNav.classList.remove("nav-active");
      conBtn.classList.remove("btn-active");
      navBtn.classList.remove("ham-active");
    }, 200);
    conNav.classList.remove("menu-enter");
  }
});
