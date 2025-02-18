// pengalaman
// card1
const pengalaman1 = document.querySelector(".show-exp-1");
const btnIcon1 = document.querySelector(".btn-icon1");
const descExp1 = document.querySelector(".desc-exp1");
pengalaman1.addEventListener("click", function () {
  btnIcon1.classList.toggle("show-exp-active");
  descExp1.classList.toggle("desc-exp-active");
});
// card2
const pengalaman2 = document.querySelector(".show-exp-2");
const btnIcon2 = document.querySelector(".btn-icon2");
const descExp2 = document.querySelector(".desc-exp2");
pengalaman2.addEventListener("click", function () {
  btnIcon2.classList.toggle("show-exp-active");
  descExp2.classList.toggle("desc-exp-active");
});
