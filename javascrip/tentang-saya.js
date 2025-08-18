const conTentangSaya = document.querySelector(".container-tentang-saya");
Object.assign(conTentangSaya.style, {
  width: "100%",
  maxWidth: "80rem",
  display: "felx",
  // maxWidth: "80rem",
  // backgroundColor: "yellow",

  margin: "auto",
});

// header
{
  const header = document.createElement("header");
  const h1 = document.createElement("span");
  const span = document.createElement("span");

  header.classList.add("headerAboutMe");

  conTentangSaya.appendChild(header);
  header.appendChild(h1);
  header.appendChild(span);

  h1.textContent = "About Me";
  span.textContent = "Passionate about creating something cool";

  Object.assign(header.style, {
    // backgroundColor: "green",
    padding: "6rem 0 0 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  Object.assign(h1.style, {
    fontSize: "3em",
    color: "var(--white)",
    fontWeight: "700",
  });
  Object.assign(span.style, {
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
    alignItems: "center",
    // backgroundColor: "yellow",
  });
  Object.assign(conImg.style, {
    height: "80%",
    aspectRatio: "1/1",
    backgroundColor: "green",
    borderRadius: "10px",
    backgroundImage: "url(./asset/myfoto/3.jpg",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
  });
}

// container konten kanan
{
  function createCardBiodata(title, titleAnsw, icon) {
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
      backgroundImage: `url(./asset/icon/${icon})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "60%",
      backgroundPosition: "center",
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

  const conKanan = document.createElement("section");
  const container = document.createElement("section");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const line = document.createElement("div");
  const line2 = document.createElement("div");
  const conBioData = document.createElement("section");
  const conUnderBiodata = document.createElement("section");
  const header = document.createElement("header");
  const downCV = document.createElement("button");
  const downIcon = document.createElement("div");
  const downTeks = document.createElement("p");
  const hireMe = document.createElement("button");
  const hireIcon = document.createElement("div");
  const hireTeks = document.createElement("p");

  conBioData.classList.add("container-biodata");

  h1.textContent = "Hello There!";
  p.textContent =
    "I am a student at Universitas PGRI Madiun with a passion for illustration and website development. I enjoy learning new things and always strive to improve my skills in programming and drawing, particularly in frontend development and creating impressive illustrations.";
  header.textContent = "Interests & Focus";
  downTeks.textContent = "Download My CV";
  hireTeks.textContent = "Hire Me Now";

  conKanan.classList.add("bagian-kanan-aboutme");

  pembungkus.appendChild(conKanan);
  conKanan.appendChild(container);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(line);
  container.appendChild(conBioData);
  container.appendChild(line2);
  container.appendChild(conUnderBiodata);
  conUnderBiodata.appendChild(header);
  conUnderBiodata.appendChild(downCV);
  downCV.appendChild(downIcon);
  downCV.appendChild(downTeks);
  conUnderBiodata.appendChild(hireMe);
  hireMe.appendChild(hireIcon);
  hireMe.appendChild(hireTeks);

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
  [line, line2].forEach((el) => {
    Object.assign(el.style, {
      margin: "1rem 0 1rem 0",
      width: "100%",
      height: "1px",
      backgroundColor: "var(--third-color)",
      opacity: "60%",
    });
  });
  Object.assign(conBioData.style, {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  });
  createCardBiodata("Name", "Dimas Widy Saputra", "person.svg");
  createCardBiodata("Domicile", "Madiun, Jawa Timur", "mappin.svg");
  createCardBiodata("Education", "Universitas PGRI MADIUN", "school.svg");
  createCardBiodata("Email", "dimaswidysaputra41@gmail.com", "mail.svg");
  createCardBiodata("Phone", "+6281252966557", "phone.svg");
  createCardBiodata("Status", "Available for Work", "work.svg");

  Object.assign(conUnderBiodata.style, {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    // backgroundColor: "yellow",
  });
  Object.assign(header.style, {
    color: "var(--main-font)",
    fontWeight: "600",
    width: "100%",
    margin: "0 0 1.5rem 0",
    // backgroundColor: "yellow",
  });
  Object.assign(downCV.style, {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.2rem",
    backgroundColor: "var(--white)",
    padding: "0.5em 0.2em",
    borderRadius: "5px",
    transition: "all 0.2s ease-in-out",
  });
  Object.assign(downIcon.style, {
    height: "25px",
    width: "25px",
    // backgroundColor: "green",
    backgroundImage: "url(./asset/icon/download.svg)",
  });
  Object.assign(downTeks.style, {
    fontSize: "1.1em",
    fontWeight: "800",
    color: "var(--tes)",
  });

  Object.assign(hireMe.style, {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.2rem",
    backgroundColor: "var(--tes)",
    padding: "0.5em 0.2em",
    borderRadius: "5px",
    transition: "all 0.2s ease-in-out",
    border: "1px solid var(--white)",
  });

  Object.assign(hireIcon.style, {
    height: "25px",
    width: "25px",
    // backgroundColor: "green",
    backgroundImage: "url(./asset/icon/work.svg)",
  });

  Object.assign(hireTeks.style, {
    fontSize: "1.1em",
    fontWeight: "800",
    color: "var(--white)",
  });

  [downCV, hireMe].forEach((el, dex) => {
    el.addEventListener("mouseenter", function () {
      Object.assign(el.style, {
        transform: "translateY(-5px)",
      });
      if (dex === 1) {
        Object.assign(el.style, {
          backgroundColor: "var(--white)",
        });
        Object.assign(hireTeks.style, {
          color: "var(--tes)",
        });
      }
    });
  });
  [downCV, hireMe].forEach((el, dex) => {
    el.addEventListener("mouseleave", function () {
      Object.assign(el.style, {
        transform: "translateY(0)",
      });
      if (dex === 1) {
        Object.assign(el.style, {
          backgroundColor: "var(--tes)",
        });
        Object.assign(hireTeks.style, {
          color: "var(--white)",
        });
      }
    });
  });
}
