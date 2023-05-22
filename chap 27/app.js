"use strict";

var rnd = Math.ceil(Math.random()*50);
console.log(rnd);

var dice = Math.ceil(Math.random()*6);
console.log(dice);

var headTail = Math.ceil(Math.random()*2);
if(headTail === 1){
    console.log("heads");
}else{
    console.log("tails");
}