const containerCard = document.querySelector(".containerCard");
// console.log(containerCard);

function createCard() {
  const container = document.createElement("section");

  containerCard.appendChild(container);

  container.classList.add("card-illustrator");

  Object.assign(container.style, {
    position: "relative",
    display: "flex",
    width: "25rem",
    aspectRatio: "1/1",
    backgroundColor: "var(--background)",
    outline: "0.2rem solid var(--tes)",
    borderRadius: "15px",
    padding: "2px",
    overflow: "hidden",
    // boxShadow: "rgba(0, 0, 0, 0) 0px 20px 80px 5px",
  });
}

for (let i = 0; i < 5; i++) {
  createCard();
}
