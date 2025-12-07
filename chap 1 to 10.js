// =====================Practice of js==================
// =======================chapter no 7========================
// =========.Math Expressions: eliminating ambiguity==========

// Example No 1 (One)

// var a = 10;
// var b = 11;
// var x = 100;
// var y = 110;
//            11  +  12  +  100 +  11  +  110 + 102  +  12  + 13   +  14  +  14
// var result = (++a + ++b) + (x++ + a++) + (y++ + ++x) + (a++ + ++b) + (++a + ++b)
// console.log("Result===>",result); //Q1) What is Answer of this statement?
//                                  a)299       b)399
//                                  c)199       d)none of this

// Example No 2 (Two)

// var firstName = "Muhammed,";
// var middleName = "Hamid,";
// var lastName = "Ahmed,";

//                   "Muhammed" +    "Hamid"  +  "Ahmed"
// var outPut = ("Hi, " + ((middleName + lastName) + firstName));
// console.log("Result===>" + outPut);//OR
// alert("Result===>" + outPut);
// Q2)who is the correct answer?
//  a)Hi, Muhammed Hamid, Hamid, Ahmed,
//  b)Hi, Hamid, Muhammed, Ahmed,
//  c)Hi, Ahmed, Muhammed, Hamid,
//  d)None of This.



// =====================Practice of js==================
// ===================chapter no 10 & 11====================
// ==========================.If statement======================

// Examples of Triple Equal sign.
// Example No 1(One)

// var firstValue = 10;
// var secondValue = 10;

// if (firstValue === secondValue) {//this called scope
//     console.log("Well done");
// } example of matching two variables

// Example No 2(Two)

// var yourName = "Muhammed";

// if (yourName === "Muhammed") {
//     console.log("Matched");
// } example of matching one variable into one string

// Example no 3(three)

// if (10 === 10) {
//     console.log("Matched");
// }

// "The triple equal sign (===) executes the scope only after
//  the data type and the value of both operands match."

// "and double equal sign (==) only runs the scope if the
// values match. 

// Examples of double equal sign
// Example no 1(One)

// var myName = "Muhammed";
// var yourName = "Muhammed";

// if (myName == yourName) {
//     alert("Hi, "+ myName);
// }

// Example no 2 (Two)

// var a = 10;
// var b = "10";

// if (a == b) {
//     alert("yes matched");
// }

