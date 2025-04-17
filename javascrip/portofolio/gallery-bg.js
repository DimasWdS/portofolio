import { cloneBg, cloneBgV2 } from "../../module/aggregate.mjs";

const galleryBg = document.querySelector(".gallery-bg");
const conTeks = document.querySelectorAll(".gallery-bg section");
const teks = document.querySelector(".gallery-bg section span");

conTeks.forEach((section) => {
  for (let i = 0; i < 3; i++) {
    cloneBgV2(section, teks);
  }
});
if (conTeks.length >= 2) {
  const targetSection = conTeks[1]; // section kedua (index 1)
  targetSection.classList.add("dua");
}
if (conTeks.length >= 3) {
  const targetSection = conTeks[2]; // section kedua (index 1)
  targetSection.classList.add("tiga");
}
if (conTeks.length >= 4) {
  const targetSection = conTeks[3]; // section kedua (index 1)
  targetSection.classList.add("empat");
}

for (let i = 0; i < 2; i++) {
  cloneBg(galleryBg);
}
