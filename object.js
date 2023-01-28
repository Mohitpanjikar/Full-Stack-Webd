// class and object are very flexable and there is no access modifier as cpp aur java , 
// in js object and class are just key value pair ,java script objects are mutable in nature 

// creating a empty object in two different way -
var obj = {};
var obj = new Object();

// crearing object -
var student = {
    Name : "Mohit",
    class : 12,
    RollNo : 21
};

// you can access a property using a dot notaion in js 
console.log(student.Name);
// trying to display something which is not yet define 
console.log(student.Sem);
// define the object and calling it in Js 
student.sem = 4;
console.log(student);

// square bracket notation -way to access a property - writing the propery in single/double quotes is very imp 
/* when the key identifer is invaild we cant use in with the help of dot notation for ex - "-name" : "Mohit"; 
over here name is an inviald identifier starting with a - this sign */

console.log(student["class"]);

// creating a function and printing the property -

function printProperty(obj,prop){
    console.log(obj[prop]);
}
var prop ="Name";
printProperty(student,prop);

// deleting property from the object -
console.log(student);
// two different way - 
delete student.Name;
delete student["RollNo"];

console.log(student);

// how are object stored in memory -
// we just create the variable only onces and point it out so we change something over there acutal value bhi change ho jati hai -
var obj = {
    "p1" : 10
}
var obj2 = obj;
console.log("before update")
console.log(obj);
console.log(obj2);

obj2.p1 = 100;    //dono values update ho jayegi which both are referece to the same object

console.log("after update")
console.log(obj);
console.log(obj2);

// location compare ho raha hai - 
console.log(obj==obj2);
console.log(obj===obj2);

// iterating through the object -
var employ = {
    Name : "Mohit",
    Job: "SDE - 1 , Google",
    salary : 1200000000
};
for(var prop in employ){
    console.log(prop,employ[prop]);
}

// in case you want all the keys only - 
var keys_ = Object.keys(employ);
console.log(keys_);

//Nested object -
var employ = {
    Name : "Mohit",
    Job: "SDE - 1 , Google",
    salary : 1200000000,
    address :
    {
        city:"Google Pune",
        Pincode : 421504
    }
};
console.log(employ);
console.log(employ.address.Pincode);

// Array and Objects - Array in the javascript is nothing but object only , now the question comes but they key then indexs are keys in the js array 
var arr = new Array(1,2,3,4,5);
/* this is internally this object -
var obj = {
    "0":1,
    "1":2,
    "2":3,
    "3":4,
    "5":5
}*/
console.log(arr[0]);
console.log(arr["0"]);
// both will work as javascript is using typecasting internally 

// iterating array using for in 
for(var i in arr){
    console.log(arr[i])
}

// Timing events javascript - 
function sayHello(){
    console.log("Hello");
}
// setTimeout in this we have to pass the function and time in milisec jitna time baad we have run the function 
setTimeout(sayHello,1000);
// this will call the fucntion n number time after given time -
// setInterval(sayHello,1000);
// clearInterval - will call the function some number of the time and then stop 
var sec = 1;
function saySomething(){
    console.log("After",sec);
    sec++;
    if(sec == 6){
        clearInterval(id);
    }
}
var id = setInterval(saySomething,1000);

// homework creating a count down timer using javascript - 
var sec=  10;
function saycount(){
    console.log(sec);
    sec--;
    if(sec==0){
        clearInterval(id2);
    }
}
var id2 = setInterval(saycount,1000);