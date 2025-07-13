const containerFrontend = document.createElement("main");
document.body.appendChild(containerFrontend);
Object.assign(containerFrontend.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // backgroundColor: "yellow",
});

const home = document.createElement("section");
const containerCard = document.createElement("section");
const title = document.createElement("section");
const conOrnamen = document.createElement("section");

containerFrontend.appendChild(home);
home.appendChild(title);
home.appendChild(conOrnamen);

// title
{
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p.textContent = "Widy";
  p2.textContent = "code";
  p3.textContent = ".";
  title.appendChild(p);
  title.appendChild(p2);
  title.appendChild(p3);
  [p, p2, p3].forEach((el, dex) => {
    Object.assign(el.style, {
      fontSize: "3.5em",
      fontWeight: "700",
      color: dex === 1 ? "var(--third-color)" : "var(--white)",
    });
  });
}
// search
{
  const containerSearch = document.createElement("section");
  const search = document.createElement("input");
  const btnSearch = document.createElement("button");
  const iconSearch = document.createElement("img");
  const label = document.createElement("label");

  home.appendChild(containerSearch);
  containerSearch.appendChild(search);
  containerSearch.appendChild(btnSearch);
  containerSearch.appendChild(label);
  btnSearch.appendChild(iconSearch);

  label.textContent = "whats you looking for?";

  search.classList.add("homeInput");

  search.setAttribute("id", "homeInput");
  btnSearch.setAttribute("id", "btnSearch");
  label.setAttribute("for", "homeInput");
  label.setAttribute("id", "labelInput");
  iconSearch.setAttribute("src", "./asset/icon/search-icon.svg");

  const input = document.getElementById("homeInput");
  const labelInput = document.getElementById("labelInput");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      labelInput.classList.add("hiddenLabel");
    } else {
      labelInput.classList.remove("hiddenLabel");
    }
  });

  Object.assign(containerSearch.style, {
    position: "absolute",
    height: "3.5rem",
    width: "20rem",
    margin: "3rem 0",
    // backgroundColor: "yellow",
  });

  Object.assign(label.style, {
    position: "absolute",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
    margin: "0 0 0 0.7rem",
    color: "var(--main-font)",
    fontWeight: "700",
  });

  Object.assign(search.style, {
    height: "100%",
    width: "100%",
    borderRadius: "0 10rem 10rem 0",
    border: "none",
    boxShadow: "none",
    outline: "2px solid transparent",
    backgroundColor: "var(--tes)",
    padding: "0 3.5rem 0 0.5rem",
    fontWeight: "600",
    color: "var(--main-font)",
    fontSize: "1em",
  });

  Object.assign(btnSearch.style, {
    position: "absolute",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "50%",
    margin: "0 0.2rem 0 0",
    height: "3rem",
    width: "3rem",
    backgroundColor: "var(--third-color)",
  });

  Object.assign(iconSearch.style, {
    scale: "50%",
  });
}

Object.assign(home.style, {
  position: "relative",
  width: "100%",
  height: "100vh",
});
Object.assign(title.style, {
  position: "absolute",
  zIndex: "1",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "flex",
  gap: "0.5rem",
});
Object.assign(conOrnamen.style, {
  position: "absolute",
  height: "100%",
  width: "100%",
});
