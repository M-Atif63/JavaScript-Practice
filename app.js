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
