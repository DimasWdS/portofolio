const conNav = document.getElementById("nav");
const btnHam = document.getElementById("btn-ham");

const conMenu = document.createElement("div");
conMenu.classList.add("menu");
conNav.appendChild(conMenu);
Object.assign(conMenu.style, {
  position: "absolute",
  // display: "none",
  transform: "translateY(-100%)",
  top: "0",
  right: "0",
  height: "100dvh",
  width: "50%",
  backgroundColor: "var(--white)",
  borderRadius: "0 0 10% 1000%",
  transition: "all 0.3s ease-in-out",
});

const hamMenu = document.querySelector(".menu");
btnHam.addEventListener("click", function () {
  hamMenu.classList.toggle("menu-active");
  const hamIcon = document.querySelector(".hamburger");
  const xIcon = document.querySelector(".xIcon");

  hamIcon.classList.toggle("scale0");
  xIcon.classList.toggle("scale0");
});

document.addEventListener("click", function (e) {
  if (!btnHam.contains(e.target) && !hamMenu.contains(e.target)) {
    hamMenu.classList.remove("menu-active");
  }
});
