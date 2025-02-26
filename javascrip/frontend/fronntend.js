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
