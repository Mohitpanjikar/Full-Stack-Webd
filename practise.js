// passing the number of argument jitna required hai only utna he - 
function sum(a,b){
    console.log(a,b);
    return a+b;
}

var sum = (4,5);
console.log(sum);

// passing more argument then required - simply ignored by javascript 
function sum(a,b){
    console.log(a,b);
    return a+b;
}

var sum = (4,5,9);
console.log(sum);

// passing less number of argument then required - then the second  would be undefined and result will be Nan
function sum(a,b){
    console.log(a,b);
    return a+b;
}

var sum = (4);
console.log(sum);


// function hoisting - defining a function first and using variable over there without defining the variable in the first place
// this will be undefined but will not through an error atleast 
function hoisedemo(){
    console.log(i);
    var i = 10;
}
hoisedemo();

// or for ex - 
console.log(j);
var j = 10;

// calling the fuction without defining it on the first place
hoisedemo1(); 
function hoisedemo1(){
    console.log(i);
    var i = 10;
}

// function and the Scope 
var name = "Scope";
console.log(name);

function scopedemo(){
    //local variable i is -
    var x = 10;
    console.log(x);
}
scopedemo();
// this will give an error as iska scope local hai - 
// console.log(x);

// local v/s global variable -
var name2 = "global";
function scopedemo2(){
    var name2 = "function";
    console.log(name2);
}
console.log(name2);

// context of funciton calls and execution - 
/*stack looks like - 
c()
b()
a()
global */

function c(){
    console.log("inside c");
}
function b(){
    c();
    console.log("inside b");
}
function a(){
    b();
    console.log("insode a");
}
a();
console.log("global context");

// function within function 
// if i calling the inner function first then this will through an error -
function outer(){
    var outervar = 100;
    function inner(){
        console.log(outervar);
    }
    inner();
}
outer();

// scope inside function
var name = "global";
function outer(){
    var name = "outer";
    inner();
    function inner(){
        var name = "inner";
        console.log(name);
    }
}
outer();
console.log(name);

// faction expression - passing a function in the variable
/* function to find the fact ->
function fact(n){
    var ans = 1;
    for(var i =1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}
*/
var factorial = function fact(n){
    var ans = 1;
    for(var i =1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
};
console.log(factorial);
console.log(factorial(5));

// naming a funcion and not naming a function making it ananmous 
// naming - 
var factorial1 = function fact(n){
    var ans = 1;
    for(var i =1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
};

//not naming it making it anamousy - in the case we are not naming the function in that case function will 
// take name over variable name -
var factorial2 = function (n){
    var ans = 1;
    for(var i =1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
};
console.log(factorial1);
console.log(factorial2);

/*
there are two case which is as following if you are creating a function and 
calling it then it will work fine beacuse OfflineAudioCompletionEvent
hoisting but but if you creating a function by variable/expression and 
then calling it phela he then it will throw some kind off an error
*/