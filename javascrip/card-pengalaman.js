import { cardPengalaman } from "../module/main.mjs";

const pengalaman = document.querySelector(".container-pengalaman");
const containerCard = document.querySelector(".container-card");

cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);
cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);
cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);

//

const conCardClone = containerCard.cloneNode(true);
pengalaman.appendChild(conCardClone);
const itemCard = document.querySelectorAll(".card");
console.info(itemCard);

const conPause = document.querySelectorAll(".con-pause");
console.log(conPause);

itemCard.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    conPause.forEach((element) => {
      element.style.animationPlayState = "paused";
    });
  });
  el.addEventListener("mouseleave", function () {
    conPause.forEach((element) => {
      element.style.animationPlayState = "running";
    });
  });
});
