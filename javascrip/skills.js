{
  const skills = document.getElementById("skills");
  Object.assign(skills.style, {
    // overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    margin: "5rem 0 5rem 0",
  });
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  skills.appendChild(div);
  skills.appendChild(div2);
  [div, div2].forEach((el) => {
    el.classList.add("batas");
    Object.assign(el.style, {
      position: "absolute",
      width: "100%",
      height: "1rem",
      // backgroundColor: "blue",
    });
  });
  Object.assign(div.style, {
    top: "0",
    transform: "rotate(2deg) scale(1.4)",
    transformOrigin: "left",
  });
  Object.assign(div2.style, {
    bottom: "0",
    transform: "rotate(-2deg) scale(1.4)",
    transformOrigin: "left",
  });
}

const conSkills = document.querySelector(".skills");

const conGaruda = document.createElement("div");
conSkills.appendChild(conGaruda);
conGaruda.classList.add("conGaruda");
// badan
const imgBadan = document.createElement("img");
conGaruda.appendChild(imgBadan);
imgBadan.src = "./asset/svg/garudav2/badan.svg";
imgBadan.style.zIndex = "2";
imgBadan.style.scale = "1.2";
// sayap kanan
const imgSayapKanan = document.createElement("img");
conGaruda.appendChild(imgSayapKanan);
imgSayapKanan.src = "./asset/svg/garudav2/sayapKanan.svg";
imgSayapKanan.classList.add("sayapKanan");
// sayap kiri
const imgSayapKiri = document.createElement("img");
conGaruda.appendChild(imgSayapKiri);
imgSayapKiri.classList.add("sayapKiri");
imgSayapKiri.src = "./asset/svg/garudav2/sayapKiri.svg";

const header = document.createElement("div");
conSkills.appendChild(header);
header.classList.add("conTeks");

const teks1 = document.createElement("p");
teks1.textContent = "iLLustrator";
header.appendChild(teks1);
teks1.classList.add("teks1");

const teks3 = document.createElement("p");
teks3.textContent = "Front End";
header.appendChild(teks3);
teks3.classList.add("teks2");

[teks1, teks3].forEach((el) => {
  el.classList.add("p");
});
