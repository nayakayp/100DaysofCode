const followers = document.querySelectorAll(".followers");
const counters = document.querySelectorAll(".card-counter");
const modeStatus = document.querySelector("span");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");
const cardsStatistic = document.querySelectorAll(".card-statistic");
const cardsOverview = document.querySelectorAll(".card-overview");
const toggle = document.querySelector(".toggle-btn");

toggle.addEventListener("click", darkTheme);
function darkTheme(e) {
  e.preventDefault();

  if (modeStatus.textContent == "Light Mode") {
    modeStatus.textContent = "Dark Mode";
    modeStatus.style.color = "hsl(0, 0%, 100%)";
    toggle.classList.add("dark");
    toggle.style.background =
      "linear-gradient(40deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%)";
    body.style.background = "hsl(230, 17%, 14%)";
    h1.style.color = "hsl(0, 0%, 100%)";
    h3.style.color = "hsl(0, 0%, 100%)";
    cardsStatistic.forEach((card) => {
      card.style.background = "hsl(228, 28%, 20%)";
    });
    cardsOverview.forEach((card) => {
      card.style.background = "hsl(228, 28%, 20%)";
    });
    followers.forEach((follower) => {
      follower.style.color = "hsl(0, 0%, 100%)";
    });
    counters.forEach((counter) => {
      counter.style.color = "hsl(0, 0%, 100%)";
    });
  } else {
    modeStatus.textContent = "Light Mode";
    modeStatus.style.color = "hsl(228, 12%, 44%)";
    toggle.classList.remove("dark");
    toggle.style.background = "hsl(228, 12%, 44%)";
    body.style.background = "#ffffff";
    h1.style.color = "hsl(230, 17%, 14%)";
    h3.style.color = "hsl(228, 12%, 44%)";
    cardsStatistic.forEach((card) => {
      card.style.background = "hsl(227, 47%, 96%)";
    });
    cardsOverview.forEach((card) => {
      card.style.background = "hsl(227, 47%, 96%)";
    });
    followers.forEach((follower) => {
      follower.style.color = "hsl(230, 17%, 14%)";
    });
    counters.forEach((counter) => {
      counter.style.color = "hsl(230, 17%, 14%)";
    });
  }
}
