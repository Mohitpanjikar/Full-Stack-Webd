/*class onject code -
function createStudent(name,rollNo, marks){
    var student = {}; //new object ();
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var student1 = createStudent("mohit",19,79);
console.log(student1);
same code with slight changes will make it a constructor wala code , code goes like -
*/
 
function createStudent(name,rollNo, marks){
    var student = {}; //new object ();
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
    // return student;
}

// this is constructor wala code -
var student1 =new createStudent("mohit",19,79);
console.log(student1);

//function type call, by removing new from here ,
var student1 = createStudent("mohit",19,79);
console.log(student1);