const TESTIMONIALS = [
  {
    image: "images/image-tanya.jpg",
    userName: "Tanya Sinclair",
    title: "UX Engineer",
    testimonial: `"I've been interested in coding for a while but never taken the jump, until now. I could'nt recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
  },
  {
    image: "images/image-john.jpg",
    userName: "John Tarkpor",
    title: "Junior Front-End Developer",
    testimonial: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"`,
  },
];
const buttons = document.querySelectorAll(".btn");
const avatarImage = document.querySelector("#avatar-image");
const testiPlaceholder = document.querySelector(".testimonial-placeholder");
const name = document.querySelector(".name");
const title = document.querySelector(".title");
counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("next")) {
      console.log(name.innerText);
      if (name.innerText == "Tanya Sinclair") {
        avatarImage.src = TESTIMONIALS[1].image;
        testiPlaceholder.innerText = TESTIMONIALS[1].testimonial;
        name.innerText = TESTIMONIALS[1].userName;
        title.innerText = TESTIMONIALS[1].title;
      } else {
        avatarImage.src = TESTIMONIALS[0].image;
        testiPlaceholder.innerText = TESTIMONIALS[0].testimonial;
        name.innerText = TESTIMONIALS[0].userName;
        title.innerText = TESTIMONIALS[0].title;
      }
    } else if (button.classList.contains("prev")) {
      console.log("prev clicked");
      if (name.innerText == "John Tarkpor") {
        avatarImage.src = TESTIMONIALS[0].image;
        testiPlaceholder.innerText = TESTIMONIALS[0].testimonial;
        name.innerText = TESTIMONIALS[0].userName;
        title.innerText = TESTIMONIALS[0].title;
      } else {
        avatarImage.src = TESTIMONIALS[1].image;
        testiPlaceholder.innerText = TESTIMONIALS[1].testimonial;
        name.innerText = TESTIMONIALS[1].userName;
        title.innerText = TESTIMONIALS[1].title;
      }
    }
  });
});
