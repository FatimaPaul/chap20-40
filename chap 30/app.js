"use strict"

var num = 3.1234567;
var fix = num.toFixed(4);
var newNum = String(fix);
console.log(newNum);

var num1 = 3.12456;
console.log(Number(String(num1.toFixed(2))));

var num2 = 2.456;
var fixStr = String(num2.toFixed(2));
if(fixStr.length > 4){
    console.log("more");
}else{
    console.log("less");
}

var num3 = 2.414634764875238746238;
var manyDecimal = String(num3.toFixed(2));
alert(manyDecimal);