const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP__CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

THUMBNAILS.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
  });
});

POPUP__CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});

ARROW_RIGHT.addEventListener("click", () => {
  if (currentImgIndex === THUMBNAILS.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});

ARROW_LEFT.addEventListener("click", () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});

// console.log(THUMBNAILS);
// THUMBNAIL.addEventListener("click", () => {
//     console.log("test!");
// });
