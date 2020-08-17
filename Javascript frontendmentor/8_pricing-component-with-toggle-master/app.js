const switchPrice = document.querySelector(".btn-switch");
const innerCircle = document.querySelector(".inner-circle");
const prices = document.querySelectorAll(".price");

switchPrice.addEventListener("click", () => {
  innerCircle.classList.toggle("active");
  if (innerCircle.classList.contains("active")) {
    prices[0].textContent = "19.99";
    prices[1].textContent = "24.99";
    prices[2].textContent = "39.99";
  } else {
    prices[0].textContent = "199.99";
    prices[1].textContent = "249.99";
    prices[2].textContent = "399.99";
  }
});
