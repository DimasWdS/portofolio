// import { sum, createSosmed } from "./../module/aggregate.mjs";

const containerBeranda = document.getElementById("beranda");

Object.assign(containerBeranda.style, {
  width: "100%",
  height: "100vh",
  // backgroundColor: "green",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const conNama = document.createElement("section");
const conKonten = document.createElement("section");
const conImg = document.createElement("div");
const conTeksIllustrator = document.createElement("div");
const conTeksFrontend = document.createElement("div");
const imgFace = document.createElement("img");
const teksNama = document.createElement("p");
const conSosmed = document.createElement("sections");

const conIconSosmed = document.createElement("section");

teksNama.textContent = "HI, I'M WIDY";
conTeksIllustrator.textContent = "Illustrator";
conTeksFrontend.textContent = "Front End";

[conTeksIllustrator, conTeksFrontend].forEach((el) => {
  el.classList.add("teksSampingImgThum");
});

imgFace.setAttribute("src", "./asset/svg/myface.svg");

containerBeranda.appendChild(conNama);
containerBeranda.appendChild(conKonten);
containerBeranda.appendChild(conSosmed);
conNama.appendChild(teksNama);
conKonten.appendChild(conTeksIllustrator);
conKonten.appendChild(conImg);
conKonten.appendChild(conTeksFrontend);
conImg.appendChild(imgFace);

conSosmed.appendChild(conIconSosmed);

Object.assign(conNama.style, {
  position: "relative",
  width: "100%",
  height: "6rem",
  // backgroundColor: "yellow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

teksNama.classList.add("teksNamaMobile");
Object.assign(teksNama.style, {
  position: "absolute",
  top: "1.5rem",
  fontSize: "clamp(3em, 9vw, 10em)",
  fontWeight: "800",
  color: "var(--white)",
});

Object.assign(conKonten.style, {
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // backgroundColor: "yellow",
});

conImg.classList.add("conImgMobile");
Object.assign(conImg.style, {
  height: "20rem",
  aspectRatio: "1/1",
  scale: "1.1",
  // backgroundColor: "yellow",
});

Object.assign(imgFace.style, {
  filter: "drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))",
});

[conTeksIllustrator, conTeksFrontend].forEach((el) => {
  el.classList.add("mobileGone");
  Object.assign(el.style, {
    display: "flex",
    alignItems: "center",
    height: "100%",
    // fontSize: "clamp(1em, 3vw, 4em)",
    fontSize: "1.5em",
    color: "var(--main-font)",
  });
});

Object.assign(conSosmed.style, {
  margin: "4rem 0 0 0",
  width: "100%",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});

Object.assign(conIconSosmed.style, {
  display: "flex",
  gap: "1rem",
});

function createIcon(href, logoSrc) {
  const div = document.createElement("div");
  div.classList.add("iconSosmedBeranda");
  conIconSosmed.appendChild(div);
  Object.assign(div.style, {
    height: "2.5rem",
    width: "2.5rem",
    backgroundColor: "var(--white)",
    borderRadius: "50%",
    cursor: "pointer",
    overflow: "hidden",
  });
  const a = document.createElement("a");
  div.appendChild(a);
  a.classList.add("flexCenter");
  Object.assign(a.style, {
    display: "inline-flex",
    height: "100%",
    width: "100%",
  });
  a.setAttribute("href", `${href}`);
  a.setAttribute("target", "_blanks");
  const logo = document.createElement("img");
  a.appendChild(logo);
  Object.assign(logo.style, {
    height: "100%",
    width: "100%",
    transform: "scale(0.7)",
  });
  logo.setAttribute("src", `${logoSrc}`);
  logo.setAttribute("alt", "instagram");
  // logo.src = `${logoSrc}`;
}

createIcon("#", "./asset/icon/inkedin.svg");
createIcon(
  "https://www.instagram.com/dimaswidysaputraa/",
  "./asset/icon/instagram-color.svg"
);
createIcon(
  "https://www.instagram.com/dimaswidysaputraa/",
  "./asset/icon/tiktok-color.svg"
);
createIcon(
  "https://www.instagram.com/dimaswidysaputraa/",
  "./asset/icon/facebook-color.svg"
);

const iconSosmedBeranda = document.querySelectorAll(".iconSosmedBeranda");
// console.log(iconSosmedBeranda);

[...iconSosmedBeranda].forEach((el) => {
  gsap.from(el, { y: 100, opacity: 0 });
  el.addEventListener("mouseenter", function () {
    el.style.transform = "translateY(-5px)";
  });
  el.addEventListener("mouseleave", function () {
    el.style.transform = "translateY(0)";
  });
});
