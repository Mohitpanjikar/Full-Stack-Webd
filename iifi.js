// we are doing this iife aur let wala thing to avoid global scope variable which is causing error abhi tak
// Immediately invoked function expression
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function(){
    var filename = "file2";
    console.log(filename);
})();

// let in js - help you to make the funciton call in the block scope
/*
let allows you to declare variables that are limited to the scope of a block statement,
or expression on which it is used, unlike the var keyword, which declares a variable globally, 
or locally to an entire function regardless of block scope
*/
{

    let fileName = "file2";
    console.log(fileName);

}

/* 
clouser
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. */

var i = 10;
function outer(){
    var j = 20;
    //console.log(i,j);
    var inner = function(){
        var k = 30;
        console.log(i,j,k);
        i++
        j++;
        k++;
    }
    return inner;
}
var inner = outer();
inner();
inner();

/*  output will be -
10,20,30
11,20,31
two calls for the inner function making two enviroment but the 
enviroment for the outer function will be called/make only onces 
*/
function test()
for (var i = 1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
console.log("Afetr for loop",i);

// output - will be one for six times as settimeou
//  is working but for loop is working non stop 
// we can overcome from this problem with the help of let keyword
function test()
for (let i = 1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
console.log("Afetr for loop",i);
// output will be - 1 2 3 4 5 6