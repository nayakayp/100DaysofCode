// Compound Assignment Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment
// ** Left shiftAssignment x<<=y or x=x<<y
// Menggeser nilai bit di x ke kiri sebanyak y kali
// let x = 5;
// let y = 2;
// console.log((x <<= y));
// Hasilnya 20. Cara ngerjakannya ubah x ke bilangan biner trus
// geser ke kiri sebanyak y (di sini 2.)
// 0101 -> 0001 0100
// ** Right shiftAssignment x>>=y or x=x>>y
// Menggeser nilai bit di x ke kanan sebanyak y kali
// let x = -5;
// let y = 2;
// console.log((x >>= y));
// Hasilnya 5. 0001 0100 -> 0101
// **Unsigned rightShiftAssignment x >>>=y or x=x>>>y
// Menggeser nilai bit x ke kanan sebanyak yg diinginkan
// kemudian memasukkannya kembali ke x.
// let x = -5;
// console.log((x >>>= 2)); //(-00000000000000000000000000000101) -> (00111111111111111111111111111110)
// **Bitwise AND assignment x&=y or x=x&y;
// Inget2 pelajaran Elka Digital.
// let x = 5; // 0101
// let y = 3; // 0011
// console.log((x &= y)); // 0001
// **Bitwise XOR assignment x^=y
// False XOR False =False. True XOR True= False. Sisanya True
// let a = 5; // 0101
// a ^= 3; // 0011
// console.log(a); // 0110
// **Bitwise OR assignment x|=y or x=x|y
// Salah satu atau keduanya True maka hasilnya True
// let a = 5;      // 0101
// a |= 3;         // 0011
// console.log(a); // 0111

/**Short-circuit evaluation */
// Ada && (logika AND), || (logika OR) dan ??(logika baru. namanya nullish coalescing operator)
// ##|| return left handed operand jika nilainya true. Kalau yg && kebalikannya
// var a5 = "Cat" || "Dog"; //Akan return Cat
// var a6 = "Cat" && "Dog"; //Akan return Dog
// ##?? bekerja seperti logka OR returns the bagian kanan jika hanya jika yg kiri null atau undefined
// 0 tidak termasuk.
// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;
// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;
// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

/**Unary Operator */
// Ada delete, typeof dan void
// ##Delete ini tugasnya menghapus objek, properti dari objek atau spesifik index dari array
// Contoh persyaratan bisa/tidaknya delete
// x = 42;
// var y = 43;
// myobj = new Number();
// myobj.h = 4;    // create property h
// delete x;       // returns true (can delete if declared implicitly)
// delete y;       // returns false (cannot delete if declared with var)
// delete Math.PI; // returns false (cannot delete predefined properties)
// delete myobj.h; // returns true (can delete user-defined properties)
// delete myobj;   // returns true (can delete if declared implicitly)
// delete pada array tidak menghilangkan panjang arraynya. Hanya menghilangkan element
// di dalam array yg dihapus. Kemudian element array-nya menjadi undefined.
// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(trees);
// console.log(trees.length);
// ##typeof
// ini mengetahui jenis expression.
// Apakah itu string, number, boolean, object, function, undefined
// ##void
// void operator specifies an expression to be evaluated without returning a value.
// expression is a JavaScript expression to evaluate
/* <a href="javascript:void(0)">Click here to do nothing</a> */

/**Relational Operator*/
// ##in
// Ngecek apakah property di dalam objek itu ada. Return true kl ada.
// 'PI' in Math;          // returns true
// var myString = new String('coral');
// 'length' in myString;  // returns true
