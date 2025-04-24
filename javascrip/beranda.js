const layerBawah = document.querySelector(".layer-bawah");

// layer bawah
{
  const divLuar = document.createElement("div");
  Object.assign(divLuar.style, {
    position: "relative",
    height: "85%",
    width: "80%",
    padding: "0.2rem",
    backgroundColor: "var(--background)",
    borderRadius: "24px",
    overflow: "hidden",
  });
  divLuar.classList.add("flex-center");
  layerBawah.appendChild(divLuar);

  const divRotate = document.createElement("div");
  divLuar.appendChild(divRotate);
  divRotate.classList.add("divRotate");
  Object.assign(divRotate.style, {
    position: "absolute",
    zIndex: "1",
    width: "10rem",
    height: "200rem",
    backgroundColor: "var(--main-font)",
  });

  const divDalam = document.createElement("div");
  divLuar.appendChild(divDalam);
  Object.assign(divDalam.style, {
    flexDirection: "column",
    position: "relative",
    zIndex: "2",
    height: "100%",
    width: "100%",
    borderRadius: "22px",
    overflow: "hidden",
    gap: "0.1rem",
    backgroundColor: "var(--background)",
  });
  // konten div dalam start
  {
    divDalam.classList.add("flex-center");

    const conTeks = document.createElement("div");
    conTeks.classList.add("container-teks");
    conTeks.classList.add("flex-center");
    Object.assign(conTeks.style, {
      height: "6rem",
      width: "100rem",
      flexShrink: "0",
      //   backgroundColor: "yellow",
    });

    const span = document.createElement("p");
    span.textContent = "WIDY";
    conTeks.appendChild(span);
    Object.assign(span.style, {
      fontSize: "7rem",
      fontFamily: "Poppins",
      fontWeight: "900",
      color: "var(--tes)",
    });

    for (let i = 0; i < 50; i++) {
      const conTeksClone = conTeks.cloneNode(true); // Kloning lengkap
      divDalam.appendChild(conTeksClone);
      const cloneSpan = span.cloneNode(true);
      conTeks.appendChild(cloneSpan);
    }

    const conTeksSelector = document.querySelectorAll(".container-teks");

    conTeksSelector.forEach((el, index) => {
      if (index % 2 !== 0) {
        el.classList.add("geser-kiri");
      } else {
        el.classList.add("geser-kanan");
      }
    });
  }
  // konten div dalam end
}
// layer bawah end

//layer atas strat
{
  const layerAtas = document.querySelector(".layer-atas");
  layerAtas.classList.add("flex-center");
  const container = document.createElement("div");
  container.classList.add("flex-center");
  container.style.flexDirection = "column";
  layerAtas.appendChild(container);

  const conImg = document.createElement("div");
  Object.assign(conImg.style, {
    height: "15rem",
    width: "15rem",
    // backgroundColor: "yellow",
  });
  container.appendChild(conImg);
  const img = document.createElement("img");
  img.src = `./asset/myfoto/1.png`;
  img.alt = "Gambar";
  conImg.appendChild(img);

  const conDesc = document.createElement("div");
  conDesc.classList.add("flex-center");
  Object.assign(conDesc.style, {
    width: "18rem",
    padding: "0.2rem 0 0.2rem 0",
    borderRadius: "10px",
    backgroundColor: "var(--main-font)",
    outline: "2px solid var(--tes)",
  });
  container.appendChild(conDesc);

  const span = document.createElement("span");
  span.textContent = "Hallo 👋, I'm Widy";
  conDesc.appendChild(span);
  Object.assign(span.style, {
    fontSize: "1.2em",
    fontWeight: "900",
    color: "var(--background)",
    fontFamily: `"Inconsolata", monospace`,
  });
}
//layer atas end
