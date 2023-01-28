var arr = new Array(1,2,3,4,5);
// prining the array 
console.log(arr);
// printing the third index 
console.log(arr[3]);
// setting value at index 2
arr[2]=90;
console.log(arr);
// empty space for index 5th and 6th 
arr[7]=100;
console.log(arr);
// finding the length of the array 
console.log(arr.length);
// creating a array having nothing empty array 
var arr3 = new Array();
// array of lenght 2 having nothing in it 
var arr4 = new Array(2);

console.log(arr3);
console.log(arr4);

// if add bunch of element in the argument then that will the value of the array 
var arr5 = new Array(2,3);
console.log(arr5);

// array in the cpp or java is homogenous only means they should only contain one type of data only where as in case of javascript the 
// the array is hetrogenous in nature can contain multiple data type if dynamic binding in js -
var arr6 = ["abc",1,2,"Mohit",true,false];
console.log(arr6);

// function in the java Script 
var arr7 = new Array(5,6,7,8,9);
console.log(arr7.length);
console.log(arr7.push(10));
console.log(arr7);
console.log(arr7.pop(10));
console.log(arr7);
// left shift the array 
console.log(arr7.shift);
// right shift the array 
console.log(arr7.unshift);

// splice function is the function used in js for spliting the array just like python wala type - 
// arrguments are as following - starting index , ending index , element to be inserted 
// if the stop is not mention then it will go to the end ek dum 
var arr8 = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr8.splice(1,5,1));
console.log(arr8);
// adding element in the array using splice function -
console.log(arr8.splice(2,0,100,200));
console.log(arr8);


// printing the array using the for loop - 
var arr9 = new Array(1,2,3,4,5,6,7,8,9,10);
for(var i=0;i<arr9.length;i++){
    console.log(arr9[i]);
};

// printing the element of array using " for each " Method -
function print(element){
    console.log(element);
};
arr9.forEach(print);

