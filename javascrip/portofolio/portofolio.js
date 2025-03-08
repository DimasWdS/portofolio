// document.addEventListener("DOMContentLoaded", function () {
//   const circle = document.querySelector(".circle");
//   const icons = document.querySelectorAll(".circle div");

//   icons.forEach((icon) => {
//     icon.addEventListener("mouseenter", function () {
//       circle.classList.add("spin-stop");
//       icons.forEach((i) => (i.style.animationPlayState = "paused"));
//     });

//     icon.addEventListener("mouseleave", function () {
//       circle.classList.remove("spin-stop");
//       icons.forEach((i) => (i.style.animationPlayState = "running"));
//     });
//   });
// });

// const gallery = document.getElementById("portofolio-galery");
// const btnTop = document.querySelector(".back-top");
// window.addEventListener("scroll", () => {
//   let scrollY = Math.round(window.scrollY); // Ambil posisi scroll saat ini
//   // console.log("Scroll Position:", scrollY);
//   if (scrollY >= 1000) {
//     btnTop.classList.remove("back-top-gone");
//   } else {
//     btnTop.classList.add("back-top-gone");
//   }
// });

const conTeks = document.querySelector(".container-teks");

const hovMe = document.querySelector(".hover-me");
const conTop = document.querySelector(".atas");
const conMid = document.querySelector(".tengah");
const conLow = document.querySelector(".bawah");

// teks atas
const teksAtas = document.querySelector(".atas h1:nth-child(1)");
const teksAtas2 = document.querySelector(".atas h1:nth-child(2)");
setInterval(() => {
  if (teksAtas.classList.contains("from-bottom")) {
    teksAtas.classList.remove("from-bottom");
    teksAtas.classList.add("counter-bottom");
  } else {
    teksAtas.classList.remove("counter-bottom");
    teksAtas.classList.add("from-bottom");
  }
}, 5000);

setTimeout(() => {
  setInterval(() => {
    if (teksAtas2.classList.contains("from-top")) {
      teksAtas2.classList.remove("from-top");
      teksAtas2.classList.add("counter-top");
    } else {
      teksAtas2.classList.remove("counter-top");
      teksAtas2.classList.add("from-top");
    }
  }, 5000);
});
// teks atas end

// teks mid start
const teksMid = document.querySelector(".tengah h1:nth-child(1)");
const teksMid2 = document.querySelector(".tengah h1:nth-child(2)");
setTimeout(() => {
  setInterval(() => {
    if (teksMid.classList.contains("from-bottom")) {
      teksMid.classList.remove("from-bottom");
      teksMid.classList.add("counter-bottom");
    } else {
      teksMid.classList.remove("counter-bottom");
      teksMid.classList.add("from-bottom");
    }
  }, 5000);

  setTimeout(() => {
    setInterval(() => {
      if (teksMid2.classList.contains("from-top")) {
        teksMid2.classList.remove("from-top");
        teksAtas2.classList.add("counter-top");
      } else {
        teksMid2.classList.remove("counter-top");
        teksMid2.classList.add("from-top");
      }
    }, 5000);
  });
}, 50);

// teks mid end

// teks low start
const teksLow = document.querySelector(".bawah h1:nth-child(1)");
const teksLow2 = document.querySelector(".bawah h1:nth-child(2)");
setTimeout(() => {
  setInterval(() => {
    if (teksLow.classList.contains("from-bottom")) {
      teksLow.classList.remove("from-bottom");
      teksLow.classList.add("counter-bottom");
    } else {
      teksLow.classList.remove("counter-bottom");
      teksLow.classList.add("from-bottom");
    }
  }, 5000);

  setTimeout(() => {
    setInterval(() => {
      if (teksLow2.classList.contains("from-top")) {
        teksLow2.classList.remove("from-top");
        teksLow2.classList.add("counter-top");
      } else {
        teksLow2.classList.remove("counter-top");
        teksLow2.classList.add("from-top");
      }
    }, 5000);
  });
}, 800);
// teks low end

// conTeks.addEventListener("mouseenter", function () {
//   // console.log("tes");
//   hovMe.classList.add("scale-0");
//   setTimeout(() => {
//     conTop.classList.add("scale-1");
//     conMid.classList.add("scale-1");
//     conLow.classList.add("scale-1");
//   }, 200);
//   setTimeout(() => {
//     teksAtas.classList.add("counter-bottom");
//   }, 300);
//   setTimeout(() => {
//     teksMid.classList.add("counter-bottom");
//   }, 350);
//   setTimeout(() => {
//     teksLow.classList.add("counter-bottom");
//   }, 350);
// });
// conTeks.addEventListener("mouseleave", function () {
//   // console.log("tes");
//   setTimeout(() => {
//     hovMe.classList.remove("scale-0");
//   }, 610);
//   setTimeout(() => {
//     conTop.classList.remove("scale-1");
//     conMid.classList.remove("scale-1");
//     conLow.classList.remove("scale-1");
//   }, 600);
//   setTimeout(() => {
//     teksAtas.classList.remove("counter-bottom");
//   }, 200);
//   setTimeout(() => {
//     teksMid.classList.remove("counter-bottom");
//   }, 150);
//   setTimeout(() => {
//     teksLow.classList.remove("counter-bottom");
//   }, 50);
// });
