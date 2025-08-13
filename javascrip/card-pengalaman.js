import { cardPengalaman } from "../module/main.mjs";

const pengalaman = document.querySelector(".container-pengalaman");
const containerCard = document.querySelector(".container-card");

for (let i = 0; i < 2; i++) {
  cardPengalaman(
    "laptop.svg",
    "Participate in The WiFi Installation Technician at MENAKSOPAL",
    "2023, 5 months",
    "Working in the field"
  );
}
cardPengalaman(
  "laptop.svg",
  "Freelance illustrator",
  "2025, until now",
  "Working any where"
);

//

const conCardClone = containerCard.cloneNode(true);
pengalaman.appendChild(conCardClone);
const itemCard = document.querySelectorAll(".card");

const conPause = document.querySelectorAll(".con-pause");

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
