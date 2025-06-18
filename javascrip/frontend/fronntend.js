const containerFrontend = document.createElement("main");
document.body.appendChild(containerFrontend);
Object.assign(containerFrontend.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // backgroundColor: "yellow",
});

const containerHome = document.createElement("section");
const boxKiri = document.createElement("section");
const boxKanan = document.createElement("section");
containerFrontend.appendChild(containerHome);
containerHome.appendChild(boxKiri);
containerHome.appendChild(boxKanan);
containerHome.classList.add("containerHome");
Object.assign(containerHome.style, {
  display: "flex",
  width: "100%",
  justifyContent: "center",
});
[boxKanan, boxKiri].forEach((el) => {
  el.classList.add("boxMobile");
  Object.assign(el.style, {
    width: "50%",
    maxWidth: "40rem",
    height: "40rem",
    // backgroundColor: "green",
  });
});

// box kiri
{
  const containerTeks = document.createElement("section");
  const conTeks1 = document.createElement("section");
  const conTeks2 = document.createElement("section");
  const conTeks3 = document.createElement("section");
  boxKiri.appendChild(containerTeks);
  containerTeks.appendChild(conTeks1);
  containerTeks.appendChild(conTeks2);
  containerTeks.appendChild(conTeks3);
  Object.assign(containerTeks.style, {
    height: "100%",
    width: "100%",
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  [conTeks1, conTeks2, conTeks3].forEach((el) => {
    Object.assign(el.style, {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "4.5rem",
      width: "100%",
      // backgroundColor: "cyan",
      overflow: "hidden",
    });
  });

  // teks fase 1
  const p11 = document.createElement("p");
  const p12 = document.createElement("p");
  const p13 = document.createElement("p");
  p11.textContent = "PORTOFOLIO";
  p12.textContent = "FRONTEND";
  p13.textContent = "WIDY";
  conTeks1.appendChild(p11);
  conTeks2.appendChild(p12);
  conTeks3.appendChild(p13);
  [p11, p12, p13].forEach((el, dex) => {
    el.classList.add("teksFaseSatu", "teksMobile");
    Object.assign(el.style, {
      position: "absolute",
      fontSize: "4em",
      margin: "0 0 0 2rem",
      fontWeight: "700",
      color: "var(--white)",
    });
    if (dex === 1) {
      el.style.animationDelay = "0.1s";
    }
    if (dex === 2) {
      el.style.animationDelay = "0.1s";
    }
  });

  // teks fase 2
  const p21 = document.createElement("p");
  const p22 = document.createElement("p");
  const p23 = document.createElement("p");
  p21.textContent = "MAKE";
  p22.textContent = "SOMETHING";
  p23.textContent = "COOL.";
  conTeks1.appendChild(p21);
  conTeks2.appendChild(p22);
  conTeks3.appendChild(p23);
  [p21, p22, p23].forEach((el, dex) => {
    el.classList.add("teksFaseDua", "teksMobile");
    Object.assign(el.style, {
      position: "absolute",
      fontSize: "4em",
      margin: "0 0 0 2rem",
      fontWeight: "700",
      color: "var(--white)",
    });
    if (dex === 1) {
      Object.assign(el.style, {
        color: "var(--third-color)",
      });
    }
    if (dex === 1) {
      el.style.animationDelay = "0.1s";
    }
    if (dex === 2) {
      el.style.animationDelay = "0.1s";
    }
  });
}
