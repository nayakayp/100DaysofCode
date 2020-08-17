/*----------------------- Format a string of names like 'Bart, Lisa & Maggie'. -----------------------*/
// function list(names) {
//   let result = names.map((a) => a.name);
//   const amtNames = result.length;
//   switch (amtNames) {
//     case 0:
//       return "";
//     case 1:
//       return `${result[0]}`;
//       break;
//     case 2:
//       return `${result[0]} & ${result[1]}`;
//       break;
//     default:
//       resultSlice = result.slice(0, result.length - 2);
//       resultRange = resultSlice.join(", ");
//       return `${resultRange}, ${result[result.length - 2]} & ${
//         result[result.length - 1]
//       }`;
//       break;
//   }
// }
// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "Homer" },
//     { name: "Marge" },
//   ])
// );

/*----------------------- List Filtering -----------------------*/
// function filter_list(l) {
//   var myList = [];
//   for (list of l) {
//     if (Number.isInteger(list)) {
//       myList.push(list);
//     }
//   }
//   return myList;
// }
// // Best Practice
// function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
//   }
// console.log(filter_list([1, 2, "a", "b"]));

/*----------------------- Money, Money, Money -----------------------*/
// function calculateYears(principal, interest, tax, desired) {
//   var afterTax;
//   var years = 0;
//   while (principal < desired) {
//     afterTax = principal * interest - principal * interest * tax;
//     principal = principal + afterTax;
//     years++;
//   }
//   return years;
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1000));

/*----------------------- (NOT SOLVED YET) Are they the "same"? -----------------------*/

// function comp(array0, array2) {
//   var numbB;
//   var numbA;
//   let matching = 0;
//   for (numbB of array2) {
//     for (numbA of array0) {
//       if (Math.sqrt(numbB) == numbA) {
//         matching++;
//         break;
//       }
//     }
//   }
//   return matching == array2.length;
// }
// function comp(array1, array2) {
//   var numbB;
//   var numbA;
//   let matching = 0;
//   for (numbB of Object(array2)) {
//     for (numbA of Object(array1)) {
//       if (Math.sqrt(numbB) == numbA) {
//         matching++;
//         break;
//       }
//     }
//   }
//   //   return matching;
//   return matching == array2.length;
// }

// function comp(a1, a2) {
//   for (let i; i < a2.length; i++) {
//     console.log(i);
//   }
// }

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];
// console.log(comp(a1, a2));

// for (numbB of Object(a2)) {
//   console.log(numbB);
// }
// console.log(`Pemisah`);
// for (numbA of Object(a1)) {
//   console.log(numbA);
// }
/*----------------------- Dubstep -----------------------*/
// function songDecoder(song) {
//   var a = song.split("WUB");
//   for (var i = a.length; i >= 0; i--) {
//     if (a[i] === "") {
//       a.splice(i, 1);
//     }
//   }
//   return a.join(" ");
// }

// var song = "AWUBBWUBC";
// var result;

/*----------------------- Mumbling -----------------------*/
// function accum(s) {
//   var theArray = [];
//   var tempString = "";
//   for (let i = 0; i < s.length; i++) {
//     //Untuk loop ke semua letter.

//     for (let j = 0; j <= i; j++) {
//       //Untuk loop letter sebanyak index dia.
//       tempString = tempString + s[i];
//     }
//     tempString = tempString.toLowerCase();
//     firstLowerCase = tempString.charAt(0).toUpperCase();
//     noFirstLetter = tempString.slice(1);
//     theArray.push(firstLowerCase + noFirstLetter);
//     tempString = "";
//   }
//   return theArray.join("-");
// }
// // BEST SOLUTION
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

/*----------------------- Array.diff -----------------------*/
// BEST SOLUTION
// function array_diff(a, b) {
// return a.filter(e => !b.includes(e));
// }
// MY SOLUTION
// function arrayDiff(a, b) {
//   for (let i = 0; i < b.length; i++) {
//   for (let j = 0; j < a.length; j++) {
//     while (a[j] == b[i]) {
//       a.splice(j, 1);
//     }
//   }
// }
// return a;
// }

/*----------------------- Isograms -----------------------*/
// BEST SOLUTION
// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }
// MY SOLUTION
// function isIsogram(str) {
//   var counter = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] == str[j]) {
//         counter++;
//       }
//     }
//   }
//   return counter == str.length;
// }
// console.log(isIsogram("isogram"));

