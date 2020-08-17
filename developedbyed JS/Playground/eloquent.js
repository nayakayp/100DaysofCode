// The Fortune Teller
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
// const tellFortune = (numbChild, ptName, geoLoc, jobTitle) => {
//   console.log(
//     `You will be ${jobTitle} in ${geoLoc}, and married to ${ptName} with ${numbChild} kids`
//   );
// };
// tellFortune(100, `Mariana`, `Malang`, `Fronte End Dev`);

// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// const calculateDogAge = (age) => `Your doggie is ${age * 7} in dog years`;
// console.log(calculateDogAge(2));

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// const calculateSupply = (age, amtDay) => {
//   let maxAge = 100;
//   totalNeeded = (maxAge - age) * (amtDay * 365);
//   console.log(
//     `You wil need ${totalNeeded} to last you until the rip old age of ${maxAge}`
//   );
// };
// calculateSupply(23, 2);

// The Geometrizer
// const calcCircumtance = (radius) =>
//   `The circumtance of a circle is ${((2 * 22) / 7) * radius}`;
// const calcArea = (radius) =>
//   `The area of a circle is ${(22 / 7) * radius * radius}`;
// console.log(calcCircumtance(7), +calcArea(7));

// The Temperature Converter
// const celciusToFahrenheit = (temp) => (temp / 5) * 9 + 32;
// const fahrenheitToCelcius = (temp) => ((temp - 32) * 5) / 9;
// console.log(celciusToFahrenheit(100));
// console.log(fahrenheitToCelcius(132));

// function createPhoneNumber(numbers) {
//   let firstNumber = "";
//   let secondNumber = "";
//   let thirdNumber = "";
//   for (let numb = 0; numb < numbers.length; numb++) {
//     if (numb < 3) {
//       firstNumber = firstNumber + numbers[numb];
//     } else if (numb >= 3 && numb < 6) {
//       secondNumber = secondNumber + numbers[numb];
//     } else {
//       thirdNumber = thirdNumber + numbers[numb];
//     }
//     phoneNumber = `(${firstNumber}) ${secondNumber}-${thirdNumber}`;
//   }
//   console.log(phoneNumber);
// }

// MAKE PHONE NUMBER
// function createPhoneNumber(numbers) {
//   numbers = numbers.join("");
//   return (
//     `(` +
//     numbers.substring(0, 3) +
//     `) ` +
//     numbers.substring(3, 6) +
//     `-` +
//     numbers.substring(6, 10)
//   );
// }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// function likes(names) {
//   if (names.length < 0) {
//     console.log(`no one like this`);
//   } else if (names.length == 1) {
//     console.log(`${names[0]} like this`);
//   } else if (names.length == 2) {
//     console.log(`${names[0]} and ${names[1]} like this`);
//   } else if (names.length == 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//   } else
//     console.log(
//       `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     );
// }
// likes([`Nayaka`, `Jacob`, `Andrew`, `Stew`, `Squidwards`]);

// function likes(names) {
//   const amtLikes = names.length;
//   switch (amtLikes) {
//     case 0:
//       return `no one like this`;
//       break;
//     case 1:
//       return `${names[0]} like this`;
//       break;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//       break;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//       break;
//   }
// }

// CONVERT DECIMAL SUM TO BINARY
// function addBinary(a, b) {
//   sumNumber = a + b;
//   let binaryNumber = "";
//   while (sumNumber > 0) {
//     if (sumNumber % 2 == 0) {
//       binaryNumber = `0` + binaryNumber;
//     } else {
//       binaryNumber = `1` + binaryNumber;
//     }
//     sumNumber = Math.floor(sumNumber / 2);
//   }
//   return binaryNumber;
// }
// console.log(addBinary(2, 1));
// function addBinary(a, b) {
//   c = a + b;
//   return c.toString(2);
// }
// console.log(addBinary(2, 1));

// function validatePIN(pin) {
//   const digits_only = () => [...pin].every((c) => "0123456789".includes(c));
//   if (pin.length == 4 || pin.length == 6 || digits_only(pin) == true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validatePIN(`a1234`));

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   if (Number.isInteger(Math.sqrt(sq))) {
//     next_Number = Math.sqrt(sq) + 1;
//     square_Number = next_Number * next_Number;
//     return square_Number;
//   } else {
//     return -1;
//   }
// }

// // Ini pakai Logical Operator jenis Ternary
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// // Grasshopper if/else review
// // In the game you are creating, the role of the main function is to check the input and return a call to the appropriate function.

// // The preloaded function available are forward() and backward().

// // Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!

// // The possible inputs and the required actions are:

// // "forward": call the forward() function, and return its result
// // "backward": call the backward() function, and return its result
// // anything else: return "Not a valid input."
// function main(input) {
//   switch (input) {
//     case `forward`:
//     forward()
//       return `fw`;
//       break;
//     case `backward`:
//     backward()
//       return `bw`;

//       break;
//     default:
//       return `Not a valid input.`;
//       break;
//   }
// }
// function main (input) {
//   if (input == "forward") return forward();
//   if (input == "backward") return backward();
//   return "Not a valid input.";
// }

// const list = [
//   { name: "Bart" },
//   { name: "Lisa" },
//   { name: "Maggie" },
//   { name: "Brodin" },
// ];

// let result = list.map((a) => a.name);
// const amtNames = result.length;

// switch (amtNames) {
//   case 1:
//     console.log(`${result[0]}`);
//     break;
//   case 2:
//     console.log(`${result[0]} & ${result[1]}`);
//     break;
//   default:
//     console.log(
//       `${result.slice(0, result.length - 2)}, ${result[result.length - 2]} & ${
//         result[result.length - 1]
//       }`
//     );
//     break;
// }

function list(names) {
  let result = names.map((a) => a.name);
  const amtNames = result.length;
  switch (amtNames) {
    case 1:
      console.log(`${result[0]}`);
      break;
    case 2:
      console.log(`${result[0]} & ${result[1]}`);
      break;
    default:
      
      console.log(
        `${result.slice(0, result.length - 2)}, ${
          result[result.length - 2]
        } & ${result[result.length - 1]}`
      );
      console.log(result.split());
      break;
  }
}

list([
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Homer" },
  { name: "Marge" },
]);
