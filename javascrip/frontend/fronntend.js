const text = "FRONT END DEVELOPER";
let index = 0;
let isTyping = true;

function typeEffect() {
  const el = document.getElementById("teks-html");

  if (isTyping) {
    if (index < text.length) {
      el.innerHTML += text.charAt(index++);
    } else {
      isTyping = false;
      setTimeout(() => typeEffect(), 1000);
      return;
    }
  } else {
    if (index > 0) {
      el.innerHTML = text.substring(0, --index);
    } else {
      isTyping = true;
      setTimeout(() => typeEffect(), 500);
      return;
    }
  }
  setTimeout(typeEffect, isTyping ? 150 : 50);
}

window.onload = typeEffect;

const htmlBtn = document.getElementById("html-btn");
const jsBtn = document.getElementById("js-btn");
const conHtml = document.querySelector(".html-konten");
const conJs = document.querySelector(".javascrip-konten");

htmlBtn.addEventListener("click", function () {
  htmlBtn.classList.add("btn-color");
  jsBtn.classList.remove("btn-color");
  htmlBtn.classList.add("line");
  jsBtn.classList.remove("line");
  //
  conHtml.classList.remove("konten-gone");
  conJs.classList.add("konten-gone");
});
jsBtn.addEventListener("click", function () {
  htmlBtn.classList.remove("btn-color");
  jsBtn.classList.add("btn-color");
  htmlBtn.classList.remove("line");
  jsBtn.classList.add("line");
  //
  conHtml.classList.add("konten-gone");
  conJs.classList.remove("konten-gone");
});
