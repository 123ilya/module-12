document.addEventListener("DOMContentLoaded", function () {
  let popupButtons = document.querySelectorAll(".open-popup");
  let container = document.querySelector(".popup-container");
  for (let i = 0; i < popupButtons.length; i++) {
    popupButtons[i].addEventListener("click", function () {
      container.style.display = "flex";
    });
  }
});
