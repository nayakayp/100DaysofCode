/**Range */
// function range(start, end) {
//   var array = [];
//   for (start; start <= end; start++) {
//     array.push(start);
//   }
//   return array;
// }
// console.log(range(1, 10));

/**Step */
// function range(start, end, step) {
//   var array = [];
//   for (start; start >= end; start += step) {
//     array.push(start);
//   }
//   return array;
// }
// console.log(range(5, 2, -1));

/**The sum of a range */
// function sum(rangeLists) {
//   var total = 0;
//   for (list of rangeLists) {
//     total = total + list;
//   }
//   return total;
// }
// function range(start, end) {
//   var array = [];
//   for (start; start <= end; start++) {
//     array.push(start);
//   }
//   return array;
// }
// console.log(sum(range(1, 10)));

/**Reversing an array */
// function reverseArray(arrayLists) {
//   var iterator = arrayLists.length - 1;
//   var newList = [];
//   for (list of arrayLists) {
//     newList.push(arrayLists[iterator]);
//     iterator--;
//   }
//   return newList;
// }
// console.log(reverseArray(["A", "B", "C"]));
//**Ini belum bener punyaku */
// function reverseArrayInPlace(array) {
//   var newArray = array;
//   var j = array.length;
//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[j - 1];
//     j--;
//   }
//   return (array = newArray);
// }

//**Ini yg udh bener */
// function reverseArrayInPlace(array) {
//   array = 1;
//   return array;
// }
// function reverseArrayInPlace(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/**A list */
/**Deep comparison */
