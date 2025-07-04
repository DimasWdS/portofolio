const container = document.createElement("main");
document.body.appendChild(container);
container.classList.add("container");
Object.assign(container.style, {
  // margin: "0 0 5rem 0",
});

// element trigger untuk memunculkan gallery start
const blok = document.createElement("section");
document.body.appendChild(blok);
blok.classList.add("blok");
const conBlok = document.querySelector(".blok");
Object.assign(blok.style, {
  height: "4rem",
  width: "100%",
});
// element trigger untuk memunculkan gallery end

// element blur start
const pageBlur = document.createElement("div");
container.appendChild(pageBlur);
Object.assign(pageBlur.style, {
  position: "absolute",
  top: "0",
  left: "0", // ✅ disarankan untuk posisi absolut
  zIndex: "2",
  height: "100%",
  width: "100%",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.08)", // ✅ agar blur kelihatan
  transformOrigin: "top",
  // transition: "all 0.2s ease-in-out",
});
pageBlur.classList.add("scale0");
// element blur end

//container start
const pageOne = document.createElement("section");
container.appendChild(pageOne);
Object.assign(pageOne.style, {
  height: "100dvh",
  // backgroundColor: "yellow",
});
//container end

// container foto pajangan start

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
//container foro pajangan end

// container teks baha foto pajangan start
{
  const conTeks = document.createElement("section");
  pageOne.appendChild(conTeks);
  Object.assign(conTeks.style, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "yellow",
    margin: "1rem 0 0 0",
    flexWrap: "wrap",
  });
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  [div, div2, div3].forEach((el) => {
    conTeks.appendChild(el);
    el.classList.add("responsive");
    el.classList.add("shadow");
    Object.assign(el.style, {
      overflow: "hidden",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: "0",
      height: "100%",
      width: "33.33%",
      height: "3rem",
      // backgroundColor: "blue",
    });
  });

  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const span4 = document.createElement("span");
  const span5 = document.createElement("span");
  const span6 = document.createElement("span");
  [span, span2, span3, span4, span5, span6].forEach((el) => {
    Object.assign(el.style, {
      position: "absolute",
      fontSize: "2rem",
      fontWeight: "800",
      color: "var(--main-font)",
    });
  });
  [span2, span4, span6].forEach((el) => {
    el.style.top = "-100%";
  });
  {
    span.textContent = "PORTOFOLIO";
    span2.textContent = "MAKE";
    span.classList.add("teksToBotom");
    span2.classList.add("teksFromTop");
    div.appendChild(span);
    div.appendChild(span2);
  }
  {
    span3.textContent = "ILLUSTRATOR";
    span4.textContent = "SOMETHING";
    span3.classList.add("teksToBotom");
    span4.classList.add("teksFromTop");
    div2.appendChild(span3);
    div2.appendChild(span4);
    span3.style.animationDelay = "0.2s";
    span4.style.animationDelay = "0.2s";
    Object.assign(span4.style, {
      color: "var(--third-color)",
    });
  }
  {
    span5.textContent = "WIDY";
    span6.textContent = "COOL.";
    span5.classList.add("teksToBotom");
    span6.classList.add("teksFromTop");
    div3.appendChild(span5);
    div3.appendChild(span6);
    span5.style.animationDelay = "0.2s";
    span6.style.animationDelay = "0.2s";
  }
}
// container teks baha foto pajangan end

// bawah teks foto pajangan start
{
  const conTeks = document.createElement("section");
  pageOne.appendChild(conTeks);
  Object.assign(conTeks.style, {
    display: "flex",
    justifyContent: "center",
    width: "100%",

    // backgroundColor: "yellow",
    margin: "1rem 0 0 0",
  });
  const div = document.createElement("div");
  conTeks.appendChild(div);
  Object.assign(div.style, {
    width: "10rem",
    // backgroundColor: "yellow",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  const btnBack = document.createElement("a");
  div.appendChild(btnBack);
  btnBack.textContent = "Back";
  btnBack.href = "index.html#project";
  Object.assign(btnBack.style, {
    display: "inline-flex",
    backgroundColor: "var(--third-color)",
    fontWeight: "500",
    padding: "0.5rem 1.4rem",
    borderRadius: "10px",
    color: "var(--white)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  });
  const span = document.createElement("span");
  div.appendChild(span);
  span.textContent = "OR";
  Object.assign(span.style, {
    margin: "0.2rem 0 0 0",
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    fontWeight: "500",
    padding: "0.5rem 1.4rem",
    fontWeight: "600",
    color: "var(--background)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  });
  const mouse = document.createElement("div");
  mouse.classList.add("mouse");
  const scroll = document.createElement("div");
  scroll.classList.add("scroll");
  div.appendChild(mouse);
  Object.assign(mouse.style, {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0 0 0",
    height: "2.8rem",
    width: "1.8rem",
    borderRadius: "15px",
    // backgroundColor: "yellow",
    border: "2px solid var(--third-color)",
  });
  mouse.appendChild(scroll);
  Object.assign(scroll.style, {
    width: "0.2rem",
    height: "20%",
    backgroundColor: "var(--third-color)",
    borderRadius: "5px",
    margin: "0.2rem 0 0 0",
  });
}
//bawah teks foto pajangan start

//
const conGallery = document.createElement("section");
container.appendChild(conGallery);
Object.assign(conGallery.style, {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  // backgroundColor: "green",
});
{
  const condalam = document.createElement("section");
  condalam.classList.add("containerCard");
  conGallery.appendChild(condalam);
  Object.assign(condalam.style, {
    height: "100%",
    width: "100%",
    maxWidth: "80rem",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    padding: "1rem 0 1rem 0",
  });
}

[pageOne].forEach((el) => {
  el.classList.add("width");
  // el.style.backgroundColor = "yellow";
});
