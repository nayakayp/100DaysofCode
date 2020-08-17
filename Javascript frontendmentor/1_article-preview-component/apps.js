const buttons = document.querySelectorAll(".share-button");
const firstShare = document.querySelector(".first");
const secondShare = document.querySelector(".second");

buttons.forEach((button) => {
  button.addEventListener("click", toggleShare);
});

function toggleShare(e) {
  e.preventDefault();

  if (firstShare.style.display === "flex") {
    firstShare.style.display = "none";
    secondShare.style.display = "flex";
  } else {
    firstShare.style.display = "flex";
    secondShare.style.display = "none";
  }
}
