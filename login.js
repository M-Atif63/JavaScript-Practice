// console.log("login is live")


// let usersData = [
//     {
//         name:'ali',
//         eml:'ali@gmail.com',
//         pass:12345
//     },
//     {
//         name:'ahmed',
//         eml:'ahmed@gmail.com',
//         pass:12345
//     },
//     {
//         name:'bilal',
//         eml:'bilal@gmail.com',
//         pass:12345
//     },
//     {
//         name:'atif',
//         eml:'atif@gmail.com',
//         pass:12345
//     },

// ]


// let myPromise = new Promise((resolve,reject)=>{
//     console.log("data is fetching")
//     let prom = false;
//     if(prom){
//         resolve("successful")
//     }else{
//         reject("failed")
//     }
// });

// let onFilfullation = (result) =>{
//     console.log(result)
// }
// let onRejection = (error) =>{
//     console.log(error)
// }
// myPromise.then(
//     function onFilfullation(result){
//         console.log(result)
//     }
// ).catch(
//     function onRejection(error){
//         console.log(error)
//     }
// )

// let usersData = [
//     {
//         name: 'ali',
//         eml: 'ali@gmail.com',
//         pass: 12345
//     },
//     {
//         name: 'ahmed',
//         eml: 'ahmed@gmail.com',
//         pass: 12345
//     },
//     {
//         name: 'bilal',
//         eml: 'bilal@gmail.com',
//         pass: 12345
//     },
//     {
//         name: 'atif',
//         eml: 'atif@gmail.com',
//         pass: 12345
//     },

// ]

// let fetchData = new Promise((resolve, reject) => {
//     console.log("data is fetching please wait")
//     for (const key in usersData) {
//         console.log('usersData=>', usersData[key].name)
//         let username = 'ali';
//         setTimeout(() => {
//             if (username === usersData[key].name) {
//                 resolve("data fetch successfully")
//             } else {
//                 reject("facing some problems in fetching data");
//             }
//         },3000)
//     }
// })

// fetchData.then(
//     function onFilfullation(result) {
//         console.log(result)
//     }
// ).catch(
//     function onRejection(error) {
//         console.log(error)
//     }
// )


// var arr = ["ali","atif","bilal"]
// arr.push("ahmed")
// console.log(arr)



// --- geting data with XMLHttpRequest object

// let xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = function () {
//     if(this.readyState == 4 && this.status == 200){
//         console.log("data =>",this.response)
//     }else{
//         console.log("data fetching failed")
//     }
// }

// xhttp.open('Get','https://jsonplaceholder.typicode.com/users',true)
// xhttp.send()

// --- Geting Data With fetch method

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log("response=>", response.status)
//         let dataResponse = response.json()
//         console.log('dataResponse=>',dataResponse)
//         return dataResponse
//     }).then((result)=>{
//         console.log("result=>",result)
//         let data = result
//         data.map((items)=>{
//             console.log(items.length)
//         })
//     })












