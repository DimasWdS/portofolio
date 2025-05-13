const container = document.createElement("main");
document.body.appendChild(container);
container.classList.add("container");
Object.assign(container.style, {
  margin: "0 0 5rem 0",
});

const pageBlur = document.createElement("div");
container.appendChild(pageBlur);
Object.assign(pageBlur.style, {
  position: "absolute",
  top: "0",
  left: "0", // ✅ disarankan untuk posisi absolut
  zIndex: "1",
  height: "100%",
  width: "100%",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.08)", // ✅ agar blur kelihatan
  transformOrigin: "top",
  transition: "all 0.2s ease-in-out",
});
pageBlur.classList.add("scale0");

//
const pageOne = document.createElement("section");
container.appendChild(pageOne);
Object.assign(pageOne.style, {
  height: "100dvh",
  //   backgroundColor: "yellow",
});
{
  const conImg = document.createElement("div");
  pageOne.appendChild(conImg);
  Object.assign(conImg.style, {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    height: "15rem",
    width: "100%",
    margin: "5% 0 0 0",
    // backgroundColor: "yellow",
    backgroundImage: "url(./asset/svg/BACKGROUND-01.svg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: "0.2rem solid var(--third-color)",
    // outline: "0.2rem solid var(--third-color)",
    borderRadius: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  });
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const img = document.createElement("img");
  const img2 = document.createElement("img");
  [div, div2].forEach((el) => {
    conImg.appendChild(el);
    el.classList.add("ukuranDisplayImg");
  });
  [img, img2].forEach((el) => {
    el.classList.add("imgMaxContainer");
  });
  div.appendChild(img);
  img.src = "./asset/webp/HELLCAT(MOBIL).webp";
  img.classList.add("animationKiri");
  div2.appendChild(img2);
  img2.src = "./asset/webp/moonknight.webp";
  img2.classList.add("animationKanan");
}

const conGallery = document.createElement("section");
container.appendChild(conGallery);
conGallery.classList.add("conGallery");
const gallery = document.querySelector(".conGallery");
conGallery.classList.add("scale0");
Object.assign(conGallery.style, {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  top: "0",
  margin: "25rem 0 0 0",
  zIndex: "2",
  width: "100%",
  height: "40rem",
  backgroundColor: "yellow",
  transformOrigin: "bottom",
  transition: "all 0.3s ease-in-out",
  borderTop: "2px solid var(--third-color)",
});
{
}
//
[pageOne].forEach((el) => {
  el.classList.add("width");
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    pageBlur.classList.remove("scale0");
    gallery.classList.remove("scale0");
  } else {
    pageBlur.classList.add("scale0");
    gallery.classList.add("scale0");
  }
});
