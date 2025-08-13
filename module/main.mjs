function sum(input1, input2) {
  return input1 + input2;
}
function cloneBg(oriElement) {
  const clone = oriElement.cloneNode(true);
  oriElement.insertAdjacentElement("afterend", clone);
}
function cloneBgV2(oriElement, inElement) {
  const clone = inElement.cloneNode(true);
  oriElement.appendChild(clone);
}

// membuat card pengalaman
function cardPengalaman(jobIcon, jobTitle, duration, deskripsi) {
  const conCard = document.createElement("div");
  const containerCard = document.querySelector(".container-card");
  containerCard.classList.add("con-pause");
  Object.assign(conCard.style, {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10rem",
    width: "30rem",
    padding: "0.1rem",
    borderRadius: "10px",
    backgroundColor: "var(--background)",
    boxShadow: "rgba(0, 0, 0, 0.71) 0px 1px 4px",
  });
  containerCard.appendChild(conCard);

  const divDalam = document.createElement("div");
  Object.assign(divDalam.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // padding: "2rem 0 2rem 0",
    position: "relative",
    zIndex: "2",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    backgroundColor: "var(--tes)",
  });
  conCard.appendChild(divDalam);

  const divSpin = document.createElement("div");
  Object.assign(divSpin.style, {
    position: "absolute",
    height: "20rem",
    width: "3rem",
    backgroundColor: "var(--third-color)",
    transformOrigin: "top",
    top: "50%",
    // transform: "rotate(45deg)",
    // zIndex: "2",
  });

  const divSpin2 = document.createElement("div");
  Object.assign(divSpin2.style, {
    position: "absolute",
    height: "20rem",
    width: "3rem",
    backgroundColor: "var(--third-color)",
    transformOrigin: "bottom",
    bottom: "50%",
    // zIndex: "2",
  });

  conCard.appendChild(divSpin);
  conCard.appendChild(divSpin2);
  divSpin.classList.add("spin", "shadow-spin");
  divSpin2.classList.add("spin", "shadow-spin2");

  // class untuk menghentikan card scroll ketika dihover
  conCard.classList.add("card");
  // isi konten card
  {
    const header = document.createElement("header");
    const logoJob = document.createElement("div");
    const nameJob = document.createElement("p");
    const longTime = document.createElement("section");
    const logoTime = document.createElement("div");
    const workContent = document.createElement("p");
    const conDeskripsi = document.createElement("section");

    divDalam.appendChild(header);
    header.appendChild(logoJob);
    header.appendChild(nameJob);
    divDalam.appendChild(longTime);
    longTime.appendChild(logoTime);
    longTime.appendChild(workContent);
    divDalam.appendChild(conDeskripsi);

    nameJob.textContent = jobTitle;
    workContent.textContent = duration;
    conDeskripsi.textContent = deskripsi;

    Object.assign(header.style, {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0 1rem 0 1rem",
      // backgroundColor: "yellow",
    });
    Object.assign(logoJob.style, {
      height: "2rem",
      aspectRatio: "1/1",
      // backgroundColor: "green",
      backgroundImage: `url(./asset/icon/${jobIcon})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeate: "no-repeate",
    });
    Object.assign(nameJob.style, {
      color: "var(--white)",
      fontWeight: "700",
      fontSize: "0.9em",
    });
    Object.assign(longTime.style, {
      width: "100%",
      padding: "0 1rem 0 1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    });
    Object.assign(logoTime.style, {
      height: "1.5rem",
      aspectRatio: "1/1",
      // backgroundColor: "yellow",
      backgroundImage: "url(./asset/icon/time.svg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeate: "no-repeate",
    });
    Object.assign(workContent.style, {
      color: "var(--white)",
      fontWeight: "700",
      fontSize: "0.7em",
    });
    Object.assign(conDeskripsi.style, {
      padding: "0 1rem 0 1rem",
      color: "var(--white)",
      fontWeight: "700",
      fontSize: "0.7em",
    });
  }
}

export { sum, cloneBg, cloneBgV2, cardPengalaman };
