const skills = document.querySelector(".skills");
console.log(skills);
skills.classList.add("flexCenter");
Object.assign(skills.style, {
  margin: "10rem 0 5rem 0",
  width: "100%",
  height: "100vh",
});

const conSkills = document.createElement("section");
skills.appendChild(conSkills);
Object.assign(conSkills.style, {
  position: "relative",
  width: "90%",
  maxWidth: "60rem",
  height: "100%",
  // backgroundColor: "blue",
});

const possitionGaruda = document.createElement("section");
conSkills.appendChild(possitionGaruda);
possitionGaruda.classList.add("possitionGaruda");
Object.assign(possitionGaruda.style, {
  position: "relative",
  width: "60rem",
  height: "20rem",
  // backgroundColor: "cyan",
});
const conGaruda = document.createElement("section");
possitionGaruda.appendChild(conGaruda);
conGaruda.classList.add("flexCenter", "animasiBadan");
Object.assign(conGaruda.style, {
  position: "absolute",
  height: "100%",
  width: "100%",
  // backgroundColor: "green",
});
// badan
const imgBadan = document.createElement("img");
conGaruda.appendChild(imgBadan);
imgBadan.src = "./asset/svg/garudav2/badan.svg";
imgBadan.style.zIndex = "1";
imgBadan.style.scale = "1.7";
// sayap kiri
const imgSayapKiri = document.createElement("img");
conGaruda.appendChild(imgSayapKiri);
imgSayapKiri.src = "./asset/svg/garudav2/sayapKiri.svg";
imgSayapKiri.style.scale = "1.6";
imgSayapKiri.classList.add("sayapKiri");
// saap kanan
const imgSayapKanan = document.createElement("img");
conGaruda.appendChild(imgSayapKanan);
imgSayapKanan.src = "./asset/svg/garudav2/sayapKanan.svg";
imgSayapKanan.style.scale = "1.6";
imgSayapKanan.classList.add("sayapKanan");

[imgBadan, imgSayapKiri, imgSayapKanan].forEach((el) => {
  Object.assign(el.style, {
    position: "absolute",
    height: "100%",
    width: "max-content",
  });
});
