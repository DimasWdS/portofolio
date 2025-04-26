import { button, sum } from "../../module/aggregate.mjs";

const main = document.querySelector("main");
const nav = document.createElement("nav");
main.appendChild(nav);
Object.assign(nav.style, {
  position: "fixed",
  zIndex: "5",
  top: "0",
  padding: "0 1rem 0 1rem",
  display: "flex",
  justifyContent: "end",
  width: "100%",
});

const btn = document.createElement("button");
nav.appendChild(btn);

button(btn, "Back", "index.html#portofolio");
