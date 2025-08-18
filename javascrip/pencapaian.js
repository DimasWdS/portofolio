const containerPencapaian = document.querySelector(".container-pencapaian");

Object.assign(containerPencapaian.style, {
  width: "100%",
  maxWidth: "80rem",
  margin: "auto",
});
// container navigasi
{
  const container = document.createElement("section");
  const conEducation = document.createElement("section");
  const conAchievement = document.createElement("section");
  const btnEducation = document.createElement("button");
  const btnAchievement = document.createElement("button");

  containerPencapaian.appendChild(container);
  container.appendChild(conEducation);
  container.appendChild(conAchievement);
  conEducation.appendChild(btnEducation);
  conAchievement.appendChild(btnAchievement);

  btnEducation.textContent = "Education";
  btnAchievement.textContent = "Achievement";

  btnEducation.classList.add("btn-education");
  btnAchievement.classList.add("btn-achievement");

  Object.assign(container.style, {
    width: "100%",
    backgroundColor: "var(--tes)",

    display: "flex",
  });
  [conEducation, conAchievement].forEach((el, dex) => {
    Object.assign(el.style, {
      width: "50%",
      height: "3rem",
      // backgroundColor: "green",
      margin: "0 1rem",
      borderRadius: "10px",
      overflow: "hidden",
    });
  });
  [btnAchievement, btnEducation].forEach((el, dex) => {
    Object.assign(el.style, {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      fontWeight: "700",
      fontSize: "0.8em",
      // backgroundColor: "green",
      transition: "all 0.1s ease-in-out",
    });
    if (dex === 0) {
      el.style.color = "var(--white)";
    } else {
      el.style.backgroundColor = "var(--white)";
    }
  });

  const buttonEdc = document.querySelector(".btn-education");
  const buttonAch = document.querySelector(".btn-achievement");

  buttonAch.addEventListener("click", function () {
    buttonAch.classList.add("btn-active");
    buttonEdc.classList.add("btn-deactivate");
  });
  buttonEdc.addEventListener("click", function () {
    buttonAch.classList.remove("btn-active");
    buttonEdc.classList.remove("btn-deactivate");
  });
}
// container section

const conSection = document.createElement("section");
containerPencapaian.appendChild(conSection);
Object.assign(conSection.style, {
  width: "100%",
  maxWidth: "80rem",
  margin: "auto",
  // height: "100vh",
  margin: "3rem 0 0 0",
  // backgroundColor: "yellow",
});

