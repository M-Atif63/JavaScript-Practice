console.log("login is live")


let usersData = [
    {
        name:'ali',
        eml:'ali@gmail.com',
        pass:12345
    },
    {
        name:'ahmed',
        eml:'ahmed@gmail.com',
        pass:12345
    },
    {
        name:'bilal',
        eml:'bilal@gmail.com',
        pass:12345
    },
    {
        name:'atif',
        eml:'atif@gmail.com',
        pass:12345
    },
    
]

let userName = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')

userName.addEventListener('change',(e)=>{
    console.log("=>",e.target.value)
})

for(const key in usersData){
    let submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click',()=>{
        // if(userName.value === usersData[key].name && email === usersData[key].eml && password === usersData[key].pass){
        // console.log('user is here')
        // }
        // if(userName === usersData[key].name){
        //     console.log("name is here")
        // }
    })
}
