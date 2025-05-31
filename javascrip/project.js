const conProject = document.querySelector(".project");
conProject.classList.add("flexCenter");
Object.assign(conProject.style, {
  width: "100%",
  margin: "1rem 0 1rem 0",
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

  function createContainerProject(pictures, deskripsi) {
    const container = document.createElement("section");
    container.classList.add("mobileGone", "flexCenter");
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
      width: "95%",
      bottom: "0",
      transform: "translateY(110%)",
      borderRadius: "15px 15px 20px 20px",
      padding: "1rem",
      backgroundImage: "url(./asset/texture/walltexture.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "0.2rem solid var(--white)",
    });
    const descText = document.createElement("p");
    conDesc.appendChild(descText);
    descText.textContent = `${deskripsi}`;
    Object.assign(descText.style, {
      // backgroundColor: "yellow",
      fontSize: "0.9em",
      color: "var(--tes)",
      fontWeight: "500",
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
  createContainerProject(
    "livery1.png",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis architecto nesciunt obcaecati a enim eveniet, similique reiciendis nemo fugit facilis corrupti, provident asperiores! Minima quasi architecto repellendus incidunt nulla nesciunt recusandae fugit quos, earum sint rerum, neque, quae officia aliquam! Quisquam ad iusto nesciunt aspernatur magni soluta, corrupti quis?"
  );
  createContainerProject(
    "livery1.png",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis architecto nesciunt obcaecati a enim eveniet, similique reiciendis nemo fugit facilis corrupti, provident asperiores! Minima quasi architecto repellendus incidunt nulla nesciunt recusandae fugit quos, earum sint rerum, neque, quae officia aliquam! Quisquam ad iusto nesciunt aspernatur magni soluta, corrupti quis?"
  );
}

//
{
  const conPageIll = document.createElement("section");
  container.appendChild(conPageIll);
  conPageIll.classList.add("flexCenter");
  Object.assign(conPageIll.style, {
    width: "100%",
    // backgroundColor: "yellow",
  });
  const section = document.createElement("section");
  section.classList.add("scaleKecil");
  conPageIll.appendChild(section);
  Object.assign(section.style, {
    display: "flex",
    gap: "0.1rem",
    padding: "1rem",
    backgroundColor: "var(--tes)",
    borderRadius: "5px",
    border: "0.1rem solid rgba(255,255,255, 0.2)",
  });
  const conImg = document.createElement("div");
  const img = document.createElement("img");
  conImg.appendChild(img);
  img.setAttribute("src", "./asset/svg/PROFIL-ILLUSTRATOR.svg");
  section.appendChild(conImg);
  Object.assign(conImg.style, {
    height: "5rem",
    width: "5rem",
    backgroundColor: "var(--background)",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  });
  Object.assign(img.style, {
    width: "100%",
    height: "100%",
  });

  const conTeks = document.createElement("section");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  conTeks.appendChild(span);
  conTeks.appendChild(span2);
  span.textContent = "iLLustrator Design";
  span2.textContent = "999+ Project";
  section.appendChild(conTeks);
  Object.assign(conTeks.style, {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "5rem",
    width: "15rem",
    // backgroundColor: "green",
    borderRadius: "5px",
    padding: "0 0 0 0.5rem",
  });
  Object.assign(span.style, {
    fontSize: "1.5em",
    fontWeight: "600",
    color: "var(--white)",
  });
  Object.assign(span2.style, {
    fontSize: "0.7em",
    fontWeight: "600",
    color: "var(--main-font)",
  });

  const conBtn = document.createElement("section");
  conBtn.classList.add("flexCenter");
  const a = document.createElement("a");
  conBtn.appendChild(a);
  a.href = "illustrator.html";
  Object.assign(a.style, {
    display: "inline-flex",
    height: "100%",
    width: "100%",
    transform: "scale(1.1)",
  });
  a.classList.add("flexCenter");
  section.appendChild(conBtn);
  const aLogo = document.createElement("img");
  aLogo.setAttribute("src", "./asset/icon/arrowright.svg");
  a.appendChild(aLogo);
  Object.assign(conBtn.style, {
    height: "5rem",
    width: "5rem",
    // backgroundColor: "green",
    borderRadius: "50%",
    border: "0.1rem solid transparent",
    transition: "all 0.2s ease-in-out",
  });
  conBtn.addEventListener("mouseenter", function () {
    Object.assign(conBtn.style, {
      border: "0.1rem solid rgba(255,255,255, 0.5)",
      backgroundColor: "var(--background)",
    });
  });
  conBtn.addEventListener("mouseleave", function () {
    Object.assign(conBtn.style, {
      border: "0.1rem solid transparent",
      backgroundColor: "transparent",
    });
  });
}
