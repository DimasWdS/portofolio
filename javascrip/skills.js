const conSkills = document.querySelector(".skills");
console.log(conSkills);

const conGaruda = document.createElement("div");
conSkills.appendChild(conGaruda);
conGaruda.classList.add("conGaruda");
// badan
const imgBadan = document.createElement("img");
conGaruda.appendChild(imgBadan);
imgBadan.src = "./../asset/svg/garudav2/badan.svg";
imgBadan.style.zIndex = "2";
imgBadan.style.scale = "1.2";
// sayap kanan
const imgSayapKanan = document.createElement("img");
conGaruda.appendChild(imgSayapKanan);
imgSayapKanan.src = "./../asset/svg/garudav2/sayapKanan.svg";
imgSayapKanan.classList.add("sayapKanan");
// sayap kiri
const imgSayapKiri = document.createElement("img");
conGaruda.appendChild(imgSayapKiri);
imgSayapKiri.classList.add("sayapKiri");
imgSayapKiri.src = "./../asset/svg/garudav2/sayapKiri.svg";

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
