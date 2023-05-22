"use strict";

function askName(){
    var userName = prompt("enter name");
    console.log(userName);
}
askName();

function myName(){
    var name = "fatima";
}
function myLastName(){
    var lastName = "paul"
}

function fullName(){
    myName();
    myLastName();
}

function concat(a, b, c){
    console.log(a, b, c);
}
concat(userName, "123", 123);

function concat1(a, b){
    var c = a + b;
}
concat1(1, 2);

function multiply(a, b, c){
    var mul = a*b*c;
    console.log(mul);
}
multiply(1, 2, 4);

function average(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum / arr.length);
}

function sum(a, b){
    return a+b;
}
var add = sum(2, 5);
console.log(add);

var str = "fatima";
console.log(str.length);

var dt = new Date();
dt.setFullYear(2020);

var arr2 = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
arr2.includes("fatima");

console.log(str.repeat(10));

console.log(arr2.reverse());
