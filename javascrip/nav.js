const hamburgerBtn = document.getElementById("ham-btn");
const menu = document.querySelector(".container-list");
hamburgerBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});

document.addEventListener("click", function (e) {
  if (!hamburgerBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("menu-active");
    blokAtas.classList.remove("atas");
    blokTengan.classList.remove("tengah");
    blokBawah.classList.remove("bawah");
  }
});

//
const btn = document.getElementById("ham-btn");
const blokAtas = document.querySelector(".blokAtas");
const blokTengan = document.querySelector(".blokTengah");
const blokBawah = document.querySelector(".blokBawah");

btn.addEventListener("click", function () {
  blokAtas.classList.toggle("atas");
  blokTengan.classList.toggle("tengah");
  blokBawah.classList.toggle("bawah");
});

const navBeranda = document.getElementById("beranda");
const navAboutme = document.getElementById("tentang-saya");
const navExperince = document.getElementById("pengalaman");
const navSkill = document.getElementById("skills");
const navProject = document.getElementById("project");
const navContack = document.getElementById("contack");

const liBeranda = document.querySelector(".a-home");
const liAboutme = document.querySelector(".a-tentang-saya");
const liExperince = document.querySelector(".a-pengalaman");
const liSkills = document.querySelector(".a-skills");
const liProject = document.querySelector(".a-project");
const liContack = document.querySelector(".a-contack");

liBeranda.classList.add("page-on");

window.addEventListener("scroll", () => {
  [
    navBeranda,
    navAboutme,
    navExperince,
    navSkill,
    navProject,
    navContack,
  ].forEach((el) => {
    let rec = el.getBoundingClientRect();
    if (rec.top <= 100 && rec.bottom >= 50) {
      // console.log("sekarang berada dibagina ", el.id);
      // tentang saya
      if (el.id === "tentang-saya") {
        liAboutme.classList.add("page-on");
        liBeranda.classList.remove("page-on");
        liExperince.classList.remove("page-on");
        liSkills.classList.remove("page-on");
        liProject.classList.remove("page-on");
        liContack.classList.remove("page-on");
      } //pengalaman
      else if (el.id === "pengalaman") {
        liExperince.classList.add("page-on");
        liBeranda.classList.remove("page-on");
        liAboutme.classList.remove("page-on");
        liSkills.classList.remove("page-on");
        liProject.classList.remove("page-on");
        liContack.classList.remove("page-on");
      } //skills
      else if (el.id === "skills") {
        liSkills.classList.add("page-on");
        liBeranda.classList.remove("page-on");
        liAboutme.classList.remove("page-on");
        liExperince.classList.remove("page-on");
        liProject.classList.remove("page-on");
        liContack.classList.remove("page-on");
      } //project
      else if (el.id === "project") {
        liProject.classList.add("page-on");
        liAboutme.classList.remove("page-on");
        liExperince.classList.remove("page-on");
        liSkills.classList.remove("page-on");
        liContack.classList.remove("page-on");
      } //contack
      else if (el.id === "contack") {
        liContack.classList.add("page-on");
        liBeranda.classList.remove("page-on");
        liAboutme.classList.remove("page-on");
        liExperince.classList.remove("page-on");
        liSkills.classList.remove("page-on");
        liProject.classList.remove("page-on");
      }
      // reset
      else {
        liBeranda.classList.add("page-on");
        liAboutme.classList.remove("page-on");
        liExperince.classList.remove("page-on");
        liSkills.classList.remove("page-on");
        liContack.classList.remove("page-on");
      }
    }
  });
});
