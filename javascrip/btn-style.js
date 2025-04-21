import { gilapBtn, sum } from "./../module/aggregate.mjs";
const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  gilapBtn(element);
});
