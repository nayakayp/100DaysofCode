const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

const featurePick = document.querySelectorAll(".list");
const featureSimple = document.querySelector(".simple");
const featureIntelligent = document.querySelector(".intelligent");
const featureShare = document.querySelector(".share");

const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

// EVENT LISTENER HAMBURGER
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// EVENT LISTENER FEATURES SECTION
featurePick.forEach((list) => {
  list.addEventListener("click", (e) => {
    const removeStatus = document.querySelectorAll(".picked");
    const createStatus = document.createElement("div");
    createStatus.setAttribute("class", "picked");
    removeStatus.forEach((status) => {
      status.remove();
    });
    e.target.append(createStatus);
    let statusText = e.target.textContent;
    switch (statusText.trim()) {
      case "Simple Bookmarking":
        featureSimple.classList.add("active-feature");
        featureIntelligent.classList.remove("active-feature");
        featureShare.classList.remove("active-feature");
        break;
      case "Speedy Searching":
        featureSimple.classList.remove("active-feature");
        featureIntelligent.classList.add("active-feature");
        featureShare.classList.remove("active-feature");
        break;
      case "Easy Sharing":
        featureSimple.classList.remove("active-feature");
        featureIntelligent.classList.remove("active-feature");
        featureShare.classList.add("active-feature");
        break;
    }
  });
});

// EVENT LISTENER ACCORDION SECTION
accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    switch (e.target.textContent.trim()) {
      case "What is Bookmark?":
        panels[0].style.display = "block";
        panels[1].style.display = "none";
        panels[2].style.display = "none";
        panels[3].style.display = "none";
        break;
      case "How can I request a new browser?":
        panels[1].style.display = "block";
        panels[0].style.display = "none";
        panels[2].style.display = "none";
        panels[3].style.display = "none";
        break;
      case "Is there a mobile app?":
        panels[2].style.display = "block";
        panels[1].style.display = "none";
        panels[0].style.display = "none";
        panels[3].style.display = "none";
        break;
      case "What about other Chromium browsers?":
        panels[3].style.display = "block";
        panels[1].style.display = "none";
        panels[2].style.display = "none";
        panels[0].style.display = "none";
        break;
    }
  });
});
