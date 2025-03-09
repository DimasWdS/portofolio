window.addEventListener("scroll", () => {
  const conGallery = document.querySelector(".container-gallery");
  const blur = document.querySelector(".blur");
  let scrollY = Math.round(window.scrollY); // Ambil posisi scroll saat ini
  // console.log("Scroll Position:", scrollY);
  if (scrollY >= 5) {
    blur.classList.add("scale-1");
    conGallery.classList.add("scale-1");
    // console.log("diam");
  } else {
    blur.classList.remove("scale-1");
    conGallery.classList.remove("scale-1");
    // console.log("gerak");
  }
});
