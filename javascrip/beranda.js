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

teksNama.textContent = "HI, I'M WIDY";
conTeksIllustrator.textContent = "Illustrator";
conTeksFrontend.textContent = "Front End";

[conTeksIllustrator, conTeksFrontend].forEach((el) => {
  el.classList.add("teksSampingImgThum");
});

imgFace.setAttribute("src", "./asset/svg/myface.svg");

containerBeranda.appendChild(conNama);
containerBeranda.appendChild(conKonten);
conNama.appendChild(teksNama);
conKonten.appendChild(conTeksIllustrator);
conKonten.appendChild(conImg);
conKonten.appendChild(conTeksFrontend);
conImg.appendChild(imgFace);

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
