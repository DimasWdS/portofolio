import { button } from "./../../module/aggregate.mjs";

// Pastikan selector-nya benar. Kalau "tes" adalah class, pakai ".tes"
const btn = document.querySelector(".tes");

if (btn) {
  button(btn, "Back", "index.html#portofolio");
} else {
  console.warn("Element with class 'tes' not found.");
}

window.addEventListener("scroll", () => {
  const conGallery = document.querySelector(".container-gallery");
  const blur = document.querySelector(".blur");
  let scrollY = Math.round(window.scrollY);
  const toggleScale = (add) => {
    blur.classList[add ? "add" : "remove"]("scale-1");
    conGallery.classList[add ? "add" : "remove"]("scale-1");
  };
  toggleScale(scrollY >= 5);
});
