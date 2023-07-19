document.addEventListener("DOMContentLoaded", function () {
  const carouselWrapper = document.querySelector(".blog-wrapper");
  const cardList = document.querySelector(".blog-list");
  const nextButton = document.querySelector(".next-button");
  const cardWidth = document.querySelector(".blogform").offsetWidth;
  let position = 0;

  blogbutton.addEventListener("click", function () {
    const maxPosition = cardList.offsetWidth - carouselWrapper.offsetWidth;
    position -= cardWidth;
    if (position < -maxPosition) {
      position = 0;
    }
    carouselWrapper.style.transform = `translateX(${position}px)`;
  });
});