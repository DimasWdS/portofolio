const conProject = document.querySelector(".project");
conProject.classList.add("flexCenter");
Object.assign(conProject.style, {
  width: "100%",
});

const container = document.createElement("section");
conProject.appendChild(container);
container.classList.add("flexCenter");
Object.assign(container.style, {
  width: "90%",
  maxWidth: "60rem",
  height: "100%",
  flexDirection: "column",
  // backgroundColor: "green",
});

{
  const conIll = document.createElement("section");
  container.appendChild(conIll);
  Object.assign(conIll.style, {
    width: "100%",
    // backgroundColor: "blue",
  });
  const header = document.createElement("header");
  const textHeader = document.createElement("p");
  textHeader.textContent = "Recent Illustrator Projects";
  conIll.appendChild(header);
  header.appendChild(textHeader);
  Object.assign(header.style, {
    width: "100%",
    // height: "3rem",
    // backgroundColor: "yellow",
  });
  Object.assign(textHeader.style, {
    fontWeight: "bold",
    fontSize: "clamp(1.5rem, 2.5vw, 4rem)",
    color: "var(--white)",
  });
  const conImg = document.createElement("section");
  conImg.classList.add("flexCenter");
  conIll.appendChild(conImg);
  Object.assign(conImg.style, {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    width: "100%",
    padding: "2rem 0 2rem 0",
    // backgroundColor: "yellow",
  });

  function createContainerProject(pictures) {
    const container = document.createElement("section");
    container.classList.add("mobileGone");
    conImg.appendChild(container);
    Object.assign(container.style, {
      overflow: "hidden",
      position: "relative",
      width: "45rem",
      height: "25rem",
      backgroundColor: "var(--tes)",
      // backgroundColor: "yellow",
      border: "2px solid transparent",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0) 1.95px 1.95px 2.6px",
      cursor: "pointer",
    });
    const conPictures = document.createElement("img");
    container.appendChild(conPictures);
    conPictures.setAttribute("src", `./asset/img/${pictures}`);
    // container btn
    const conBtn = document.createElement("section");
    container.appendChild(conBtn);
    conBtn.classList.add("flexCenter");
    Object.assign(conBtn.style, {
      position: "absolute",
      height: "2rem",
      width: "100%",
      // backgroundColor: "cyan",
      bottom: "0",
      transform: "translateY(110%)",
    });
    const button = document.createElement("div");
    conBtn.appendChild(button);
    Object.assign(button.style, {
      height: "100%",
      width: "5rem",
      borderRadius: "5px 5px 0 0",
      backgroundColor: "var(--third-color",
    });
    // container desc
    const conDesc = document.createElement("section");
    container.appendChild(conDesc);
    Object.assign(conDesc.style, {
      position: "absolute",
      height: "60%",
      width: "100%",
      backgroundColor: "var(--third-color)",
      bottom: "0",
      transform: "translateY(110%)",
    });
    container.addEventListener("mouseenter", function () {
      // memunculkan container btn
      conBtn.style.transform = "translateY(0)";

      // memunculkan border
      container.style.border = "2px solid var(--third-color)";

      container.style.boxShadowshadow =
        "rgba(255, 255, 255, 0.57) 1.95px 1.95px 2.6px";
    });
    container.addEventListener("mouseleave", function () {
      // menghilangkan container btn
      conBtn.style.transform = "translateY(110%)";
      container.style.boxShadowshadow = "rgba(0, 0, 0, 0) 1.95px 1.95px 2.6px";

      // menghilangkan border
      container.style.border = "2px solid transparent";
      conDesc.style.transform = "translateY(110%)";
    });
    button.addEventListener("mouseenter", function () {
      // memunculkan container btn
      conDesc.style.transform = "translateY(0)";
    });
    conDesc.addEventListener("mouseleave", function () {
      // memunculkan container btn
      conDesc.style.transform = "translateY(110%)";
    });
    [container, conBtn, conDesc].forEach((el) => {
      el.style.transition = "all 0.2s ease-in-out";
    });
  }
  createContainerProject("livery1.png");
  createContainerProject("livery1.png");
}
{
  const conPageIll = document.createElement("section");
  container.appendChild(conPageIll);
  conPageIll.classList.add("flexCenter");
  Object.assign(conPageIll.style, {
    height: "5rem",
    width: "100%",
    // backgroundColor: "yellow",
  });
  const a = document.createElement("a");
  conPageIll.appendChild(a);
  a.textContent = "See more...";
  a.setAttribute("href", "illustrator.html");
  Object.assign(a.style, {
    backgroundColor: "var(--white)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3rem",
    width: "8rem",
    fontWeight: "600",
    borderRadius: "10px",
    color: "var(--third-color)",
  });
}
