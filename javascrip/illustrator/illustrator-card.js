const containerCard = document.querySelector(".containerCard");
// console.log(containerCard);

function cardOne() {
  const container = document.createElement("section");

  containerCard.appendChild(container);

  Object.assign(container.style, {
    position: "relative",
    display: "flex",
    width: "30rem",
    aspectRatio: "16/9",
    backgroundColor: "var(--background)",
    outline: "0.2rem solid var(--tes)",
    borderRadius: "15px",
    padding: "2px",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.64) 0px 2px 8px 0px",
  });
}

function cardTwo() {
  const container = document.createElement("section");

  containerCard.appendChild(container);

  Object.assign(container.style, {
    display: "flex",
    width: "25rem",
    aspectRatio: "1/1",
    backgroundColor: "var(--background)",
    outline: "0.2rem solid var(--tes)",
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.64) 0px 2px 8px 0px",
  });
}

cardOne();
cardTwo();
cardTwo();
cardOne();
cardOne();
cardTwo();