// section Education
{
  function createCard(
    jurusan,
    nameEducation,
    nilai,
    tahunSekolah,
    lokasiSekolah,
    deskripsi,
    skills
  ) {
    const containerCard = document.createElement("section");
    const header = document.createElement("section");
    const headKiri = document.createElement("section");
    const sekolahLogo = document.createElement("div");
    const jurusanTeks = document.createElement("p");
    const nameEducationTeks = document.createElement("p");
    const nilaiTeks = document.createElement("p");
    const headkanan = document.createElement("section");
    const tahunSekolahTeks = document.createElement("p");
    const logoKalender = document.createElement("div");
    const lokasiSekolahTeks = document.createElement("p");
    const logoLokasi = document.createElement("div");
    const deskripsiTeks = document.createElement("section");
    const skillSection = document.createElement("section");

    jurusanTeks.textContent = jurusan;
    nameEducationTeks.textContent = nameEducation;
    nilaiTeks.textContent = nilai;
    tahunSekolahTeks.textContent = tahunSekolah;
    lokasiSekolahTeks.textContent = lokasiSekolah;
    deskripsiTeks.textContent = deskripsi;

    for (let i = 0; i < skills.length; i++) {
      const span = document.createElement("span");
      span.textContent = skills[i];
      Object.assign(span.style, {
        backgroundColor: "var(--third-color)",
        padding: "2px 4px",
        margin: "2px",
        borderRadius: "4px",
        display: "inline-block",
        color: "var(--background)",
        fontWeight: "700",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      });
      skillSection.appendChild(span);
    }

    container.appendChild(containerCard);
    containerCard.appendChild(header);
    header.appendChild(headKiri);
    headKiri.appendChild(jurusanTeks);
    headKiri.appendChild(nameEducationTeks);
    nameEducationTeks.appendChild(sekolahLogo);
    headKiri.appendChild(nilaiTeks);
    header.appendChild(headkanan);
    headkanan.appendChild(tahunSekolahTeks);
    tahunSekolahTeks.appendChild(logoKalender);
    headkanan.appendChild(lokasiSekolahTeks);
    lokasiSekolahTeks.appendChild(logoLokasi);
    containerCard.appendChild(deskripsiTeks);
    containerCard.appendChild(skillSection);

    header.classList.add("con-header");

    Object.assign(containerCard.style, {
      // width: "100%",
      // height: "10rem",
      // margin: "0 3rem 0 3rem",
      backgroundColor: "var(--tes)",
      borderRadius: "10px",
      // boxShadow: "rgba(0, 0, 0, 0.18) 5px 5px 2.6px",
      padding: "0.5rem",
      // outline: "2px solid var(--background)",
    });
    Object.assign(header.style, {
      display: "flex",
      // height: "3rem",
      width: "100%",
      // backgroundColor: "yellow",
    });

    [headKiri, headkanan].forEach((el, dex) => {
      el.classList.add("card-header-con");
      Object.assign(el.style, {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "100%",
        gap: "0.5rem",
        // backgroundColor: "blue",
      });
      if (dex === 1) {
        Object.assign(el.style, {
          alignItems: "end",
        });
      }
    });
    // style komponene header kiri
    {
      Object.assign(jurusanTeks.style, {
        fontWeight: "800",
        fontSize: "1.3em",
        color: "var(--white)",
      });
      Object.assign(nameEducationTeks.style, {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "start",
        gap: "0.5rem",
        fontWeight: "600",
        fontSize: "1em",
        color: "var(--main-font)",
      });
      Object.assign(sekolahLogo.style, {
        width: "20px",
        aspectRatio: "1/1",
        backgroundImage: "url(./asset/icon/school-white.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      });
      Object.assign(nilaiTeks.style, {
        color: "var(--white)",
        fontSize: "0.8em",
      });
    }
    // style komponene header kanan
    {
      [tahunSekolahTeks, lokasiSekolahTeks].forEach((el) => {
        Object.assign(el.style, {
          color: "var(--white)",
          fontSize: "0.9em",
          fontWeight: "600",
          display: "flex",
          flexDirection: "row-reverse",
          gap: "0.5rem",
        });
      });

      [logoKalender, logoLokasi].forEach((el, dex) => {
        Object.assign(el.style, {
          height: "20px",
          aspectRatio: "1/1",
          // backgroundColor: "yellow",
          backgroundImage:
            dex === 0
              ? "url(./asset/icon/date.svg)"
              : "url(./asset/icon/location-on.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        });
      });
    }
    Object.assign(deskripsiTeks.style, {
      width: "100%",
      margin: "1rem 0 1rem 0",
      // backgroundColor: "yellow",
      color: "var(--main-font)",
      fontWeight: "600",
      fontSize: "0.9em",
    });
    Object.assign(skillSection.style, {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      // height: "3rem",
      padding: "0.2rem 0 1rem 0",
      // backgroundColor: "yellow",
    });
  }

  const container = document.createElement("section");
  conSection.appendChild(container);
  Object.assign(container.style, {
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
    width: "90%",
    padding: "0.5rem 1rem",
    margin: "auto",
    // backgroundColor: "yellow",
  });

  createCard(
    "Computer Science and Engineering",
    "Universita PGRI MADIUN",
    "GPA : 3.62/4.00",
    "Batch of 2023",
    "Madiun, Indonesia",
    "Currently pursuing degree in Computer Science with focus on Software Engineering and Web Development. Active member of Programming Student Association",
    ["Web Devoloper", "Illustrator"]
  );
  createCard(
    "Computer and Network Engineering",
    "SMKN 1 GEGER",
    "Average: 89/100",
    "2023 Graduate",
    "Madiun, Indonesia",
    "Graduated with a major in computer network engineering. Interested in internet networking and drawing.",
    ["FFTH instalation"]
  );
}
