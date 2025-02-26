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
