const storyBtns = document.querySelectorAll(".story-btn");

storyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
