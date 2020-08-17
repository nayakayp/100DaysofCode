// const text = `banana`;
// let fruitNr = 0;
// switch (text) {
//   case `banana`:
//     console.log(`Wow i love bananas too`);
//     fruitNr = 1;
//     break;
//   case `apple`:
//     console.log(`I don't like apples you crazy`);
//     fruitNr = 2;
//     break;
//   case `avocade`:
//     console.log(`What fruit is dis?`);
//     fruitNr = 3;
//     break;
// }

let userInput = prompt(`Tell me a fruit?`).toLowerCase();
switch (userInput) {
  case `kiwi`:
    console.log(`Kiwi is the first food invented by the ocean boys`);
    break;
  case `banana`:
    console.log(`I dont have a girlfriend`);
    break;
  case `apple`:
    console.log(`Depending blalalala`);
    break;
  default:
    console.log(`That fuit is unknown to me`);
    break;
}
