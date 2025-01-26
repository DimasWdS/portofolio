// cv alert
const dCv = document.getElementById("down-cv");
const cAlertCv = document.querySelector(".alert-cv");
const cMain = document.querySelector(".main-index");
dCv.addEventListener("click", function () {
  cAlertCv.classList.add("alert-active");
  cMain.classList.add("main-index-fixed");
});
const cvConfirm = document.getElementById("cv-confrim");
cvConfirm.addEventListener("click", function () {
  cAlertCv.classList.remove("alert-active");
  cMain.classList.remove("main-index-fixed");
});
//
// web alert
const bsp = document.getElementById("see-frontend");
const cAlertWeb = document.querySelector(".alert-web");
const wConfirm = document.getElementById("frontend-confirm");
bsp.addEventListener("click", function () {
  cAlertWeb.classList.add("alert-active");
  cMain.classList.add("main-index-fixed");
});

wConfirm.addEventListener("click", function () {
  cAlertWeb.classList.remove("alert-active");
  cMain.classList.remove("main-index-fixed");
});
