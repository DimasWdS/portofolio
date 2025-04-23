function card(nameFile, headerConten, desConten) {
  const conCard = document.querySelector(".container-card");
  const card = document.createElement("div");
  const imgCard = document.createElement("div");
  const img = document.createElement("img");
  const btnCall = document.createElement("div");
  const deskripsi = document.createElement("div");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  Object.assign(card.style, {
    position: "relative",
    height: "20rem",

    width: "20rem",
    outline: "0.1rem solid var(--third-color)",
    backgroundColor: "var(--background)",
    borderRadius: "5px",
    overflow: "hidden",
  });

  Object.assign(imgCard.style, {
    height: "20rem",
    window: "20rem",
  });

  Object.assign(img.style, {
    height: "100%",
    width: "100%",
  });
  img.src = `./asset/img/${nameFile}`;
  img.alt = "Gambar";

  Object.assign(btnCall.style, {
    position: "absolute",
    top: "0",
    right: "0",
    height: "50px",
    width: "50px",
    borderRadius: "0 0 0 5px",
    backgroundColor: "var(--white)",
    cursor: "pointer",
  });

  btnCall.addEventListener("mouseenter", function () {
    btnCall.style.outline = "0.1rem solid var(--third-color)";
  });
  btnCall.addEventListener("mouseleave", function () {
    btnCall.style.outline = "0 solid var(--third-color)";
  });

  Object.assign(deskripsi.style, {
    position: "absolute",
    width: "100%",
    height: "60%",
    background: "linear-gradient(to top, black, rgba(0, 0, 0, 0.04))",
    // backgroundColor: "yellow",
    transform: "translateY(100%)",
    bottom: "0",
    transition: "all 0.3s ease-in-out",
  });

  Object.assign(header.style, {
    width: "100%",
    // backgroundColor: "green",
  });

  h1.textContent = headerConten;

  Object.assign(h1.style, {
    position: "relative",
    zIndex: "2",
    fontFamily: '"Inconsolata", monospace',
    color: "var(--white)",
    padding: "0 1rem 0 1rem",
    fontSize: "1.2em",
    width: "max-content",
  });

  const h1Bg = document.createElement("span");
  Object.assign(h1Bg.style, {
    display: "inline-block",
    position: "absolute",
    zIndex: "-1",
    left: "0",
    height: "100%",
    width: "100%",
    borderRadius: "0 5px 5px 0",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
  });
  h1.appendChild(h1Bg);

  p.textContent = desConten;

  Object.assign(p.style, {
    position: "relative",
    zIndex: "2",
    color: "var(--white)",
    fontSize: "0.8em",
    margin: "0.5rem 0 0 0",
    padding: "0.5rem 1rem 0.5rem 1rem",
    fontFamily: '"Inconsolata", monospace',
    width: "90%",
  });
  const pBg = document.createElement("span");
  Object.assign(pBg.style, {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
    borderRadius: "0 5px 5px 0",
    display: "inline-block",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
  });
  p.appendChild(pBg);

  card.addEventListener("mouseenter", function () {
    img.classList.add("shake");
    deskripsi.style.transform = "translateY(0)";
    deskripsi.style.transitionDelay = "0.8s";
  });
  card.addEventListener("mouseleave", function () {
    img.classList.remove("shake");
    deskripsi.style.transform = "translateY(100%)";
    deskripsi.style.transitionDelay = "0s";
  });

  conCard.appendChild(card);
  card.appendChild(imgCard);
  imgCard.appendChild(img);
  card.appendChild(btnCall);
  card.appendChild(deskripsi);
  deskripsi.appendChild(header);
  header.appendChild(h1);
  deskripsi.appendChild(p);
}

card(
  "DESAIN-SKELETON-SKATEBOARD-01.svg",
  "iLLustrasi Skeleton",
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
voluptate architecto non nesciunt aliquam totam doloribus consequatur
ullam modi praesentium.`
);
card("", "illustrasi Desain Baju", `RRQ juara Lokal`);
card("", "illustrasi Desain Baju", `RRQ juara Lokal`);
