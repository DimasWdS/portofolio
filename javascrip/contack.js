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
    padding: "5rem 0 5rem 0",
    // height: "50rem",
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
  p.classList.add("marginLeft");
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
  const containerSubject = document.createElement("div");
  const containerBtn = document.createElement("div");
  const containerPesan = document.createElement("div");

  section.appendChild(containerNama);
  section.appendChild(containerEmail);
  section.appendChild(containerSubject);
  section.appendChild(containerPesan);
  section.appendChild(containerBtn);

  [
    containerNama,
    containerEmail,
    containerSubject,
    containerBtn,
    containerPesan,
  ].forEach((el) => {
    Object.assign(el.style, {
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: "90%",
      // backgroundColor: "yellow",
      marginTop: "2rem",
    });
  });

  Object.assign(containerPesan.style, {});

  const formNama = document.createElement("input");
  const namaLabel = document.createElement("label");

  const formEmail = document.createElement("input");
  const emailLabel = document.createElement("label");

  const formSubject = document.createElement("input");
  const subjectLabel = document.createElement("label");

  const formPesan = document.createElement("textarea");
  const pesanLabel = document.createElement("label");

  containerNama.appendChild(namaLabel);
  containerNama.appendChild(formNama);

  containerEmail.appendChild(emailLabel);
  containerEmail.appendChild(formEmail);

  containerSubject.appendChild(formSubject);
  containerSubject.appendChild(subjectLabel);

  containerPesan.appendChild(pesanLabel);
  containerPesan.appendChild(formPesan);

  // nama
  formNama.setAttribute("type", "text");
  formNama.setAttribute("id", "namaInput");
  formNama.classList.add("namaInput");
  const nama = document.getElementById("namaInput");

  // nama label
  namaLabel.classList.add("labelNama");
  namaLabel.textContent = "Your Name";
  namaLabel.setAttribute("for", "namaInput");
  const labelNama = document.querySelector(".labelNama");

  //email
  formEmail.setAttribute("type", "email");
  formEmail.setAttribute("id", "emailInput");
  const email = document.getElementById("emailInput");

  // email label
  emailLabel.classList.add("labelEmail");
  emailLabel.textContent = "Your Email";
  emailLabel.setAttribute("for", "emailInput");
  const labelEmail = document.querySelector(".labelEmail");

  // subject
  formSubject.setAttribute("type", "text");
  subjectLabel.textContent = "Subject";
  formSubject.setAttribute("id", "subjectInput");
  const subject = document.getElementById("subjectInput");

  // pesan
  pesanLabel.textContent = "Your Message";
  formPesan.setAttribute("id", "pesanInput");
  pesanLabel.setAttribute("for", "pesanInput");
  const pesan = document.getElementById("pesanInput");

  //
  formNama.setAttribute("autocomplete", "off");
  formEmail.setAttribute("autocomplete", "off");
  formSubject.setAttribute("autocomplete", "off");
  formPesan.setAttribute("autocomplete", "off"); // meskipun textarea, tetap bisa ditambahkan

  nama.addEventListener("input", () => {
    if (nama.value.trim() !== "") {
      labelNama.classList.add("displayNone");
    } else {
      labelNama.classList.remove("displayNone");
    }
  });
  email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
      labelEmail.classList.add("displayNone");
    } else {
      labelEmail.classList.remove("displayNone");
    }
  });
  subject.addEventListener("input", () => {
    if (subject.value.trim() !== "") {
      subjectLabel.classList.add("displayNone");
    } else {
      subjectLabel.classList.remove("displayNone");
    }
  });
  pesan.addEventListener("input", () => {
    if (pesan.value.trim() !== "") {
      pesanLabel.classList.add("displayNone");
    } else {
      pesanLabel.classList.remove("displayNone");
    }
  });

  [formNama, formEmail, formSubject, formPesan].forEach((el) => {
    Object.assign(el.style, {
      width: "100%",
      height: "3rem",
      backgroundColor: "transparent",
      border: "none",
      padding: "0 0 0 1rem",
      outline: "none",
      borderBottom: "0.1rem solid var(--third-color)",
      fontSize: "1em",
      fontFamily: `"Montserrat", sans-serif`,
    });
  });

  [namaLabel, emailLabel, subjectLabel, pesanLabel].forEach((el) => {
    Object.assign(el.style, {
      position: "absolute",
      margin: "0 0 0 1rem ",
      fontFamily: `"Montserrat", sans-serif`,
      fontWeight: "500",
    });
  });

  formPesan.style.height = "10rem";
  pesanLabel.style.top = "0";

  containerBtn.classList.add("flexCenter", "marginLeft");
  Object.assign(containerBtn.style, {
    height: "3rem",
    width: "7rem",
    backgroundColor: "var(--background)",
    borderRadius: "5px",
  });

  //
  const btnSend = document.createElement("button");
  const span = document.createElement("span");
  const mailIcon = document.createElement("img");
  mailIcon.setAttribute("src", "./asset/icon/mailwhite.svg");
  btnSend.appendChild(mailIcon);
  containerBtn.appendChild(btnSend);
  btnSend.appendChild(span);
  span.textContent = "Send";
  btnSend.classList.add("flexCenter");
  Object.assign(btnSend.style, {
    height: "100%",
    width: "100%",
    gap: "0.2rem",
  });
  Object.assign(span.style, {
    color: "var(--white)",
    fontWeight: "500",
  });
  Object.assign(mailIcon.style, {
    transform: "scale(0.8)",
  });
}
