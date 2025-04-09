function sum(input1, input2) {
  return input1 + input2;
}
function cloneBg(oriElement) {
  const clone = oriElement.cloneNode(true);
  oriElement.insertAdjacentElement("afterend", clone);
}

export { sum, cloneBg };
