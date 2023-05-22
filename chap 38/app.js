"use strict";

function abc(){
    var a = 10;
    if(a){
        a = 7
    }
    alert(a);
}
abc()
// console.log(a); //error

var b = 10
function dfg(){
    b = 3;
}
dfg();
console.log(b);