/**Ada 6 sub bahasan:
Defining functions
Calling functions
Function scope
Closures
Arguments & parameters
Arrow functions */

// 1. Defining functions
// pendeklarasian function terdiri dari "keyword function nama_function (param,...,) {scope}""
// primitive value seperti number gak akan visible ke luar function. Yang visible hanya
// non-primitive value seperti array atau objek yang dideklarasikan.
// Contoh yg visible ke luar function.
// function myFunc(theObject) {
//     theObject.make = 'Toyota';
//   }
//   var mycar = {make: 'Honda', model: 'Accord', year: 1998};
//   var x, y;
//   x = mycar.make; // x gets the value "Honda"
//   myFunc(mycar);
//   y = mycar.make; // y gets the value "Toyota"
//                   // (the make property was changed by the function)
// Usahakan memberikan nama yang merepresentasikan kegunaan dari function itu.

// 2. Calling functions
// Fungsi yang telah didefinisi sebelumnya tidak serta merta langsung beroperasi.
// Harus dipanggil terlebih dahulu.
// Function bisa hoisted (ada di bawah urutan pemanggilan function)
// function hoisting cuma bisa ketika menggunakan function declaration bukan function expression.
// Kyk gini maksudnya function expression yang gak bisa
// const square = function(n) {
//     return n * n;
//   }
// Function bisa memanggil dirinya sendiri (recursion/recursive). Contohnya adalah cari faktorial
// function factorial(n) {
//   if ((n === 0) || (n === 1))
//   return 1;
// else
//   return (n * factorial(n - 1));
// }

/**3. Function Scope
 * Semua variable di dalam scope fungsi hanya bisa diakses di area itu saja.
 * Namun jika fungsi A ada di dalam fungsi B, maka variabel fungsi B bisa diakses pada fungsi A.
 *  function getScored() {
  var num1 = 2,
    num2 = 3,
    name = "Nayaka";

  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(getScored());
 */

/**4 Scope and the function stack
 * 4.1 Recursion
 * Function yang mereferkan dirinya sendiri atau mengakses dirinya sendiri. contohnya
 * function add(number) {
 * return number <= 0 ? 0 : number + add(number - 1);
 * }
 * console.log(add(10));
 * function exponent(base, power) {
 *  return power <= 0 ? 1 : base * exponent(base, power - 1);
 * }
 * 4.2 Nested functions and closures
 * Nested function berbeda dengan recursive function.
 * nested itu fungsi di dalam fungsi. Namun fungsi di dalam dan di luar berbeda nama.
 *
 * 4.3 Multiply-nested functions (scope chaining)
 * di dalam scope sebuah function ada function lagi. Dan di dalam scopenya ada lagi.
 * function A(x) {
 * function B(y) {
 *   function C(z) {
 *     console.log(x + y + z);
 *   }
 *   C(2);
 * }
 * B(3);
 * }
 * A(3);
 *
 * 4.4 Name conflicts
 * Jika ada variabel yang memiliki nama sama di dalam scope-chain maka
 * variabel di scope yang paling dalam paling diutamakan
 */

/**5. Closure
 * Merupakan fitur dari JavaScript
 * Memberi batasan pengaksesas yang ada di luar closure
 *
 */

/** 6. Arguments & Parameters
 * 6.1 ( Arguments are deprecated. no recommended to use in some browser)
 * 6.2 Parameters
 * Parameters pada function defaultnya adalah undefined
 * Function yang dibuat bisa mengantisipasi jika ada lebih
 * parameter yang diinginkan.
 * 6.2.1 Rest parameters
 * Rest parameter ini menjadikan selain parameter yang diberikan
 * menjadi sebuah array.
 *  tanda dari rest parameter adalah ...manyArguments
 */

/**Arrow functions
 *
 */
