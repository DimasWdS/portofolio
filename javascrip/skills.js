const skills = document.querySelector(".skills");
// console.log(skills);
skills.classList.add("flexCenter");
skills.style.flexDirection = "column";
Object.assign(skills.style, {
  position: "relative",
  overflow: "hidden",
  margin: "5rem 0 5rem 0",
  padding: "10rem 0 5rem 0",
  width: "100%",
  // backgroundColor: "yellow",
  // height: "100dvh",
});
{
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  [div, div2].forEach((el) => {
    skills.appendChild(el);
    Object.assign(el.style, {
      position: "absolute",
      height: "0.5rem",
      width: "100%",
      backgroundColor: "var(--white)",
      filter: "blur(1px)",
    });
  });
  Object.assign(div.style, {
    // backgroundColor: "blue",
    top: "0",
    transform: "rotate(-1deg)",
    transformOrigin: "right",
  });
  Object.assign(div2.style, {
    // backgroundColor: "blue",
    bottom: "0",
    transform: "rotate(-1deg)",
    transformOrigin: "left",
  });
}
const conSkills = document.createElement("section");
skills.appendChild(conSkills);
Object.assign(conSkills.style, {
  position: "relative",
  width: "90%",
  maxWidth: "60rem",
  height: "100%",
});

// garuda start
const possitionGaruda = document.createElement("section");
conSkills.appendChild(possitionGaruda);
possitionGaruda.classList.add("possitionGaruda");
Object.assign(possitionGaruda.style, {
  position: "relative",
  aspectRatio: "16/9",
  width: "60rem",
  // backgroundColor: "cyan",
});
const conGaruda = document.createElement("section");
possitionGaruda.appendChild(conGaruda);
conGaruda.classList.add("flexCenter", "objek-random");
Object.assign(conGaruda.style, {
  position: "absolute",
  height: "100%",
  width: "100%",
  // backgroundColor: "green",
});

const sayapKanan = document.createElement("img");
sayapKanan.classList.add("sayap-kanan");
conGaruda.appendChild(sayapKanan);
sayapKanan.setAttribute("src", "./asset/svg/garudav2/garudasayapkanan.svg");

const sayapKiri = document.createElement("img");
sayapKiri.classList.add("sayap-kiri");
conGaruda.appendChild(sayapKiri);
sayapKiri.setAttribute("src", "./asset/svg/garudav2/garudasayapkiri.svg");

const ekor = document.createElement("img");
ekor.classList.add("ekor");
conGaruda.appendChild(ekor);
ekor.setAttribute("src", "./asset/svg/garudav2/garudaekor.svg");

const badanGaruda = document.createElement("img");
conGaruda.appendChild(badanGaruda);
badanGaruda.setAttribute("src", "./asset/svg/garudav2/garudabadan.svg");

[badanGaruda, sayapKanan, sayapKiri, ekor].forEach((el) => {
  Object.assign(el.style, {
    position: "absolute",
    scale: "1.5",
  });
});
// garuda end

// teks start
const conTeks = document.createElement("section");
conTeks.classList.add("teksSkills");
conSkills.appendChild(conTeks);
Object.assign(conTeks.style, {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "end",
  height: "15rem",
  width: "100%",
  // backgroundColor: "yellow",
});

const p = document.createElement("p");
p.textContent = "iLLustrator";
p.classList.add("teks2");
const p2 = document.createElement("p");
p2.textContent = "FrontEnd";
p2.classList.add("teks1");
[p, p2].forEach((el) => {
  conTeks.appendChild(el);
  Object.assign(el.style, {
    fontFamily: `"Montserrat", sans-serif`,
    position: "relative",
    fontSize: "clamp(3.5rem, 4vw + 1rem, 5rem)",
    fontWeight: "900",
    color: "var(--white)",
  });
});

// teks end

// skills programing
{
  const container = document.createElement("section");
  skills.appendChild(container);
  Object.assign(container.style, {
    display: "flex",
    height: "10rem",
    width: "100%",
    maxWidth: "70rem",
    // backgroundColor: "yellow",
  });
  // container luar
  const skillScroll = document.createElement("section");
  skillScroll.classList.add("shadowLeft");
  container.appendChild(skillScroll);
  Object.assign(skillScroll.style, {
    position: "relative",
    width: "100%",
    maxWidth: "40rem",
    backgroundColor: "var(--background)",
    height: "5rem",
    display: "flex",
    overflow: "hidden",
  });

  const conCardSkill = document.createElement("section");
  conCardSkill.classList.add("containerCard");
  skillScroll.appendChild(conCardSkill);
  Object.assign(conCardSkill.style, {
    flexShrink: "0",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 0 0 1rem",
  });

  function createCard(nama, logo) {
    const card = document.createElement("section");
    const icon = document.createElement("section");
    const imgIcon = document.createElement("img");
    const teks = document.createElement("h1");
    teks.textContent = `${nama}`;
    conCardSkill.appendChild(card);
    card.appendChild(icon);
    card.appendChild(teks);
    icon.appendChild(imgIcon);
    Object.assign(card.style, {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      backgroundColor: "var(--tes)",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      flexShrink: "0",
    });
    Object.assign(icon.style, {
      height: "3rem",
      width: "3rem",
      // backgroundColor: "red",
    });
    icon.classList.add("flexCenter");
    Object.assign(teks.style, {
      fontSize: "1em",
      color: "var(--main-font)",
    });
    imgIcon.setAttribute("src", `./asset/icon/${logo}`);
  }

  createCard("Tailwind CSS", "tailwindcss.svg");
  createCard("Javascrip", "javascript.svg");
  createCard("HTML", "html.svg");
  createCard("CSS", "css.svg");

  const containerCard = document.querySelector(".containerCard");
  containerCard.classList.add("scrollLeft");
  const clone = containerCard.cloneNode(true);
  skillScroll.appendChild(clone);
}
