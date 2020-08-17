// IIFE for Checking IndexedDB
(() => {
  if ("indexedDb" in window) {
    console.log("Your browser not supported indexedDB");
    return;
  } else {
    console.log("IndexedDB loaded succesfully...");
  }
  // IndexedDB GOES HERE...
  const submitBtn = document.querySelector("button");
  submitBtn.addEventListener("click", addMember);
})();

// SELECTOR
const tableBody = document.querySelector("tbody");
const inputPhoto = document.querySelector("#inputPhoto");
const fullName = document.querySelector("#inputFullName");
const inputEmail = document.querySelector("#inputEmail");
const inputNRP = document.querySelector("#inputNRP");
const selectJurusan = document.querySelector("#formControlSelect");
var noUrut = 1;

// FUNCTIONS
function addMember(e) {
  e.preventDefault();

  //   CREATE ELEMENTS
  noUrut++;
  const tableRow = document.createElement("tr");
  const tableHead = document.createElement("th");
  const dataPhoto = document.createElement("td");
  const dataName = document.createElement("td");
  const dataEmail = document.createElement("td");
  const dataNRP = document.createElement("td");
  const dataJurusan = document.createElement("td");

  //   DISPLAY ELEMENTS
  tableHead.textContent = noUrut;
  dataPhoto.textContent = inputPhoto.value;
  dataName.textContent = fullName.value;
  dataEmail.textContent = inputEmail.value;
  dataNRP.textContent = inputNRP.value;
  dataJurusan.textContent = selectJurusan.value;

  tableRow.appendChild(tableHead);
  tableRow.appendChild(dataPhoto);
  tableRow.appendChild(dataName);
  tableRow.appendChild(dataEmail);
  tableRow.appendChild(dataNRP);
  tableRow.appendChild(dataJurusan);

  tableBody.appendChild(tableRow);

  //   ADD TO IndexedDB
  const dbname = "MyDB";
  const requestDB = window.indexedDB.open(dbname);

  requestDB.onupgradeneeded = () => {
    let db = requestDB.result;
    let store = db.createObjectStore("mahasiswa", { autoIncrement: true });

    // put method
    store.put({
      image: inputPhoto.value,
      name: noUrut,
      email: inputEmail.value,
      nrp: inputNRP.value,
      jurusan: selectJurusan.value,
    });
  };
  requestDB.onsuccess = () => {
    if (requestDB.readyState == "done") {
      console.log("Data is Successfully Inserted into indexedDB database!");
    }
  };

  //   NORMALIZE FORM

  inputPhoto.value = "";
  fullName.value = "";
  inputEmail.value = "";
  inputNRP.value = "";
  selectJurusan.value = "";
}
