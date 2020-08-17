// const collectionItems = document.getElementsByClassName(`item`);
// const todoList = document.getElementById(`todo-list`);
// const todoNr = document.getElementsByClassName(`todoNumber`)[0];

// const newItem = document.createElement(`li`);
// newItem.classList.add(`item`);
// newItem.innerText = `Item 3`;

// const anotherItem = document.createElement(`li`);
// anotherItem.classList.add(`item`);
// anotherItem.innerText = `Item 4`;

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// // Update the amount of items that we have
// todoNr.innerText = collectionItems.length;

const collectionItems = document.querySelectorAll(`.item`);
const todoList = document.querySelector(`#todo-list`);
const todoNr = document.querySelector(`.todoNumber`);

const newItem = document.createElement(`li`);
newItem.classList.add(`item`);
newItem.innerText = `Item 3`;

todoList.appendChild(newItem);

// Update the amount of items that we have
todoNr.innerText = collectionItems.length;
