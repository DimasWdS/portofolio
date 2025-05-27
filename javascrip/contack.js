const contack = document.getElementById("contack");

const containerMaskot = document.createElement("section");
containerMaskot.classList.add("container-maskot");
contack.appendChild(containerMaskot);
const containerForm = document.createElement("section");
containerForm.classList.add("container-form");
contack.appendChild(containerForm);
Object.assign(contack.style, {
  display: "flex",
  width: "100%",
  gap: "0.1rem",
  backgroundColor: "var(--main-font)",
});
[containerForm, containerMaskot].forEach((el) => {
  Object.assign(el.style, {
    width: "50%",
    height: "40rem",
    // backgroundColor: "yellow",
  });
});

{
  const header = document.createElement("header");
  const p = document.createElement("p");
  containerForm.appendChild(header);
  header.appendChild(p);
  Object.assign(header.style, {
    width: "100%",
    margin: "2rem 0 2rem 0",
  });
  p.textContent = "Contack";
  Object.assign(p.style, {
    fontSize: "2em",
    fontWeight: "bold",
    color: "var(--tes)",
  });
}
