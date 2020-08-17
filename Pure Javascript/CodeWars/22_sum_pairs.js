// var sum_pairs = function (ints, s) {
//   let oneLength = [];
//   let moreThanOne = [];
//   for (let i = 0; i < ints.length - 1; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       // console.log(ints[i], ints[j]);
//       if (ints[i] + ints[j] == s) {
//         oneLength.push([ints[i], ints[j]]);
//         moreThanOne.push([i, j]);
//       }
//     }
//   }
//   if (oneLength.length == 0) {
//     return undefined;
//   } else if (oneLength.length == 1) {
//     return oneLength[0];
//   } else if (oneLength.length == 2) {
//     return moreThanOne[0][0] < moreThanOne[1][0] &&
//       moreThanOne[0][1] - moreThanOne[0][0] <=
//         moreThanOne[1][1] - moreThanOne[1][0]
//       ? [ints[moreThanOne[0][0]], ints[moreThanOne[0][1]]]
//       : [ints[moreThanOne[1][0]], ints[moreThanOne[1][1]]];
//     // return moreThanOne;
//   } else {
//     return "hei";
//   }
// };

var sum_pairs = function (ints, s) {
  let stepCount = 0;
  let theObj = {};
  for (let i = 0; i < ints.length - 1; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      stepCount++;
      if (ints[i] + ints[j] == s) {
        theObj[`${stepCount}`] = [ints[i], ints[j]];
        stepCount = 0;
      }
    }
  }
  return theObj[Object.keys(theObj)[0]];
};

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

console.log(sum_pairs(l1, 8), "[1,7],8");
console.log(sum_pairs(l2, -6), " [0, -6],-6");
console.log(sum_pairs(l3, -2), "undefined");
console.log(sum_pairs(l4, 2), "[1,1],2");
console.log(sum_pairs(l5, 10), "[3,7],10");
console.log(sum_pairs(l6, 8), "[4,4],8");
console.log(sum_pairs(l7, 0), "[0,0],0");
console.log(sum_pairs(l8, 10), "[13,-3],10");
