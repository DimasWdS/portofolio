const containerFrontend = document.createElement("main");
document.body.appendChild(containerFrontend);
Object.assign(containerFrontend.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // backgroundColor: "yellow",
});

const containerCard = document.createElement("section");

containerFrontend.appendChild(containerCard);

Object.assign(containerCard.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  // backgroundColor: "green",
});
