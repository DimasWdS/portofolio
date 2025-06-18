const containerCard = document.querySelector(".containerCard");
// console.log(containerCard);
function createCard() {
  const con = document.createElement("section");
  const konten = document.createElement("section");
  const blok = document.createElement("div");

  con.classList.add("card");
  blok.classList.add("shadowWeb", "spin");
  con.classList.add("cardJenis1");

  containerCard.appendChild(con);
  con.appendChild(konten);
  con.appendChild(blok);

  // Style untuk container utama
  Object.assign(con.style, {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "27rem",
    height: "17rem",
    borderRadius: "10px",
    padding: "1.5px",
  });

  // Konten dalam kartu
  Object.assign(konten.style, {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "var(--tes)",
    borderRadius: "8.5px",
    zIndex: "1",
  });

  // Blok animasi
  Object.assign(blok.style, {
    opacity: "0",
    position: "absolute",
    bottom: "50%",
    height: "50rem",
    width: "5rem",
    background: "linear-gradient(to left, #e6521f, #80d8c3)",
    transformOrigin: "bottom",
    transition: "opacity 0.5s ease-in-out", // << Tambahkan transisi
    zIndex: "0",
    pointerEvents: "none", // supaya tidak mengganggu hover
  });

  // Hover event (fade in/out)
  con.addEventListener("mouseenter", () => {
    blok.style.opacity = "1";
  });

  con.addEventListener("mouseleave", () => {
    blok.style.opacity = "0";
  });
}

function createCard2() {
  const con = document.createElement("section");
  const konten = document.createElement("section");
  const blok = document.createElement("div");

  containerCard.append(con);
  con.appendChild(konten);
  con.appendChild(blok);

  con.classList.add("card");
  blok.classList.add("shadowWeb", "spin");

  Object.assign(con.style, {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "27rem",
    height: "27rem",
    // backgroundColor: "yellow",
    borderRadius: "10px",
    flexShrink: "0",
    padding: "1.5px",
  });
  Object.assign(konten.style, {
    position: "relative",
    zIndex: "1",
    height: "100%",
    width: "100%",
    backgroundColor: "var(--tes)",
    borderRadius: "8px",
  });
  Object.assign(blok.style, {
    position: "absolute",
    width: "5rem",
    height: "50rem",
    background: "linear-gradient(to left, #e6521f, #80d8c3)",
    transformOrigin: "bottom",
    transition: "opacity 0.5s ease-in-out",
    bottom: "50%",
  });
}

createCard();
createCard2();
createCard2();
createCard();
createCard();
createCard2();
createCard2();
createCard();
