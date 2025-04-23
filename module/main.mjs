function sum(input1, input2) {
  return input1 + input2;
}
function cloneBg(oriElement) {
  const clone = oriElement.cloneNode(true);
  oriElement.insertAdjacentElement("afterend", clone);
}
function cloneBgV2(oriElement, inElement) {
  const clone = inElement.cloneNode(true);
  oriElement.appendChild(clone);
}
function gilapBtn(btn) {
  const span = document.createElement("span");

  Object.assign(span.style, {
    position: "absolute",
    display: "inline-block",
    top: "0",
    margin: "2% 0 0 0",
    width: "90%",
    height: "40%",
    backgroundColor: "rgb(219, 215, 220)",
    borderRadius: "5px",
  });

  btn.appendChild(span);
}

export { sum, cloneBg, cloneBgV2, gilapBtn };
