const hamburger = document.querySelector(".burger");
const navigation = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("nav-active");
});
