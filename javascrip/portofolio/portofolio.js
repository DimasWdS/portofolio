document.addEventListener("DOMContentLoaded", function () {
  const circle = document.querySelector(".circle");
  const icons = document.querySelectorAll(".circle div");

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      circle.classList.add("spin-stop");
      icons.forEach((i) => (i.style.animationPlayState = "paused"));
    });

    icon.addEventListener("mouseleave", function () {
      circle.classList.remove("spin-stop");
      icons.forEach((i) => (i.style.animationPlayState = "running"));
    });
  });
});

const gallery = document.getElementById("portofolio-galery");
const btnTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  let scrollY = Math.round(window.scrollY); // Ambil posisi scroll saat ini
  console.log("Scroll Position:", scrollY);
  if (scrollY >= 1000) {
    btnTop.classList.remove("back-top-gone");
  } else {
    btnTop.classList.add("back-top-gone");
  }
});
