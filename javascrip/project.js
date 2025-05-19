const conProject = document.querySelector(".project");
conProject.classList.add("flexCenter");
Object.assign(conProject.style, {
  width: "100%",
});

const container = document.createElement("section");
conProject.appendChild(container);
container.classList.add("flexCenter");
Object.assign(container.style, {
  width: "90%",
  maxWidth: "60rem",
  height: "100%",
  // backgroundColor: "green",
});

{
  const conIll = document.createElement("section");
  container.appendChild(conIll);
  Object.assign(conIll.style, {
    width: "100%",
    // backgroundColor: "blue",
  });
  const conImg = document.createElement("section");
  conImg.classList.add("flexCenter");
  conIll.appendChild(conImg);
  Object.assign(conImg.style, {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    width: "100%",
    padding: "2rem 0 2rem 0",
    // backgroundColor: "yellow",
  });

  const conImg1 = document.createElement("section");
  const conImg2 = document.createElement("section");
  Object.assign(conImg1.style, {
    transform: "rotate(5deg)",
  });
  Object.assign(conImg2.style, {
    transform: "rotate(5deg)",
  });
  [conImg1, conImg2].forEach((el) => {
    el.classList.add("mobileGone");
    conImg.appendChild(el);
    Object.assign(el.style, {
      height: "25rem",
      flexShrink: "0",
      width: "45rem",
      backgroundColor: "var(--tes)",
      borderRadius: "10px",
      transition: "all 0.2s ease-in-out",
      // border: "2px solid transparent",
    });
    el.addEventListener("mouseenter", function () {
      el.classList.add("cardMouseEnter");
      el.classList.remove("cardMouseLeave");
    });
    el.addEventListener("mouseleave", function () {
      el.classList.add("cardMouseEnter");
      el.classList.remove("cardMouseEnter");
    });
  });
  const conBtn = document.createElement("section");
  conBtn.classList.add("flexCenter");
  conIll.appendChild(conBtn);
  Object.assign(conBtn.style, {
    position: "relative",
    margin: "5rem 0 5rem 0",
    width: "100%",
    height: "4rem",
    backgroundColor: "var(--tes)",
    borderRadius: "10px",
  });
  const btnIll = document.createElement("section");
  conBtn.appendChild(btnIll);
  Object.assign(btnIll.style, {
    position: "absolute",
    height: "4rem",
    width: "9rem",
    backgroundColor: "var(--white)",
    bottom: "100%",
    transform: "translateY(50%)",
    borderRadius: "5px",
  });
  const a = document.createElement("a");
  btnIll.appendChild(a);
  a.textContent = "See more..";
  a.href = "illustrator.html";
  Object.assign(a.style, {
    display: "inline-flex",
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    color: "var(--background)",
    fontFamily: `"Montserrat", sans-serif`,
  });
  a.classList.add("flexCenter");
}
