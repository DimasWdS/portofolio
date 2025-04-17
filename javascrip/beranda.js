import { cloneBg, cloneBgV2, sum } from "./../module/aggregate.mjs";
// span
const oriTeks = document.querySelector(".layer-1-bg section span");
// section
const oriConTeks = document.querySelector(".layer-1-bg section ");
// untuk append chile
const containerTeks = document.querySelector(".layer-1-bg");

const bgRepet = 20;

for (let i = 0; i < bgRepet; i++) {
  cloneBg(oriTeks);
}

for (let i = 0; i < bgRepet; i++) {
  cloneBgV2(containerTeks, oriConTeks);
}
