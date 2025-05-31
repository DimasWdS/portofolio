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
// container form
{
  Object.assign(containerForm.style, {
    display: "flex",
    flexDirection: "column",
  });
  const section = document.createElement("section");
  containerForm.appendChild(section);
  Object.assign(section.style, {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
  });

  // form

  const containerNama = document.createElement("div");
  const containerEmail = document.createElement("div");
  const containerPesan = document.createElement("div");
  const containerBtn = document.createElement("div");

  section.appendChild(containerNama);
  section.appendChild(containerEmail);
  section.appendChild(containerBtn);

  [containerNama, containerEmail, containerBtn].forEach((el) => {
    Object.assign(el.style, {
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: "90%",
      // backgroundColor: "yellow",
      marginTop: "2rem",
    });
  });

  const formNama = document.createElement("input");
  formNama.setAttribute("id", "namaInput");
  formNama.classList.add("namaInput");
  const namaInput = document.getElementById("formNama");
  console.log(namaInput);

  const formEmail = document.createElement("input");
  const namaLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  namaLabel.textContent = "Nama";
  emailLabel.textContent = "Email";
  formNama.setAttribute("type", "text");
  formEmail.setAttribute("type", "email");

  const btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Submit";

  containerNama.appendChild(namaLabel);
  containerNama.appendChild(formNama);
  containerEmail.appendChild(emailLabel);
  containerEmail.appendChild(formEmail);
  containerBtn.appendChild(btnSubmit);

  [formNama, formEmail].forEach((el) => {
    Object.assign(el.style, {
      width: "100%",
      height: "3rem",
      backgroundColor: "transparent",
      border: "none",
      padding: "0 0 0 1rem",
      outline: "none",
      borderBottom: "0.1rem solid var(--third-color)",
    });
    //

    //
    el.addEventListener("focus", function () {
      Object.assign(el.style, {
        // backgroundColor: "yellow",
      });
    });
    el.addEventListener("blur", function () {
      Object.assign(el.style, {
        // backgroundColor: "transparent",
      });
    });
    //
  });

  [namaLabel, emailLabel].forEach((el) => {
    Object.assign(el.style, {
      position: "absolute",
      margin: "0 0 0 1rem ",
      fontFamily: `"Montserrat", sans-serif`,
      fontWeight: "500",
    });
  });

  Object.assign(btnSubmit.style, {
    margin: "0 0 0 1rem",
    backgroundColor: "var(--third-color)",
    padding: "0.4rem 1rem ",
    borderRadius: "10px",
    fontWeight: "500",
    fontSize: "1em",
    color: "var(--white)",
  });
}
