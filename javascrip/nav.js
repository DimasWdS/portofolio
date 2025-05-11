function createli(konten, menuju) {
  const menu1 = document.createElement("li");
  listMenu.appendChild(menu1);

  const a1 = document.createElement("a");
  a1.textContent = `${konten}`;
  a1.href = `${menuju}`;
  menu1.appendChild(a1);
  Object.assign(a1.style, {
    display: "inline-flex",
    fontSize: "2em",
    marginLeft: "2%",
    textDecoration: "none",

    width: "100%",
  });
  menu1.classList.add("menuList");
}
const conNav = document.getElementById("nav");
const btnHam = document.getElementById("btn-ham");

const conMenu = document.createElement("div");
conMenu.classList.add("menu");
conNav.appendChild(conMenu);
Object.assign(conMenu.style, {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "Center",
  transform: "translateY(-100%)",
  top: "0",
  right: "0",
  height: "100dvh",
  width: "100%",
  backgroundColor: "var(--white)",
  borderRadius: "0 0 10rem 10rem",
  transition: "all 0.7s ease-in-out",
  boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.35)",
});
conMenu.classList.add("widthMenu");

const listMenu = document.createElement("ul");
conMenu.appendChild(listMenu);
Object.assign(listMenu.style, {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  listStyleType: "none",
});
// Object.assign(menu1.style, {});

createli("Beranda", "#");
createli("About me", "#tentang-saya");
createli("Skills", "#skills");
createli("Portofolio", "#portofolio");
createli("Reach me", "#contack");

const hamMenu = document.querySelector(".menu");
const hamIcon = document.querySelector(".hamburger");
const xIcon = document.querySelector(".xIcon");
const menuList = document.querySelectorAll(".menuList");
const total = menuList.length;
btnHam.addEventListener("click", function () {
  hamMenu.classList.toggle("menu-active");

  hamIcon.classList.toggle("scale0");
  xIcon.classList.toggle("scale0");

  menuList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.toggle("animationMenu");
    }, (total - index - 1) * 50); // Mulai dari elemen terakhir
  });
});

document.addEventListener("click", function (e) {
  if (!btnHam.contains(e.target) && !hamMenu.contains(e.target)) {
    hamMenu.classList.remove("menu-active");
    hamIcon.classList.remove("scale0");
    xIcon.classList.add("scale0");
    menuList.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("animationMenu");
      }, (total - index - 1) * 50); // Mulai dari elemen terakhir
    });
  }
});

menuList.forEach((el) => {
  el.addEventListener("click", function () {
    hamMenu.classList.remove("menu-active");
    hamIcon.classList.remove("scale0");
    xIcon.classList.add("scale0");
    menuList.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("animationMenu");
      }, (total - index - 1) * 50); // Mulai dari elemen terakhir
    });
  });
});
