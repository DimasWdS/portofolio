function button(btn, content, href) {
  Object.assign(btn.style, {
    position: "relative",
    // backgroundColor: "yellow",
    outline: "0.1rem solid var(--white)",
    width: "max-content",
    margin: "1rem 0 0 0",
    borderRadius: "5px",
    overflow: "hidden",
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

const btn = document.querySelector(".tes");

if (btn) {
  button(btn, "Back", "index.html#portofolio");
} else {
  console.warn("Element with class 'tes' not found.");
}

window.addEventListener("scroll", () => {
  const conGallery = document.querySelector(".container-gallery");
  const blur = document.querySelector(".blur");
  let scrollY = Math.round(window.scrollY);
  const toggleScale = (add) => {
    blur.classList[add ? "add" : "remove"]("scale-1");
    conGallery.classList[add ? "add" : "remove"]("scale-1");
  };
  toggleScale(scrollY >= 5);
});
