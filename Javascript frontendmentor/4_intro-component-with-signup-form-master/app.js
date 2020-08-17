const reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
const submit = document.querySelector(".submit");
const firstName = document.querySelector(".first-name");
const lasttName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const errorFirstName = document.querySelector(".errorFirstName");
const errorLasttName = document.querySelector(".errorLastName");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");

submit.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();

  if (firstName.value == "") {
    firstName.classList.add("input-error");
    firstName.style.border = "solid 2px red";
    firstName.placeholder = "";
    errorFirstName.textContent = "First Name cannot be empty";
  }
  if (lasttName.value == "") {
    lasttName.classList.add("input-error");
    lasttName.style.border = "solid 2px red";
    lasttName.placeholder = "";
    errorLasttName.textContent = "Last Name cannot be empty";
  }
  if (password.value == "") {
    password.classList.add("input-error");
    password.style.border = "solid 2px red";
    password.placeholder = "";
    errorPassword.textContent = "Password cannot be empty";
  }
  if (!email.value.match(reEmail)) {
    email.classList.add("input-error");
    email.style.border = "solid 2px red";
    errorEmail.textContent = "Looks like this is not an email";
  }
  if (email.value == "") {
    email.classList.add("input-error");
    email.style.border = "solid 2px red";
    email.placeholder = "";
    errorEmail.textContent = "Email cannot be empty";
  } else if (
    firstName.value != "" &&
    lasttName.value != "" &&
    email.value != "" &&
    password.value != "" &&
    email.value.match(reEmail)
  ) {
    firstName.value = "";
    lasttName.value = "";
    password.value = "";
    email.value = "";
    alert("Check your email to claim your free trial!");
  }
}
