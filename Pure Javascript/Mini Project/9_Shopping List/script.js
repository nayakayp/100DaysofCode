const unorderList = document.querySelector("ul");
const theInput = document.querySelector("input");
const theButton = document.querySelector("button");
theInput.focus();
theButton.onclick = function () {
  let currentValue = theInput.value;
  theInput.value = "";
  const shopList = document.createElement("li");
  const shopSpan = document.createElement("span");
  const shopDelButton = document.createElement("button");
  const trashIcon = document.createElement("i");

  shopList.appendChild(shopSpan);
  shopSpan.textContent = currentValue;
  shopList.appendChild(shopDelButton);
  shopDelButton.appendChild(trashIcon);
  trashIcon.className = "fa fa-trash";
  unorderList.appendChild(shopList);

  shopDelButton.onclick = function (e) {
    unorderList.removeChild(shopList);
  };
  theInput.focus();
};
