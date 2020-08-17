function removeFirstLast(str) {
  return str.length > 2 ? str.slice(1, -1) : str;
}

console.log(removeFirstLast("hello"), "ell");
console.log(removeFirstLast("benefit"), "enefi");
console.log(removeFirstLast("wordy"), "ord");
console.log(removeFirstLast("maybe"), "ayb");
console.log(removeFirstLast("to"), "to");
console.log(removeFirstLast("a"), "a");
console.log(removeFirstLast(""), "");
