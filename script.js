// let const

var MyName ="Nithiskumar";
MyName = "Rahul";
console.log(MyName);

let MyName1 ="Nithiskumar";
MyName1 = "Rahulkumar";
console.log(MyName1);

const MyNickName = "NK";

console.log(MyNickName);

//Arrow function

//normal function

function sayName(){
    console.log("RK NOOB");
}
sayName();


function sayAge(a){
    console.log(a);
}
sayAge(22);

//arrow

let saySallary = (s) =>{
    console.log(s);
}
saySallary(50000);

let sayCompany = company => company;
console.log(sayCompany("TCS"));


let IT = code => {
    return code;
}
console.log(IT("JavaScript"));

let dobule = num => num*7;
console.log(dobule(2));

import {hello} from './sell'
hello();