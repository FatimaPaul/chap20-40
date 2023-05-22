"use strict";

var dobj = new Date();

var dt = new Date();
var newstr = String(dt);
console.log(newstr);

var days = ["sun", "mon", "teus", "wed", "thurs", "fri", "sat"]
var dt1 = new Date();
var d = days[dt1.getDay()];
// alert(d);

var a = dt1.getDate();
var b = dt1.getFullYear();
var c = dt1.getHours();
var e = dt1.getMinutes();
var f = dt1.getMonth();
var g = dt1.getSeconds();

var dt2 = new Date("12-31-2020");
console.log(dt2);

var dt3 = new Date("02-02-1992");
console.log(dt3);

var dt4 = new Date();
var dt5 = new Date("01-01-1980");
var time = dt4.getTime() - dt5.getTime();
console.log(time);

dt4.setFullYear(2012);
dt4.setMonth(0);
// no method for setting day
console.log(dt4);

var min = Number(prompt("enter how many minutes"));
var hours =Number(prompt("enter how many horus"))
var dt6 = new Date();
dt6.setMinutes(min);
dt6.setHours(hours);
console.log(dt6);

var dt7 = new Date();
var yourDate = prompt("enter you date");
var dt8 = new Date(yourDate);
var age = dt7.getTime() - dt8.getTime();
console.log(new Date(age));