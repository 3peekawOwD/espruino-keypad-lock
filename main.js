//(C)2020 3peekawOwD
// Keypad combination lock

//// CONFIG ////

var code = "B59"; //Your Code
var welcome = "Welcome back!";
var wrong = "Wrong! Go out stupid hacker!";

//// DON'T TOUCH ////

var silenceTimeout;
var a = ""; //Buffer space

function onKey(key) {
    var ch = "123A456B789C*0#D";
    if (ch[key] == "#") {
        if (a == code) {
            console.log(welcome);
            a = "";
        } else {
            console.log(wrong);
            a = "";
        }
    } else if (ch[key] == "*") {
        console.log(a);
    } else {
        a += ch[key];
    }
}
require("KeyPad").connect([P2,P3,P4,P5],[P6,P7,P8,P9], onKey);
