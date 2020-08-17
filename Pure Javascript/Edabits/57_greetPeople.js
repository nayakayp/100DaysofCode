function greetPeople(names) {
  return names.map((name) => "Hello " + name).join(", ");
}

console.log(greetPeople(["Kyrill"]), "Hello Kyrill");
console.log(
  greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]),
  "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu"
);
console.log(greetPeople([]), "");
