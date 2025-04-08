if (window.innerWidth <= 640) {
  const conBg = document.querySelector(".gallery-bg");
  let lastInserted = conBg;

  for (let i = 0; i < 2; i++) {
    const clone = conBg.cloneNode(true);
    lastInserted.insertAdjacentElement("afterend", clone);
    lastInserted = clone; // update posisi terakhir
  }
}

const kalimat1 = document.querySelector(".gallery-bg section:nth-child(1)");
const cloneTeks1 = kalimat1.cloneNode(true);
kalimat1.insertAdjacentElement("beforeend", cloneTeks1);

const kalimat2 = document.querySelector(".gallery-bg section:nth-child(2)");
const cloneTeks2 = kalimat2.cloneNode(true);
kalimat2.insertAdjacentElement("beforeend", cloneTeks2);

const kalimat3 = document.querySelector(".gallery-bg section:nth-child(3)");
const cloneTeks3 = kalimat2.cloneNode(true);
kalimat3.insertAdjacentElement("beforeend", cloneTeks3);

const kalimat4 = document.querySelector(".gallery-bg section:nth-child(4)");
const cloneTeks4 = kalimat4.cloneNode(true);
kalimat4.insertAdjacentElement("beforeend", cloneTeks4);
