"use strict";

var a = 10;
switch(a){
    case 10:
        console.log("yes it is 10");
        break;
    case 7:
        console.log("yes it is 7");
        break;
    case 8:
        console.log("yes it is 8");
        break
}

var cityName = prompt("enter your city name");
switch(cityName){
    case "karachi":
        console.log("yes it is karachi");
        break;
    case "lahore":
        console.log("yes it is lahore");
        break;
    case "peshawar":
        console.log("yes it is peshawar");
        break
    default:
        console.log("your city not found");
}