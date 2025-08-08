const conTentangSaya = document.querySelector(".container-tentang-saya");
Object.assign(conTentangSaya.style, {
  width: "100%",
  display: "felx",
  width: "100%",
  // maxWidth: "80rem",
  // backgroundColor: "yellow",
  margin: "auto",
});

// header
{
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const h7 = document.createElement("h7");

  header.classList.add("headerAboutMe");

  conTentangSaya.appendChild(header);
  header.appendChild(h1);
  header.appendChild(h7);

  h1.textContent = "About Me";
  h7.textContent = "Passionate about creating something cool";

  Object.assign(header.style, {
    // backgroundColor: "green",
    margin: "4rem 0 0 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  Object.assign(h1.style, {
    fontSize: "clamp(1em,6vh,7em)",
    color: "var(--white)",
  });
  Object.assign(h7.style, {
    color: "var(--white)",
    fontSize: "clamp(0.9em,2vh,2em)",
  });
}
const pembungkus = document.createElement("section");
conTentangSaya.appendChild(pembungkus);
pembungkus.classList.add("a1");
Object.assign(pembungkus.style, {
  display: "flex",
  margin: "5rem 0 5rem 0",
});

// container kiri
{
  const conKiri = document.createElement("section");
  const conImg = document.createElement("section");

  conKiri.classList.add("bagian-kiri-aboutme");
  conImg.classList.add("containerFotoMobile");

  pembungkus.appendChild(conKiri);
  conKiri.appendChild(conImg);

  Object.assign(conKiri.style, {
    width: "40%",
    height: "30rem",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "yellow",
  });
  Object.assign(conImg.style, {
    height: "80%",
    aspectRatio: "1/1",
    backgroundColor: "green",
    borderRadius: "10px",
    backgroundImage: "url(./asset/myfoto/2.jpg",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
  });
}

// container konten kanan
{
  const conKanan = document.createElement("section");
  const container = document.createElement("section");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const line = document.createElement("div");
  const conBioData = document.createElement("section");

  conBioData.classList.add("container-biodata");

  h1.textContent = "Hello There!";
  p.textContent =
    "Hello, my name is Dimas Widy Saputra, and I am from Madiun, Indonesia. I have a strong interest in illustration and front-end development. With the experience and skills I possess, I am confident in my ability to create clean, modern, and functional illustration designs, as well as write efficient and well-structured code to deliver engaging and interactive interfaces";

  conKanan.classList.add("bagian-kanan-aboutme");

  pembungkus.appendChild(conKanan);
  conKanan.appendChild(container);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(line);
  container.appendChild(conBioData);

  Object.assign(conKanan.style, {
    width: "60%",
  });

  Object.assign(container.style, {
    margin: "auto",
    // height: "30rem",
    width: "90%",
    boxShadow: "0px 3px 8px -3px rgba(0, 0, 0, 1)",
    padding: "1rem 1.5rem 1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
  });
  Object.assign(h1.style, {
    fontSize: "1.6em",
    color: "var(--white)",
  });
  Object.assign(p.style, {
    margin: "1rem 0 0 0",
    color: "var(--main-font)",
    fontSize: "0.9em",
    fontWeight: "500",
  });
  Object.assign(line.style, {
    margin: "1rem 0 0 0",
    width: "100%",
    height: "1px",
    backgroundColor: "var(--third-color)",
    opacity: "60%",
  });
  Object.assign(conBioData.style, {
    margin: "1.5rem 0 0 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  });
  function createCardBiodata(title, titleAnsw) {
    const container = document.createElement("section");
    const conIcon = document.createElement("div");
    const conTeks = document.createElement("div");
    const heading = document.createElement("div");
    const subHeading = document.createElement("div");

    container.classList.add("biodata-card");

    conBioData.appendChild(container);
    container.appendChild(conIcon);
    container.appendChild(conTeks);
    conTeks.appendChild(heading);
    conTeks.appendChild(subHeading);

    heading.textContent = `${title}`;
    subHeading.textContent = `${titleAnsw}`;

    Object.assign(container.style, {
      height: "4rem",
      width: "49%",
      backgroundColor: "var(--tes)",
      margin: "0 0 0.8rem 0",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      display: "flex",
      alignItems: "center",
    });
    Object.assign(conIcon.style, {
      height: "80%",
      aspectRatio: "1/1",
      backgroundColor: "var(--white)",
      borderRadius: "5px",
      margin: "0 0 0 0.4rem",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    });
    Object.assign(conTeks.style, {
      // backgroundColor: "yellow",
      flex: "1",
      height: "100%",
    });
    [heading, subHeading].forEach((el, dex) => {
      Object.assign(el.style, {
        height: "50%",
        width: "100%",
        padding: "0 0 0 0.5rem",
        display: "flex",
        color: "var(--white)",
        // backgroundColor: "green",
      });
      if (dex === 0) {
        Object.assign(el.style, {
          opacity: "40%",
          fontSize: "0.7em",
          fontWeight: "700",
          alignItems: "self-end",
        });
      } else {
        Object.assign(el.style, {
          fontSize: "clamp(0.7em, 1.2vw + 0.16em, 0.8em)",
          fontWeight: "800",
        });
      }
    });
  }
  createCardBiodata("Name", "Dimas Widy Saputra");
  createCardBiodata("Domicile", "Madiun, Jawa Timur");
  createCardBiodata("Education", "Universitas PGRI MADIUN");
  createCardBiodata("Email", "dimaswidysaputra41@gmail.com");
  createCardBiodata("Phone", "+6281252966557");
  createCardBiodata("Status", "Available for Work");
}
