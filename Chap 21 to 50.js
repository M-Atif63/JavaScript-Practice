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
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// ===> Do While loop Examples
// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i <= 3);

// var tableNum = prompt();
// var i = 1;
// do {
//     console.log(tableNum + " x " +  i + " = " + i*tableNum);
//     i++;
// } while (i <= 10);

// var stuNames = ["ali","zain","ahmed","saad","asad","moiz","atif","faiq","hasan","hussain"]
// var i = 0;
// do {
//     console.log(1+i + ") " + stuNames[i]);
//     i++;
// } while (i < 10)

// The Do While Loop is same to same While Loop but code Standard is different.


// Events

// function checkCampus() {
//     var rollNum;
//     var campus;
//     switch (rollNum) {
//         case 12:
//             campus = "Zaitoon Ashraf Campus"
//             break;
//         case 15:
//             campus = "Zamzama Campus"
//             break;
//         case 25:
//             campus = "Bahadurabad Campus"
//             break;
//         default:
//             campus = "You Are Not Enrolled"
//     }
//     document.getElementById("").value = campus
// }

//  function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }


// function checkCam() {
//     var campus;
//     var rollNumber = document.getElementById("roll").value
//     switch (rollNumber) {
//         case "112":
//             campus = "Zaitoon Ashraf Campus"
//             break;
//         case "115":
//             campus = "Zamzama Campus"
//             break;
//         case "125":
//             campus = "Bahadurabad Campus"
//             break;
//         default:
//             campus = "Nahi hai"
//             break;
//     }
//     document.getElementById("cam").value = campus;
// }




// ====> Events:Button <====
// function myMess (myData) {
//     console.log(myData);
//     alert(myData);
// }


// function changingImg () {
//         var htmlValue = document.getElementById("action").
//         var changedImg = 
// }


// --Types of Loop;

// --There are three types of Loop;

// 1.For Loop
// 2.While Loop
// 3.Do-While Loop

// --All loops are used for Iteration and Automate the different tasks.

// 1. --For Loop

// let count = 0;

// for (count; count <= 10; count++) {
//         if (count % 2 === 0) {
//                 console.log(count)
//         }
// }

// 2. --While Loop

// while(count <= 10) {
//         if(count % 2 === 1)
//         console.log(count)
//         count++;
// }

// 3. --Do-While Loop

// let count = 0;
// do {
//         if (count % 2 === 0)
//         console.log(count)
//         count++;
// } while (count <= 10)


// . --uses of Following Three Loops in Production Websites

// 1. -- For Loop 

const productsData = [
        {
                id: 1,
                title: "Minimalist Leather Backpack",
                price: 89.99,
                category: "Accessories",
                inStock: "inStock",
                rating: 4.7,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 2,
                title: "Wireless Noise-Canceling Headphones",
                price: 149.50,
                category: "Electronics",
                inStock: "inStock",
                rating: 4.5,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 3,
                title: "Ergonomic Mechanical Keyboard",
                price: 110.00,
                category: "Electronics",
                inStock: false,
                rating: 4.8,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 4,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
        {
                id: 5,
                title: "Insulated Stainless Steel Bottle",
                price: 24.95,
                category: "Fitness",
                inStock: "inStock",
                rating: 4.2,
                img:'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png'
        },
];

let mainContainer = document.getElementById('container');


let currentProducts = 0;

let cardInHTML = ""

function renderProducts() {
        for (const key in productsData) {
                console.log(`loop is Working ${key}`)
                cardInHTML += `
        <div class="mainContainer">
    <div class="card product-card" id="${productsData[key].key}">
        <!-- Product Image Wrapper -->
        <div class="image-container proImgDiv">
            <img class="product-image" src="${productsData[key].img}" alt="Product Image" />
        </div>
        
        <!-- Product Details -->
        <div class="product-details proDetailDiv">
            <p class="category">${productsData[key].category || 'Sports'}</p>
            
            <div class="titleAndPriceDiv">
                <h1 class="proTitle title">${productsData[key].title}</h1>
                <div class="price-wrapper">
                    <h2 class="proPrice price">$${productsData[key].price}</h2>
                    <!-- Optional: Add original price calculation if your data supports it -->
                </div>
            </div>
            
            <h3 class="proInstock">${productsData[key].inStock}</h3>

            <!-- Rating Stars (Evaluates dynamic value from your array) -->
            <div class="rating-container">
                <!-- Star 1 -->
                <svg class="star-icon ${productsData[key].rating >= 1 ? 'active' : 'muted'}" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
                <!-- Star 2 -->
                <svg class="star-icon ${productsData[key].rating >= 2 ? 'active' : 'muted'}" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
                <!-- Star 3 -->
                <svg class="star-icon ${productsData[key].rating >= 3 ? 'active' : 'muted'}" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
                <!-- Star 4 -->
                <svg class="star-icon ${productsData[key].rating >= 4 ? 'active' : 'muted'}" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
                <!-- Star 5 -->
                <svg class="star-icon ${productsData[key].rating >= 5 ? 'active' : 'muted'}" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" />
                </svg>
                <p class="review-count">(${productsData[key].rating})</p>
            </div>

            <!-- Footer Purchase Section -->
            <div class="purchase-container">
                <button class="add-button">
                    <svg class="cart-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" />
                    </svg>
                    Add
                </button>
            </div>
        </div>
    </div>
</div>`
}
renderProducts()

mainContainer.innerHTML = cardInHTML

let SeeMoreBtn = document.getElementById('seeMoreBtn');
SeeMoreBtn.addEventListener("click",()=>{
        mainContainer.innerHTML += cardInHTML
        SeeMoreBtn.style.display="none"
})
