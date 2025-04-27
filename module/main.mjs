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

function button(btn, content, href) {
  Object.assign(btn.style, {
    position: "relative",
    // backgroundColor: "yellow",
    outline: "0.1rem solid var(--white)",
    width: "max-content",
    margin: "1rem 0 0 0",
    borderRadius: "5px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
  });

  const a = document.createElement("a");
  a.href = `${href}`;
  a.textContent = `${content}`;
  btn.appendChild(a);
  Object.assign(a.style, {
    position: "relative",
    zIndex: "3",
    display: "inline-flex",
    padding: "0.4rem 3rem",
    fontFamily: `"Inconsolata", monospace`,
    fontWeight: "800",
    fontSize: "1rem",
    color: "var(--main-font)",
    transition: "all 0.3s ease-in-out",
  });

  const span = document.createElement("span");
  btn.appendChild(span);
  Object.assign(span.style, {
    position: "absolute",
    left: "0",
    height: "100%",
    width: "50%",
    backgroundColor: "var(--third-color)",
    transform: "translateX(-100%)",
    transition: "all 0.3s ease-in-out",
  });
  const span2 = document.createElement("span");
  btn.appendChild(span2);
  Object.assign(span2.style, {
    position: "absolute",
    right: "0",
    height: "100%",
    width: "50%",
    backgroundColor: "var(--white)",
    transform: "translateX(100%)",
    transition: "all 0.3s ease-in-out",
  });

  btn.addEventListener("mouseenter", function () {
    btn.classList.add("btnPopUp");
    span.style.transform = "translateX(0)";
    span2.style.transform = "translateX(0)";
    a.style.color = "var(--background)";
  });
  btn.addEventListener("mouseleave", function () {
    btn.classList.remove("btnPopUp");
    span.style.transform = "translateX(-100%)";
    span2.style.transform = "translateX(100%)";
    a.style.color = "var(--main-font)";
  });
}

function cardPengalaman(header, date, deskripsi) {
  const conCard = document.createElement("div");
  const containerCard = document.querySelector(".container-card");
  containerCard.classList.add("con-pause");
  Object.assign(conCard.style, {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "13rem",
    width: "30rem",
    padding: "0.1rem",
    borderRadius: "10px",
    backgroundColor: "var(--background)",
    boxShadow: "rgb(42, 42, 42) 0px 1px 4px",
  });
  containerCard.appendChild(conCard);

  const divDalam = document.createElement("div");
  Object.assign(divDalam.style, {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0 2rem 0",
    position: "relative",
    zIndex: "2",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    backgroundColor: "var(--background)",
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

  const headerCard = document.createElement("header");
  Object.assign(headerCard.style, {
    width: "100%",
    alignItems: "start",
    padding: "0 1rem 0 1rem",
    // backgroundColor: "blue",
    // height: "1rem",
  });
  divDalam.appendChild(headerCard);
  const p = document.createElement("p");
  headerCard.appendChild(p);
  p.textContent = header;
  Object.assign(p.style, {
    fontSize: "0.8em",
    color: "var(--white)",
  });
  const dateCard = document.createElement("span");
  Object.assign(dateCard.style, {
    margin: "2rem 0 0 0",
    width: "100%",
    padding: "0 1rem 0 1rem",
    fontSize: "0.7em",
    color: "var(--main-font)",
  });
  dateCard.textContent = date;
  divDalam.appendChild(dateCard);

  const deskripsiCard = document.createElement("spam");
  deskripsiCard.textContent = deskripsi;
  divDalam.appendChild(deskripsiCard);
  Object.assign(deskripsiCard.style, {
    padding: "0 1rem 0 1rem",
    fontSize: "0.7em",
    color: "var(--main-font)",
  });
  conCard.classList.add("card");
}

export { sum, cloneBg, cloneBgV2, button, cardPengalaman };
