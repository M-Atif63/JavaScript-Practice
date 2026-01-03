// console.log("hello, world");

// ======> Random Numbers <========

// var randomNum = Math.random();
// console.log(randomNum);

// var randomNumFirst = Math.random();
// var randomNumSec = Math.random();
// var subtractRandomNumbers = randomNumFirst + randomNumSec;
// console.log(subtractRandomNumbers);


// var randomNumFirst = Math.random();
// var randomNumSec = Math.random();
// var subtractRandomNumbers = randomNumFirst * randomNumSec;
// console.log(subtractRandomNumbers);

// var randomNum = Math.random();
// var addedOneInRandom = randomNum + 1;
// console.log(addedOneInRandom);

// var randomNum = Math.random();
// var addedOneInRandom = randomNum - 1;
// console.log(addedOneInRandom);

// =======> converting strings to integers and decimal <=======

// +prompt.() plus sign is used for converting string to integers;

// Number(userAge) Numbers method is used for converting strings to integers;

// parseInt(userAge) parseInt method is used for converting strings to integers;

// var userAge = +prompt("Enter Your Age");
// var plusInAge = userAge + 1;
// console.log(plusInAge);

// var userAge = +prompt("Enter Your Age");
// var plusInAge = userAge - 1;
// console.log(plusInAge);

// var userAge = +prompt("Enter Your Age");
// var plusInAge = userAge / 1;
// console.log(plusInAge);

// var userAge = +prompt("Enter Your Age");
// var plusInAge = userAge * 2 + 1;
// console.log(plusInAge);

// var userAge = +prompt("Enter Your Age");
// var plusInAge = userAge * 1;
// console.log(plusInAge);


// var userAge = prompt("Enter Your Age");
// var plusInAge = Number(userAge) + 1;
// console.log(plusInAge);

// var userAge = prompt("Enter Your Age");
// var plusInAge = parseInt(userAge) + 1;
// console.log(plusInAge);

// parseFloat(); parseFloat method is used for converting string to integers and decimal;

// var myNum = "1.1999922222";
// var Num = parseFloat(myNum) + 1.1;
// console.log(Num);


// parseInt(); is used for converting string to integer only

// var parseIntNum = "2.12";
// var plusInParseInt = parseInt(parseIntNum) + 11.10001;
// console.log(plusInParseInt);

// parseFloat(); is used for converting strings to integer and decimal;

// var parseFloatNum = "2.65663";
// var addition = parseFloat(parseFloatNum) + 2.12345;
// console.log(addition);

// var parseFloatNum = "4.65663";
// var addition = parseFloat(parseFloatNum) / 10.12345;
// console.log(addition);

// var parseFloatNum = "11.65663";
// var addition = parseFloat(parseFloatNum) * 1.12345;
// console.log(addition);

// var parseFloatNum = "6.65663";
// var addition = parseFloat(parseFloatNum) - 5.12345;
// console.log(addition);


// =====> converting strings to numbers numbers to strings <======

// Number(); is used for converting string to numbers(work on all string);

// ===> before in numbers
// var strValue = 10;
// console.log(strValue);

// // ===> after in string
// var strValue = 10;
// var strToNum = strValue.toString();
// var concadinateOne = strValue + 1;
// console.log(concadinateOne);

// =====> Controlling the length of decimal; <======

// .toFixed(); is used for fixed the length of decimal

// var nonFixedDecimal = 1.562625;
// var fixedDecimal = nonFixedDecimal.toFixed(2);
// console.log(fixedDecimal);

// var str = 1.23454;
// str = str.toString();
// if (str.charAt(str.length - 1) === "4") {
//     str = str.slice(0 , str.length - 1) + "6"
//     console.log(str);
// }


// =====> Getting the current date and time <=====
// var currentDate = new Date();
// console.log(currentDate);

// var currentDate = new Date();
// var fullYear = currentDate.getFullYear();
// console.log(fullYear);

// var currentDate = new Date();
// var onlyDate = currentDate.getDate() + " Dec";
// console.log(onlyDate);

// var currentDay = new Date();
// var onlyDay = currentDay.getDay() + " Monday";
// console.log(onlyDay);

// var currentHours = new Date();
// var onlyHours = currentHours.getHours() + " Hours";
// console.log(onlyHours);

// var currentMinutes = new Date();
// var onlyMinute = currentMinutes.getMinutes() + " Min";
// console.log(onlyMinute);

// var currentSecond = new Date();
// var onlySecond = currentSecond.getSeconds() + " Sec";
// console.log(onlySecond);

// var currentMillisecond = new Date();
// var onlyMilliseconds = currentMillisecond.getMilliseconds() + " MilliSec";
// console.log(onlyMilliseconds);

// // var concadinated = onlyDay + " " + onlyDate + " " + fullYear + " " + onlyHours + " " + onlyMinute + " " + onlySecond + " " + onlyMilliseconds;
// console.log(concadinated);




//  =====> Specifing Date and time <=======

// var currDate = new Date();
// console.log(currDate);

// var doomsday = new Date("Oct 27 , 2030");
// console.log(doomsday);

