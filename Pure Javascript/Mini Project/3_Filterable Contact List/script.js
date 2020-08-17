let filterInput = document.querySelector("input");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //   Get value of input
  let filterValue = document.querySelector("input").value.toUpperCase();

  //   Get names ul
  let ul = document.querySelector("#names");
  //Get li-s from ul
  let li = ul.querySelectorAll("li.collection-item");
  //   Loop through collection-item li-s
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      // Kalau list-nya sama dengan di input, tidak melakukan apa2
      // krn default display-nya sudah display:show
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
