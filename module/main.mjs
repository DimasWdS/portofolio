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
  span.style.position = "absolute"; // Sebelumnya typo: "absoute"
  span.style.display = "inline-block";
  span.style.top = "0";
  span.style.margin = "2% 0 0 0";
  span.style.width = "90%";
  span.style.height = "40%";
  span.style.backgroundColor = "rgb(219, 215, 220)";
  span.style.borderRadius = "5px";
  btn.appendChild(span);
}
export { sum, cloneBg, cloneBgV2, gilapBtn };