// var changeFullYear = new Date("jan 1, 2026");
// console.log(changeFullYear);

// var changeDate = new Date("jun 6, 2025");
// var addedTime = changeDate.getTime();
// console.log(addedTime);


// ======> Math floor method and ceil methos;

// var bigDecimal = Math.random();
// console.log(bigDecimal);
// var numberOfStars = Math.ceil(bigDecimal)
// console.log(numberOfStars);

// var bigDecimal = Math.random();
// console.log(bigDecimal);
// var numberOfStars = Math.floo(bigDecimal)
// console.log(numberOfStars);

// Differnce between round , ceil and floor;
// ======> examples of round;
// var scoreAvg = Math.round(.000001);
// console.log(scoreAvg);

// var scoreAvg = Math.round(.540000);
// console.log(scoreAvg);

// ======> examples of ceil;
// var scoreAvg = Math.ceil(.0000001);
// console.log(scoreAvg);

// var scoreAvg = Math.ceil(.5400000);
// console.log(scoreAvg);

// =====> examples of floor;
// var scoreAvg = Math.floor(.000005);
// console.log(scoreAvg);

// var bigDecimal = Math.random();
// console.log(bigDecimal);
// var improvedNum = Math.floor(bigDecimal * 4) + 3;
// console.log(improvedNum);

// var firstInteger = Math.random();
// console.log(firstInteger);
// var firstDecimal = Math.floor(firstInteger * 2);
// console.log(firstDecimal);

// var firstInteger = Math.random();
// console.log(firstInteger);
// var firstDecimal = Math.floor(firstInteger * 5) + 2;
// console.log(firstDecimal);

// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars);

// var scoreAvg = Math.floor(.540000);
// console.log(scoreAvg);

// // Example of ceil in minus value;
// var decimalOfCeil = Math.ceil(-.0000001);
// console.log(decimalOfCeil);

// var decimalOfCeil = Math.ceil(-.54000000);
// console.log(decimalOfCeil);

// Example of floor in minus value;
// var decimalOfCeil = Math.floor(-.0000001);
// console.log(decimalOfCeil);

// var decimalOfCeil = Math.floor(-.54000000);
// console.log(decimalOfCeil);

// =====> Specifying Time;
// var SpecifedTime = new Date("jan 1, 2020 12:11:06");
// console.log(SpecifedTime);

// var specified = new Date("jan 12 , 2020 12:12:12");
// console.log(specified);

// minus 2035 to current years and div
// var specDate = new Date("june 30, 2035").getTime();
// var currDate = new Date().getTime();
// var dividedYears = specDate - currDate;
// var diviTotal = Math.floor(dividedYears / (1000 * 60 * 60 * 24));
// var addedfixed = parseInt(diviTotal.toFixed(0));
// console.log(addedfixed);

// var specifiedDate = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(specifiedDate / (1000 * 60 * 60 * 24));
// console.log(daysTillDoom);

// var myDate = new Date("oct 27, 2006").getTime() - new Date().getTime(); 
// var totalDays = Math.ceil(myDate / (1000  * 60 * 60 * 24));
// console.log(totalDays);

// var myDate = new Date("Oct 27, 2006").getTime();
// var currDate = new Date().getTime();
// var totalYears = myDate - currDate;
// // console.log(totalYears);
// var totalDays = Math.floor(totalYears / (1000 * 60 * 60 * 24));
// console.log(totalDays);

// ====> Changing elements of a date and time;
// var setDate = new Date();
// setDate.setHours(12);
// setDate.setMinutes(12);
// setDate.setSeconds(12);
// setDate.setFullYear(2006);
// setDate.setMonth(9);
// setDate.setDate(27);
// setDate.setMilliseconds(12);
// console.log(setDate);

// ES5 Function
// function (); this called Loose mode , Independent mode OR Stick mode; <==== This is ES5 Function;

// ====> ES6 Function;
// function myFunction (myValue"<===this is a Perimeter") {
// <==this is called Block scope ==>
// console.log(myVAlue <=="This is Invoke");
// } Before the invoke This is Blue Print function; <===== This is ES6 Function;
// myFunction("Muhammed");

// Console Example

// function myFunction (myFirstName, myLastName) {
//     console.log(myFirstName , myLastName);
// }
// myFunction("Muhammed","Atif Ali");
// myFunction("Ahmed","Atif",);

// function myFunction () {
//     var myYears = new Date("Oct 27, 2006").getTime();
//     var currYear = new Date().getTime();
//     var totalYears = myYears - currYear;
//     var myTotalYears = Math.ceil(totalYears / (1000*60*60*24));
//     console.log(myTotalYears);
// }
// myFunction();


// function myFunction () {
//     var totalYear = new Date("Oct 27, 2006").getTime() - new Date().getTime();
//     var myTotalYears = Math.ceil(totalYear / (1000 * 60 * 60 * 24));
//     console.log(myTotalYears);
// }
// myFunction();

