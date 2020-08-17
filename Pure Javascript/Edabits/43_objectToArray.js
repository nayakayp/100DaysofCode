// MY SOLUTION
function objectToArray(obj) {
  let newArr = [];
  for (const [key, value] of Object.entries(obj)) {
    newArr.push([`${key}`, value]);
  }
  return newArr;
}

// BEST SOLUTION
function objectToArray(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  }),
  [
    ["D", 1],
    ["B", 2],
    ["C", 3],
  ]
);

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  }),
  [
    ["likes", 2],
    ["dislikes", 3],
    ["followers", 10],
  ]
);
