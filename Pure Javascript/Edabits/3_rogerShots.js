// MY SOLUTION
function rogerShots(arr) {
  const result = arr.filter((word) => word == "Bang!" || word == "BangBang!");
  for (let i = 0; i < result.length; i++) {
    result[i] = 0.5;
  }
  const total = result.reduce(
    (accumulator, currentValue = 0) => accumulator + currentValue
  );
  return total;
}

// BEST SOLUTION
function rogerShots(arr) {
  return arr.filter((x) => x == "Bang!" || x == "BangBang!").length / 2;
}

//TESTER
console.log(
  rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]),
  3
);
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]), 2.5);
console.log(
  rogerShots([
    "Bang!",
    "BangBangBang!",
    "Boom!",
    "Bang!",
    "BangBang!",
    "BangBang!",
  ]),
  2
);
console.log(rogerShots(["BangBang!", "BangBang!", "BangBang!"]), 1.5);
console.log(
  rogerShots([
    "Bang!",
    "BadaBing!",
    "Badaboom!",
    "Bang!",
    "Bang!",
    "Bang!",
    "Bang!",
    "Bang!",
  ]),
  3
);
console.log(
  rogerShots([
    "BangBang!",
    "BangBang!",
    "Bag!",
    "Ban!",
    "Tang!",
    "Bang!",
    "Bang!",
  ]),
  2
);

const words = [
  "BangBang!",
  "BangBang!",
  "Bag!",
  "Ban!",
  "Tang!",
  "Bang!",
  "Bang!",
];

// "Bang!":0.5
// "BangBang!":0.5
