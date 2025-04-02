const conDesc = document.querySelector(".con-desc");
const imgCard = document.querySelector(".con-card .con-img img");
conDesc.addEventListener("mouseenter", function () {
  //   console.log("tes");
  setTimeout(() => {
    imgCard.classList.add("img-active");
  }, 250);
});
conDesc.addEventListener("mouseleave", function () {
  //   console.log("tes");
  imgCard.classList.remove("img-active");
});
const btnCall = document.querySelector(".btn-call");
btnCall.addEventListener("mouseenter", function () {
  imgCard.classList.remove("img-active");
});
btnCall.addEventListener("mouseleave", function () {
  imgCard.classList.add("img-active");
});
const bds = document.querySelector(".btn-show-desc");
const iconImg = document.querySelector(".btn-show-desc");
const cd = document.querySelector(".con-desc div:nth-child(2)");
bds.addEventListener("click", function () {
  cd.classList.toggle("hide-desc");
  iconImg.classList.toggle("img-rotate");
});
// console.log(iconImg);
