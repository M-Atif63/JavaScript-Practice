// ==================Practice of js==============
// ==================chapter no 11==================
// ===============Comparision operators===============

// Example no 1(one)

// Q1) How many type of comparision operators?
// Ans) There Seven(7) Types of operators.
// 1) Triple Equal Operator(===).
// 2) Double Equal Operator(==).
// 3) Not Equal Operator(!==).
// 4) Less Then or Equal to Operator(<=).
// 5) Greater Then or equal to Operator(>=).
// 6) Only Less Then Operator(<).
// 7) Only Greater Then OPerator(>).

// Not Equal Operator Example

// var input = "atif";
// var output = "muhammed";

// if (input !== output) {
//     console.log("matched");
// }

// Less Then Or Equal to Operator Example.

// var a = 100;
// var b = 100 OR 99;

// if (a <= b) {
//     console.log("eligible");
// }

// Greater Then Or Equal to Operator Example.

// var firstValue = 120;
// var secondValue = 120; // OR 130

// if (firstValue >= secondValue) {
//     console.log("firstValue is matched into secondValue")
// }

// Less Then Operator Example.

// var a = 10;

// if (9 < a) {
//     alert("Matched");
// }

// Greater Then Operator Example.

// var x = 10;

// if (x > 9) {
//     alert("Matched");
// }









// var number = ["1)","2)","3)","4)","5)","6)","7)","8)","9)"]
// var students = ["muhammed","atif","ali","ahmed","ghous","asad","hasan","hussain","ahmed"]
// // console.log(number[0] + students[0])
// // console.log(number[1] + students[1])
// // console.log(number[2] + students[2])
// // console.log(number[3] + students[3])
// // console.log(number[4] + students[4])

// for (var i = 0; i < students.length; i++) {
//     console.log(number[i] + students[i])
// }




// var hi = ["Hi, "]
// var students = ["muhammed","atif","ali","ahmed","ghous","asad","hasan","hussain","ahmed"]

// for (var i = 0; i = students.length; i++) {
//     console.log(hi + students[i]);
// }


// var input = prompt("Enter your value");

// var firstChar = input.slice(0,1);
// var firstValue = firstChar.toUpperCase();

// var secondChar = input.slice(1);
// var secondValues = secondChar.toLowerCase();

// var result = firstValue + secondValues;
// console.log(result);



// var arr = ["muhammed","ahmed","atif","ali","faiq","rafiq","qasim"];
// var firstChar = arr[0].toUpperCase();
// console.log(firstChar);


// =======practie of======== 
// ========chap no 12==========
// ========if statement and else if statement===========

// var output = prompt("Enter your detail?");
// var userFirstName = "muhammed";
// userFirstName = userFirstName.slice(0.1);
// var userFirstNameFirstLatter = userFirstName.toUpperCase;
// userFirstName = userFirstName.slice(1);
// var userFirstNameSecondLatter = userFirstName.toLowerCase;
// var newUserName = userFirstNameFirstLatter + userFirstNameSecondLatter;
// var userSecondName = "Ahmed";
// var userPresent = "you're present"
// var userDelay = 15;
// var rollNum = 2520;
// var output = prompt("Enter your details");

// if (newUserName === "Muhammed") {
//         console.log("yes you are present")

// }


// ======Example of Nested Array========

// var yourName = prompt("Enter your name");
// var yourIdNumber;
// var yourRollNumber;

// if (yourName === "muhammed") {
//     yourIdNumber = prompt("Enter Your Id number")
//     // console.log("Plesae, fill the correct id number");
//     if (yourIdNumber === "786") {
//         yourRollNumber = prompt("Enter your Roll number")
//         console.log("Please, Enter Your Correct Roll Number")
//         if (yourRollNumber === "1515") {
//             console.log("You, are Enrolled");
//         }
//     }
//        else{
//         console.log("Plesae, fill the correct id number");
//         }
// }
// else {
//     console.log("You, Are No Enrolled");
// }


// var fName = prompt("What Is Your First Name");
// var fLatter = fName.slice(0,1)
// fLatter = fLatter.toUpperCase();
// var nLatter = fName.slice(1);
// nLatter = nLatter.toLowerCase();
// var firstName = fLatter + nLatter;
// // console.log("firsttName==>",firstName);

// var lName = prompt("What Is Your Last Name");
// var fLatt = lName.slice(0,1);
// fLatt = fLatt.toUpperCase();
// var nLatt = lName.slice(1);
// nLatt = nLatt.toLowerCase();
// var lastName = fLatt + nLatt;
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// if (firstName == "muhammed" && lastName == "atif") {
//     console.log("mil gaya")
// }

// var fName = ["Muhammed","Muhammed","Muhammed","Muhammed","Muhammed","Muhammed","Muhammed","Muhammed","Muhammed","Muhammed"];
// var studentsName = ["atif","ghous","zain","ahmed","ali","bakr","zaid","umer","khalid","saad"];
// var serialNo = [1,2,3,4,5,6,7,8,9,10];

// for (var i = 0; i <= studentsName.length; i++) {
//     console.log(serialNo[i] +  ") "  + fName[i] + " " +studentsName[i]);
// }

// var tNum = [1,2,3,4,5,6,7,8,9,10];
// var rNum = [2,4,6,8,10,12,14,16,18,20];

// for (var i = 0; i = tNum.length; i++) {
//     console.log("2" + " x " + tNum[i] + " = " + rNum[i]);
// }


// var table = prompt();

// for (var i = 1; i <= 10; i++) {
//     console.log(table + " x " + i + " = " + table*i);
// }




// var tNum = 5;

// for (var i = 1; i <= 10; i++) {
//     console.log(tNum + " x " + i + " = " + tNum*i);
// }







































