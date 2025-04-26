import { button } from "../../module/aggregate.mjs";

const btnPortofolio = document.querySelector(".btnJs");
const btnFrontEnd = document.querySelector(".btnFrontEnd");

button(btnPortofolio, "See more...", "portofolio.html");
button(btnFrontEnd, "See more...", "frontend.html");
