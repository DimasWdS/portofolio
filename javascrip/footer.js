const footer = document.querySelector("footer");
Object.assign(footer.style, {
  width: "100%",
  backgroundColor: "var(--background)",
  padding: "1rem 0 1rem 0",
});

{
  const container = document.createElement("section");
  container.classList.add("container-box");
  container.classList.add("flexCenter");
  footer.appendChild(container);
  Object.assign(container.style, {
    width: "100%",
    // backgroundColor: "yellow",
    gap: "1rem",
  });
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
  const box = document.querySelectorAll(".box");
  box.forEach((el, index) => {
    Object.assign(el.style, {
      height: "15rem",
      width: "20rem",
      //   backgroundColor: "blue",
    });

    const header = document.createElement("header");
    el.appendChild(header);
    Object.assign(header.style, {
      width: "100%",
    });
    if (index === 0) {
      el.classList.add("box1");
    } else if (index === 1) {
      el.classList.add("box2");
    } else {
      el.classList.add("box3");
    }
  });
  const box1Header = document.querySelector(".box1 header");
  const box2Header = document.querySelector(".box2 header");
  const box3Header = document.querySelector(".box3 header");
  //
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");

  //
  const span1 = document.createElement("span");
  span1.textContent = "Quick Link";
  box1Header.appendChild(span1);
  //box 1 konten
  {
    const ul = document.createElement("ul");
    box1.appendChild(ul);
    Object.assign(ul.style, {
      margin: "1rem 0 0 0",
      listStyle: "none",
    });
    function createLi(konten, href) {
      const li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("a");
      Object.assign(a.style, {
        color: "var(--white)",
        fontSize: "0.9em",
      });
      li.appendChild(a);
      a.textContent = `${konten}`;
      a.setAttribute("href", `#${href}`);
    }
    //
    createLi("Beranda", "");
    createLi("About Me", "tentang-saya");
    createLi("Skills", "skills");
    createLi("Project", "project");
    createLi("Contack", "contack");
  }
  const span2 = document.createElement("span");
  span2.textContent = "Contack & Legal";
  box2Header.appendChild(span2);
  //box 2 konten
  {
    const span = document.createElement("span");
    box2.appendChild(span);
    span.textContent = "dimaswidysaputra41@gmail.com";
    Object.assign(span.style, {
      display: "inline-flex",
      margin: "1rem 0 0 0",
      color: "var(--white)",
      // backgroundColor: "yellow",
      fontSize: "0.9em",
    });
  }

  // box 3 konten
  {
    const conSosmed = document.createElement("section");
    box3.appendChild(conSosmed);
    Object.assign(conSosmed.style, {
      display: "flex",
      gap: "0.4rem",
      flexWrap: "wrap",
      margin: "1rem 0 0 0",
      height: "2rem",
      width: "100%",
      // backgroundColor: "yellow",
    });
    function createIcon(href, logoSrc) {
      const div = document.createElement("div");
      conSosmed.appendChild(div);
      Object.assign(div.style, {
        height: "2.5rem",
        width: "2.5rem",
        backgroundColor: "var(--tes)",
        borderRadius: "50%",
        cursor: "pointer",
        overflow: "hidden",
      });
      const a = document.createElement("a");
      div.appendChild(a);
      a.classList.add("flexCenter");
      Object.assign(a.style, {
        display: "inline-flex",
        height: "100%",
        width: "100%",
      });
      a.setAttribute("href", `${href}`);
      a.setAttribute("target", "_blanks");
      const logo = document.createElement("img");
      a.appendChild(logo);
      Object.assign(logo.style, {
        height: "100%",
        width: "100%",
        transform: "scale(0.7)",
      });
      logo.setAttribute("src", `${logoSrc}`);
      logo.setAttribute("alt", "instagram");
      // logo.src = `${logoSrc}`;
    }

    createIcon(
      "https://www.instagram.com/dimaswidysaputraa/",
      "./asset/icon/instagram-color.svg"
    );
    createIcon(
      "https://www.instagram.com/dimaswidysaputraa/",
      "./asset/icon/tiktok-color.svg"
    );
    createIcon(
      "https://www.instagram.com/dimaswidysaputraa/",
      "./asset/icon/facebook-color.svg"
    );
    createIcon(
      "https://www.instagram.com/dimaswidysaputraa/",
      "./asset/icon/whatsapp-color.svg"
    );
  }
  //
  const span3 = document.createElement("span");
  span3.textContent = "Let's Connect";
  box3Header.appendChild(span3);
  [span1, span2, span3].forEach((el) => {
    Object.assign(el.style, {
      fontSize: "1.3em",
      color: "var(--white)",
    });
  });
}

// copyright
{
  const copyRight = document.createElement("section");
  const conTeks = document.createElement("section");
  const teks = document.createElement("span");
  teks.textContent = "Copyright © 2025 | Privacy Policy";
  [copyRight, conTeks].forEach((el) => el.classList.add("flexCenter"));
  footer.appendChild(copyRight);
  copyRight.appendChild(conTeks);
  conTeks.appendChild(teks);
  Object.assign(copyRight.style, {
    width: "100%",
    // backgroundColor: "blue",
  });
  Object.assign(conTeks.style, {
    width: "80%",
    height: "100%",
    // backgroundColor: "green",
    borderTop: "0.1rem solid var(--third-color)",
  });
  Object.assign(teks.style, {
    color: "var(--white)",
    fontSize: "0.5em",
    margin: "1rem 0 0 0",
  });
}
