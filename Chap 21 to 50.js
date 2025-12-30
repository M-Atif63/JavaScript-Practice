// console.log("hello, world");

// ====== Random Numbers ========

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

// ===== converting strings to integers and decimal =======

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


// ===== converting strings to numbers numbers to strings ======

// Number(); is used for converting string to numbers(work on all string);

// === before in numbers
// var strValue = 10;
// console.log(strValue);

// // === after in string
// var strValue = 10;
// var strToNum = strValue.toString();
// var concadinateOne = strValue + 1;
// console.log(concadinateOne);

// ===== Controlling the length of decimal;======

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


// ===== Getting the current date and time =====
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


