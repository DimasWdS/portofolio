import { cloneBg, sum } from "./../module/aggregate.mjs";

const oriTeks = document.querySelector(".layer-1-bg section");

for (let i = 0; i <= 50; i++) {
  cloneBg(oriTeks);
}
