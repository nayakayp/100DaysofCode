function factorChain(arr) {
  var truth = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i + 1], arr[i]);
    if (arr[i + 1] % arr[i] === 0) {
      truth++;
    }
  }
  return truth == arr.length - 1 ? true : false;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12]));
console.log(factorChain([10, 1]));
console.log(factorChain([10, 20, 30, 40]));
console.log(factorChain([10, 20, 40]));
console.log(factorChain([1, 1, 1, 1, 7, 49]));
