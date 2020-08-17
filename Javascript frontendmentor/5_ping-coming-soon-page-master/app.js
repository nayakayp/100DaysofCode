const button = document.querySelector("button");
const input = document.querySelector("input");
const errorInfo = document.querySelector(".err-info");
const reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

button.addEventListener("click", notifySubmit);

function notifySubmit(e) {
  e.preventDefault();

  if (input.value.match(reEmail)) {
    input.value = "";
    errorInfo.remove();
    alert("Check your email!");
  } else {
    errorInfo.textContent = "Please provide a valid email address";
  }
}
