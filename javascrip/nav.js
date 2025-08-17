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

const sections = [
  { el: navBeranda, nav: liBeranda },
  { el: navAboutme, nav: liAboutme },
  { el: navExperince, nav: liExperince },
  { el: navSkill, nav: liSkills },
  { el: navProject, nav: liProject },
  { el: navContack, nav: liContack },
];

window.addEventListener("scroll", () => {
  sections.forEach(({ el, nav }) => {
    const rec = el.getBoundingClientRect();
    if (rec.top <= 100 && rec.bottom >= 50) {
      // reset semua
      sections.forEach(({ nav }) => nav.classList.remove("page-on"));
      // aktifkan yang sekarang
      nav.classList.add("page-on");
    }
  });
});
