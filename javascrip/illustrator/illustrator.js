const container = document.createElement("main");
document.body.appendChild(container);
container.classList.add("container");
Object.assign(container.style, {
  margin: "0 0 5rem 0",
});

const pageBlur = document.createElement("div");
container.appendChild(pageBlur);
Object.assign(pageBlur.style, {
  //   display: "none",
  position: "absolute",
  zIndex: "1",
  height: "100%",
  backgroundColor: "blue",
  //   backdropFilter: "blur(10px)",
});

const pageOne = document.createElement("section");
container.appendChild(pageOne);
Object.assign(pageOne.style, {
  height: "100dvh",
  //   backgroundColor: "yellow",
});
//
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
    backgroundImage: "url(./../asset/svg/BACKGROUND-01.svg)",
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
  div2.appendChild(img2);
  img2.src = "./asset/webp/moonknight.webp";
}
//
[pageOne].forEach((el) => {
  el.classList.add("width");
});
