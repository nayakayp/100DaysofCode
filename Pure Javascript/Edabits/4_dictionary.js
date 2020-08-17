function dictionary(initial, words) {
  return words.filter((word) => word.startsWith(initial));
}

console.log(dictionary("bu", ["button", "breakfast", "border"]), ["button"]);
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]), []);
console.log(dictionary("there", ["there", "here", "everywhere"]), ["there"]);
console.log(dictionary("sno", ["snow", "paper", "ghost"]), ["snow"]);
console.log(dictionary("ma", ["marriage", "married", "many", "delight"]), [
  "marriage",
  "married",
  "many",
]);
console.log(
  dictionary("no", ["inferno", "notion", "nominate", "note", "fairy"]),
  ["notion", "nominate", "note"]
);
console.log(
  dictionary("cre", ["creating", "creature", "creed", "increasing"]),
  ["creating", "creature", "creed"]
);