// function myFunction () {
//     var myChoice = new Date();
//     myChoice.setFullYear(2006);
//     myChoice.setMonth(9);
//     myChoice.setDate(27);
//     myChoice.setHours(12);
//     myChoice.setMinutes(12);
//     myChoice.setSeconds(12);
//     var totalYears = myChoice.getTime() - new Date().getTime();
//     var myTotalYears = Math.ceil(totalYears / (1000*60*60*24));
//     console.log(myTotalYears);
// }
// myFunction();

// var orderTot;
// var merchTot = +prompt("Enter Your Value");
// if (merchTot >= 100) {
// orderTot = merchTot;
// }
// else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
// }
// else {
// orderTot = merchTot + 5 + (.03 * (merchTot - 50));
// }
// console.log(orderTot);

// function myFunction () {
//     var merchTotal = +prompt("Enter Your Value");
//     var orderTotal;
//     if (merchTotal >= 100) {
//         orderTotal = merchTotal;
//     }
//     else if (merchTotal > 50) {
//         orderTotal = merchTotal + 5;
//     }
//     else{
//         orderTotal = merchTotal + 5 + (.03 * (merchTotal - 50));
//     }
//     console.log(orderTotal);
// }
// myFunction();


// =====>Types Of Function <=====
// There are two types of function
// 1) Normal function
// 2) Arrow Function

// Normal Function Code
// function myFunction () {console.log("atif");}
// myFunction();

// Arrow Function Code
// var firstFunc ()=>{console.log("atif");}
// firstFunc();

// ====>Passing Theme Data <====
// function firstFunc (fName,lName) { // <== This is parameter
//     console.log(fName,lName);
// }
// firstFunc("Muhammed","Atif"); // <== This is Argument

// ==> Passing Data Back From Them <==
// function PassingDataBackFromTheme (myName) {
//     return myName;
// }
// console.log(PassingDataBackFromTheme("Muhammed Atif"))


// function PassingDataBackFromTheme (myName) {
//     return myName;
// }
// var myName = "Muhammed Atif"
// console.log(PassingDataBackFromTheme(myName))

// ==> Local And Global Variable Examples <== 
// ==> Global Variable
// var globalVariable = "This is a 'Global Variable' "
// console.log(globalVariable);


// ==> Local Variable
// function localVariableFunction () {
//     var localVariable = "This is a 'local Variable'"
//     console.log(localVariable);
// }
// localVariableFunction();

// Global Variable  
//1)Declared In main code 
//2)Known everyWhere, Useable everywhere

// Local Variable
//1)Decaled in a function
//2)Known only inside the function, useable only inside the function;

// ===> Switch Statement <===

// ===>This is a example of if & else if statement
// var dayOfWk = prompt("Enter day"); 
// var dayOfWkToLowerCAse = dayOfWk.toLowerCase();
// if (dayOfWk === "Sat" || dayOfWk === "Sun") {
//     alert("Whoopee!");
// }
// else if (dayOfWk === "Fri") {
//     alert("TGIF!");
// } else {
//     alert("Shoot me now!");
// }

// ===> This is a Example of Switch Statement 
// var dayOfWk = prompt("Enter day"); 
// switch (dayOfWk) {
//         case "sun":
//         case "sat":
//         console.log("Whoopee");
//         break;
//         case "fri":
//         console.log("TGLF!");
//         break;
//     default:
//         console.log("Shoot Me Now");
//         break;
// }

// ==> Next Example
// var userNAme = prompt("Enter your name");
// switch (userNAme) {
//     case "ali":
//         console.log("mil gaya");
//         break;
//     case "asad":
//         console.log("nahi ho");
//         break;
//     case "saad":
//         console.log("abhi nahi mila");
//         break;
//     default:
//      console.log("milne wala hai");
//      break;
// }

// ==> Uses of If Statement and Switch Statement

// ==> If Statement Uses
// 1)If statement is used for complex logics.
// 2)If statement is used for Multiple statment.

// ==> Switch Statement Uses
// 1)Switch Statement is used for simple logics.
// 2)Switch statement is used for single statement.


// ===> Uses Of For loop and And While Loop.

// ==> For loop Uses
// 1)if you known to the length of array use "For Loop".


// Examples of for loop
// var stuNames = ["ali","zain","ahmed","saad","asad","moiz","atif","faiq","hasan","hussain"]
// for (var i = 0; i <= stuNames.length-1; i++) {
//     console.log(1+i + ")" + stuNames[i]);
// }

// var tableNum = prompt();
// for (var i = 1; i <= 10; i++) {
//     console.log(tableNum + " x " + i + " = " + i*tableNum);
// }


// ==> While Loop Uses
// 1)if you don't known to the length of array use "While Loop"


// Examples While Loop
// var stuNames = ["ali","zain","ahmed","saad","asad","moiz","atif","faiq","hasan","hussain"]
// var i = 0;
// while (i < 10) {
//     console.log(1+i + ") " + stuNames[i])
//     i++;
// }

// var tableNum = prompt();
// var i = 1;
// while (i <= 10) {
//     console.log(tableNum + " x " + i + " = " + i*tableNum);
//     i++;
// }


// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i <= 3);
