// MY SOLUTAUTION
function findUniq(arr) {
  let arrayObj = {};
  for (array of arr) {
    arrayObj[array] = 0;
  }
  for (array of arr) {
    arrayObj[array] += 1;
  }
  for (array of arr) {
    if (arrayObj[array] == 1) {
      return array;
    }
  }
}
// BEST SOLUTION
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);

// let arrayObj = {};
// arrayObj.do = dog;

// console.log(arrayObj);
