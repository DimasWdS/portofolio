window.addEventListener("scroll", () => {
  const conGallery = document.querySelector(".container-gallery");
  const blur = document.querySelector(".blur");
  let scrollY = Math.round(window.scrollY);
  const toggleScale = (add) => {
    blur.classList[add ? "add" : "remove"]("scale-1");
    conGallery.classList[add ? "add" : "remove"]("scale-1");
  };
  toggleScale(scrollY >= 5);
});