/*----------------------- Vowel Count -----------------------*/
// BEST PRACTICE
// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//  }
// MY SOLUTION
// function getCount(str) {
//   str = str.toLowerCase();
//   var vowelsCount = 0;
//   var vowels = "aeiuo";
//   for (let i = 0; i < vowels.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[j] == vowels[i]) {
//         vowelsCount++;
//       }
//     }
//   }
//   return vowelsCount;
// }
// console.log(getCount("abracadabra"));

/*----------------------- Jaden Casing Strings -----------------------*/
// MY SOLUTION
// String.prototype.toJadenCase = function () {
//   var str = this.split(" ");
//   const capitalizeWord = [];
//   console.log(str);
//   for (letter of str) {
//     let onlyFirst = letter[0];
//     let upperCase = onlyFirst.toUpperCase();
//     let withoutFirst = letter.slice(1, letter.length);
//     let finalWord = upperCase + withoutFirst;
//     capitalizeWord.push(finalWord);
//     //
//   }
//   return capitalizeWord.join(" ");
// };
// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());
// BEST SOLUTION
// String.prototype.toJadenCase = function () {
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }

/*----------------------- Categorize New Member -----------------------*/
// MY SOLUTION
// function openOrSenior(data) {
//   var newArray = [];
//   for (array of data) {
//     array[0] >= 55 && array[1] > 7
//       ? newArray.push("Senior")
//       : newArray.push("Open");
//   }
//   return newArray;
// }
// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ])
// );
// BEST SOLUTION
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

/*----------------------- Simple Pig Latin -----------------------*/
// MY SOLUTION
// function pigIt(str) {
//   str = str.split(" ");
//   var newStr = [];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === "!" || str[i] === "?") {
//       newStr.push(str[i]);
//     } else {
//       let firstElem = str[i][0] + "ay";
//       let restElem = str[i].slice(1);
//       let finalString = restElem + firstElem;
//       newStr.push(finalString);
//     }
//   }
//   str = newStr.join(" ");
//   return str;
// }
// console.log(pigIt("This is my string"));
// BEST SOLUTION
// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }

/*----------------------- DECIMAL TO HEX -----------------------*/
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// let decimal = 173;
// var result;
// let divide;
// let hexaNumber;
// var hexadecimal = [];
// if (decimal < 0) {
//   decimal = 0;
// }
// if (decimal > 255) {
//   decimal = 255;
// }
// while (decimal >= 0) {
//   hexaNumber = decimal % 16;
//   divide = decimal / 16 - 1;
//   decimal = divide.toFixed(0);
//   if (hexaNumber > 0) {
//     switch (hexaNumber) {
//       case 10:
//         hexaNumber = "A";
//         break;
//       case 11:
//         hexaNumber = "B";
//         break;
//       case 12:
//         hexaNumber = "C";
//         break;
//       case 13:
//         hexaNumber = "D";
//         break;
//       case 14:
//         hexaNumber = "E";
//         break;
//       case 15:
//         hexaNumber = "F";
//         break;
//       default:
//         hexaNumber = Number("0" + hexaNumber);
//         break;
//     }
//     hexadecimal.unshift(hexaNumber);
//     result = hexadecimal.join("");
//   }
// }
// console.log(result);

// function rgb(r, g, b) {
//   var rgb = [r, g, b];
//   var result;
//   var divide;
//   var hexaNumber;
//   var hexadecimal = [];
//   for (decimal of rgb) {
//     // console.log(decimal);
//     if (decimal < 0) {
//       decimal = 0;
//     }
//     if (decimal > 255) {
//       decimal = 255;
//     }
//     while (decimal >= 0) {
//       hexaNumber = decimal % 16;
//       divide = decimal / 16 - 1;
//       decimal = divide.toFixed(0);
//       if (hexaNumber > 0) {
//         switch (hexaNumber) {
//           case 10:
//             hexaNumber = "A";
//             break;
//           case 11:
//             hexaNumber = "B";
//             break;
//           case 12:
//             hexaNumber = "C";
//             break;
//           case 13:
//             hexaNumber = "D";
//             break;
//           case 14:
//             hexaNumber = "E";
//             break;
//           case 15:
//             hexaNumber = "F";
//             break;
//           default:
//             hexaNumber = hexaNumber;
//             break;
//         }
//         hexadecimal.unshift(hexaNumber);
//       }
//     }
//   }
//   var newestArray = [];
//   newestArray[0] = hexadecimal[2];
//   newestArray[1] = hexadecimal[1];
//   newestArray[2] = hexadecimal[0];
//   result = newestArray.join("");
//   return result;
// }

