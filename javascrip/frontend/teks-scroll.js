let awal = 0;
const texts = document.querySelectorAll(".text");

function showText() {
  texts.forEach((text, i) => {
    text.classList.remove("show");
  });
  texts[awal].classList.add("show");
  awal = (awal + 1) % texts.length;
}

setInterval(showText, 2000);
showText();
