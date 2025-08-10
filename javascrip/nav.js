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
