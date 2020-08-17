class Link {
  constructor() {
    this.myLink = document.querySelector("#input-shorten");
    this.linkPlaceholder = document.querySelector(".link-placeholder");
    this.btnShorten = document.querySelector(".shorten");
  }
  shortenLink(e) {
    fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({
        url: this.myLink.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // CREATE ELEMENT
        this.newLink = document.createElement("div");
        this.linkBefore = document.createElement("p");
        this.linkWrapper = document.createElement("div");
        this.linkAfter = document.createElement("p");
        this.btnCopy = document.createElement("button");

        // SET ELEMENT STYLE & VALUE
        this.newLink.setAttribute("class", "placeholder-wrapper");
        this.linkBefore.textContent = json.url;
        this.linkWrapper.setAttribute("class", "new-link");
        this.linkAfter.setAttribute("class", "shortened-link");
        this.linkAfter.textContent = `https://rel.ink/${json.hashid}`;
        this.btnCopy.setAttribute("class", "btn copy");
        this.btnCopy.textContent = "Copy";

        // APPEND ELEMENTS TO EACH CONTAINER
        this.newLink.append(this.linkBefore);
        this.linkWrapper.append(this.linkAfter);
        this.linkWrapper.append(this.btnCopy);
        this.newLink.append(this.linkWrapper);

        this.linkPlaceholder.append(this.newLink);
        this.myLink.value = "";

        // GET ALL COPY BUTTON THAT CREATED
        this.tombolCopy = document.querySelectorAll(".copy");
        this.tombolCopy.forEach((btnCopy) => {
          btnCopy.addEventListener("click", copyCheck);
        });
      });
  }
}

const link = new Link();
link.btnShorten.addEventListener("click", function (e) {
  link.shortenLink(e);
});

function copyCheck(e) {
  e.target.classList.add("copied");
  e.target.textContent = "Copied";
  copiedText = e.target.parentElement.textContent;
  window.navigator.clipboard.writeText(copiedText.replace("Copied", ""));
  window.setTimeout(function () {
    e.target.classList.remove("copied");
    e.target.textContent = "Copy";
  }, 1500);
}
