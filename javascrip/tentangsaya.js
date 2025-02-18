// pengalaman
// card1
const btnCard1 = document.querySelector(".show-exp-1");
const expDesc1 = document.querySelector(".exp-desc1");
const containerCard = document.querySelector(".card-pengalaman1");
btnCard1.addEventListener("click", function () {
  btnCard1.classList.toggle("btn-show-exp-active");
  expDesc1.classList.toggle("exp-desc-active");
  containerCard.classList.toggle("card-pengalaman-active");
});
//