// console.log(rgb(173, 255, 47));

/*----------------------- Break camelCase -----------------------*/
let myStr = "camelCasingTest";
let newStr = myStr.split("");
// // newStr.splice(1, 0, " ");
// // console.log(newStr.join(""));

// // let myChar = "A";
// // const isUpperCase = (string) => /^[A-Z]*$/.test(string);
// // console.log(isUpperCase(myChar));

// for (let i = 0; i < newStr.length; i++) {
//   const isUpperCase = (string) => /^[A-Z]*$/.test(string);
//   if (isUpperCase(newStr[i]) == true) {
//     newStr.splice(i - 1, 0, " ");
//   }
// }
// let result = newStr.join("");
// console.log(result);

/*----------------------- Delete occurrences of an element if it occurs more than n times -----------------------*/
// MY SOLUTION
// function deleteNth(arr,n){
//   let newArr = [];
//   const arrayObj = {};
//   for (array of arr) {
//     arrayObj[array] = 0;
//   }
//   for (array of arr) {
//     if (arrayObj[array] < n) {
//       newArr.push(array);
//       arrayObj[array] += 1;
//     }
//   }
//   return newArr;
//   }
// BEST SOLUTION
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }

/*----------------------- If you can read this... -----------------------*/
// MY SOLUTION
// function to_nato(words) {
//   const myObj = {
//     A: "Alfa",
//     B: "Bravo",
//     C: "Charlie",
//     D: "Delta",
//     E: "Echo",
//     F: "Foxtrot",
//     G: "Golf",
//     H: "Hotel",
//     I: "India",
//     J: "Juliett",
//     K: "Kilo",
//     L: "Lima",
//     M: "Mike",
//     N: "November",
//     O: "Oscar",
//     P: "Papa",
//     Q: "Quebec",
//     R: "Romeo",
//     S: "Sierra",
//     T: "Tango",
//     U: "Uniform",
//     V: "Victor",
//     W: "Whiskey",
//     X: "Xray",
//     Y: "Yankee",
//     Z: "Zulu",
//   };
//   let myArray = [];
//   let newString;
//   console.log();
//   newString = words.replace(/\s/g, "").toUpperCase();

//   for (letter of newString) {
//     myObj.hasOwnProperty(letter)
//       ? myArray.push(myObj[letter])
//       : myArray.push(letter);
//   }

//   return myArray.join(" ");
// }
// BEST SOLUTION
// let table = {
//   'A': 'Alfa',
//   'B': 'Bravo',
//   'C': 'Charlie',
//   'D': 'Delta',
//   'E': 'Echo',
//   'F': 'Foxtrot',
//   'G': 'Golf',
//   'H': 'Hotel',
//   'I': 'India',
//   'J': 'Juliett',
//   'K': 'Kilo',
//   'L': 'Lima',
//   'M': 'Mike',
//   'N': 'November',
//   'O': 'Oscar',
//   'P': 'Papa',
//   'Q': 'Quebec',
//   'R': 'Romeo',
//   'S': 'Sierra',
//   'T': 'Tango',
//   'U': 'Uniform',
//   'V': 'Victor',
//   'W': 'Whiskey',
//   'X': 'Xray',
//   'Y': 'Yankee',
//   'Z': 'Zulu',
// }

// function to_nato(words) {
//   return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
// }

let string = "01001";
let arr = string.split("");
let newArr = [];

const zeroNumb = arr.filter((array) => array == 0).length;
const oneNumb = arr.filter((array) => array == 1).length;
// console.log();

if (
  zeroNumb === oneNumb - 1 ||
  oneNumb === zeroNumb - 1 ||
  oneNumb === zeroNumb
) {
  if (zeroNumb > oneNumb) {
    for (let i = 0; i < string.length; i++) {
      i % 2 == 0 ? newArr.push(0) : newArr.push(1);
    }
  } else if (oneNumb > zeroNumb) {
    for (let i = 0; i < string.length; i++) {
      i % 2 == 0 ? newArr.push(1) : newArr.push(0);
    }
  }
}
console.log(newArr);
