/*------------------var Declaration------------------*/
// Mendeklarasikan variabel secara global

/*var x = 1;

console.log(`This is first declaration of x=` + x);
if (x === 1) {
  var x = 2;
  console.log(`This is second declaration inside  function-scoped= ` + x);
}
console.log(`This x is outside of function-scoped. x= ` + x);*/

// var diproses terlebih dahulu sebelum semua kode di dalam file. Ini disebut Hoisting
// var tidak akan error jika terjadi duplikasi nama variable.
// var nilainya bisa diganti

// `use strict`;
// function foo() {
//   var x = 1;
//   var y = 2;
//   function bar() {
//     var y = 2;
//     console.log(x);
//     console.log(y);
//   }
//   bar();
//   console.log(x);
//   console.log(y);
// }
// foo();

// Strict adala expression untuk menjalankan program javascript dalam mode strict. Dimana salah satu
// akibatnya adalah tidak bisanya sebuah variable tidak dideklarasikan terlebih dahulu.
// "use strict";
// var x = 1;
// y = 2;
// console.log(globalThis.hasOwnProperty(`x`));
// delete globalThis.x;
// delete x;
// console.log(y);

// Hoisting. Semua deklarasi akan dieksekusi terlebih dahulu sebelum program lainnya.
// Ini berakibat, dimanapun varible dideklarasi maka tetap variable deklarasi tersebut akan berjalan
// terlebih dahulu.
// bla = 2;
// var cla = 2;
// // Urutannya sama seperti ini
// var bla = 2;
// bla = 2;

// Tapi hoisting ini hanya berpengaruh pada deklarasi variable. Tidak pada nilai value pada variable.
// Ini akan undefined.
// console.log(bla);
// var bla;
// // Ini tidak undefined.
// bla = 111;
// console.log(bla);
// var bla;

// Krn x dideklarasikan dan diberi nilai y, dimana y bernilai undefined. Maka x+y
// adalah UndefinedA
// var x = y,
//   y = "A";
// console.log(x + y);

/*------------------let Declaration------------------*/
// Deklarasi yang tidak bisa digunakan secara global. Hanya lokal saja

// var x = "global";
// let y = "global";
// console.log(this.x); // "global"
// console.log(this.y); // undefined

// let itu nggak bisa dideklarasikan ulang. Jadi let itu unik dalam satu scope atau lokal
// let foo = 1; //No error. Because this is declared first.
// let foo = 2; //Syntax error thrown

// Di switch juga akan error kalau dideklarasi 2 kali.
// let x = 1;
// switch (x) {
//   case 0:
//     let x = 1;
//     break;
//   case 1:
//     let x = 2;
//     break;
//   case 2:
//     let x = 3;
//     break;
// }
// Bisa teratasi kalau pendeklarasiannya di masing2 scope case.
// let x = 1;
// switch (x) {
//   case 0: {
//     let x = 1;
//     break;
//   }
//   case 1: {
//     let x = 2;
//     break;
//   }
//   case 2: {
//     let x = 3;
//     break;
//   }
// }

// function test() {
//   var foo = 33;
//   if (foo) {
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// Kalau variable sudah dideklarasikan terlebih dahulu oleh let, var gak bisa menggantinya.
// let x = 11;
// var x = 2;

/*------------------const Declaration------------------*/
// const ini seperti let, juga global atau lokal-scoped. Tapi nilainya tidak bisa diubah2.
// const tidak abadi, hanya saja nilainya yang tidak bisa digantikan.
// const tidak boleh memiliki nama  yang sama pada fungsi maupun variable pada scope yang sama.
// const number = 99;
// try {
//   number = 10;
// } catch (err) {
//   console.log(err); //TypeError: Assignment to constant variable.
// }
// console.log(number); //Expected 99

//const biasanya nama variablenya UPPERCASE
// const harus langsung diisikan value. Kalau nggak akan nimbulkan syntaxError
// const FAV_NUMBER;
// const FAV_NUMBER = 13;
// if (FAV_NUMBER === 13) {
//   let FAV_NUMBER = 14;
//   console.log(`In this scope my fav number has changed to ` + FAV_NUMBER);
//   var FAV_NUMBER = 15; //akan sytaxError krn sebelumnya sudahd dideklarasikan
// }

// const dapat bekerja pada object dan array lhoo
//Ini deklarasi const pada object.
// const MY_OBJECT = { name: "Nayaka", height: "165 cm" };
// console.log(MY_OBJECT.name);
// MY_OBJECT.name = `Warda`; // Ini ngeganti value name pada objek. Krn objeknya nggak terproteksi jadi msh bisa
// console.log(MY_OBJECT.name);
// // Indi deklarasi const pada array.
// const MY_ARRAY = [];
// MY_ARRAY.push(`Hey!`); //const array bisa dipush
// MY_ARRAY.push(`Hey!`); //const array bisa dipush
// console.log(MY_ARRAY);
// MY_ARRAY = [`B`]; //tapi gak bisa diisikan/diganti value sebelumnya.
