function getXP(obj) {
  myObj = Object.values(obj);
  let expPoints = 5;
  newArr = [];
  for (array of myObj) {
    newArr.push((array *= expPoints));
    expPoints *= 2;
  }
  return `${newArr.reduce((p, a) => p + a)}XP`;
}

console.log(
  getXP({
    "Very Easy": 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    "Very Hard": 1,
  }),
  "2055XP"
);

console.log(
  getXP({
    "Very Easy": 254,
    Easy: 32,
    Medium: 65,
    Hard: 51,
    "Very Hard": 34,
  }),
  "7650XP"
);

console.log(
  getXP({
    "Very Easy": 11,
    Easy: 0,
    Medium: 2,
    Hard: 0,
    "Very Hard": 27,
  }),
  "2255XP"
);

// made by @Joshua Señoron
