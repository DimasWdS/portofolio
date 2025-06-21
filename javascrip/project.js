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
  width: "100%",
  height: "100%",
  flexDirection: "column",
  // backgroundColor: "green",
});

// iLLustrator
{
  const containerCard = document.createElement("section");
  const header = document.createElement("header");
  const hedTeks = document.createElement("p");

  hedTeks.textContent = "Recent iLLustrator Projects";

  containerCard.classList.add("containerCardProject");

  container.appendChild(containerCard);
  containerCard.appendChild(header);
  header.appendChild(hedTeks);

  Object.assign(header.style, {
    width: "100%",
  });

  Object.assign(hedTeks.style, {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    fontWeight: "600",
    margin: "2rem 0 2rem 0",
    color: "var(--white)",
  });

  function illustratorCard(image, judul, teksDeskripsi) {
    function createIcon(image) {
      const container = document.createElement("section");
      conIcon.appendChild(container);

      Object.assign(container.style, {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundImage: `url(./asset/icon/${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeate: "no-repeate",
        outline: "0.1rem solid var(--main-font)",
      });
    }

    const card = document.createElement("section");
    const conImg = document.createElement("section");
    const conDes = document.createElement("section");
    const conImg1 = document.createElement("section");
    const conIcon = document.createElement("section");
    const desHeader = document.createElement("section");
    const desHeaderContent = document.createElement("p");
    const deskripsi = document.createElement("section");
    const deskripsiContent = document.createElement("p");

    card.classList.add("cardIllustrator");
    conImg.classList.add("containerImg");
    conDes.classList.add("containerDeskripsi");

    desHeaderContent.textContent = `${judul}`;
    deskripsiContent.textContent = `${teksDeskripsi}`;

    containerCard.appendChild(card);
    card.appendChild(conDes);
    card.appendChild(conImg);
    conImg.appendChild(conImg1);
    conDes.appendChild(conIcon);
    conDes.appendChild(desHeader);
    desHeader.appendChild(desHeaderContent);
    conDes.appendChild(deskripsi);
    deskripsi.appendChild(deskripsiContent);

    Object.assign(containerCard.style, {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    });

    Object.assign(conIcon.style, {
      display: "flex",
      gap: "0.5rem",
      width: "100%",
      padding: "1rem",
    });

    createIcon("adobeillustratoricon.svg");

    [desHeader, deskripsi].forEach((el) => {
      Object.assign(el.style, {
        width: "100%",
      });
    });

    Object.assign(desHeaderContent.style, {
      color: "var(--white)",
      fontSize: "clamp(2em,3vh,3em)",
      margin: "1rem 0 0 1rem",
      fontWeight: "700",
    });

    Object.assign(deskripsiContent.style, {
      color: "var(--main-font)",
      fontWeight: "700",
      padding: "1rem",
      fontSize: "0.8em",
    });

    Object.assign(conImg1.style, {
      position: "absolute",
      aspectRatio: "16/9",
      width: "100%",
      bottom: "0",
      backgroundImage: `url(./asset/svg/${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeate: "no-repeate",
    });
  }
  illustratorCard(
    "mocupmobilv2.svg",
    "Livery Design",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet excepturi aspernatur error illum velit animi iusto totam corporis at officia, debitis doloremque repellat, quia nobis. Maiores quasi qui vitae?"
  );
  illustratorCard(
    "mocupmobilv2.svg",
    "Livery Design",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet excepturi aspernatur error illum velit animi iusto totam corporis at officia, debitis doloremque repellat, quia nobis. Maiores quasi qui vitae?"
  );
}
//
{
  const conPageWeb = document.createElement("section");
  container.appendChild(conPageWeb);
  conPageWeb.classList.add("flexCenter");
  Object.assign(conPageWeb.style, {
    width: "100%",
    // backgroundColor: "yellow",
  });
  const section = document.createElement("section");
  section.classList.add("scaleKecil");
  conPageWeb.appendChild(section);
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

//
{
  const conPageWeb = document.createElement("section");
  container.appendChild(conPageWeb);
  conPageWeb.classList.add("flexCenter");
  Object.assign(conPageWeb.style, {
    width: "100%",
    margin: "2rem 0 2rem 0",
    // backgroundColor: "yellow",
  });
  const section = document.createElement("section");
  section.classList.add("scaleKecil");
  conPageWeb.appendChild(section);
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
  span.textContent = "Website Design";
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
  a.href = "frontend.html";
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
