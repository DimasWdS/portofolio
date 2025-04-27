const pengalaman = document.querySelector(".container-pengalaman");
const containerCard = document.querySelector(".container-card");

function cardPengalaman(header, date, deskripsi) {
  const conCard = document.createElement("div");
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
    height: "100rem",
    width: "3rem",
    backgroundColor: "var(--third-color)",
    // transformOrigin: "top",
    // top: "50%",
    // transform: "rotate(45deg)",
  });

  conCard.appendChild(divSpin);
  divSpin.classList.add("spin", "shadow-spin");

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
}

cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);
cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);
cardPengalaman(
  "Participate in The WiFi Installation Technician at MENAKSOPAL",
  "2023 -2023, 5 months",
  "Working"
);

//
const conCardClone = containerCard.cloneNode(true);
pengalaman.appendChild(conCardClone);
