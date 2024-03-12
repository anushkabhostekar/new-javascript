// primitive datatype

// 7 types : string, number, boolean , null , undefined , symbol, BigInt 


// Reference (non-primitive)

// Array, Objects, functions 
const heros =["shaktiman","anushka","hrushi"];
let myObj={
    name :"hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof myfunction);
// ************************************************//

// stack memory : primitive type


let myYoutubdename="anushkabhostekar"

let anothername= myYoutubdename
anothername="coffee_ani_barach_kahi_21"
console.log(anothername);

//********************//
// heap memory: non -primitive 

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="anu@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);


