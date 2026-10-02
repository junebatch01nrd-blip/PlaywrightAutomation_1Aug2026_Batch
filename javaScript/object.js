//object - is non primitive data type
//object- Object is a collection of properties...
//properties are the key and value pairs

//object can store multiple data types like string, number, boolean, null, undefined, function

//how can we define object in javascript---

let fruit = 'apple';

let fruits = ['apple', 'banana', 'mango'];

let students =[{

    studentId:101,
    firstName:"shailesh",
    lastName:"pande",
    email: "spande@mailinator.com",
    age:30,
    isStudent:true,
    Grade:"A"

},

{

    studentId:102,
    firstName:"Jackso",
    lastName:"Velar",
    email: "jvs@mailinator.com",
    age:45,
    isStudent:false,
    Grade:"B"
}

];


//How to access object properties in javascript
//1. dot notation   // object.property key

console.log(students.firstName);
console.log(students.age);

//second way to access properties

console.log(students['email']);
console.log(students['isStudent']);


//await page.locator('#studentuser').fill(student.email);

//how to update the propert value 

students.firstName = 'Ramesh';
console.log(students);


//how to check properties present or not in object

console.log('age' in students);
console.log('marks' in students);
console.log('pande' in students)


//how to iterate object properties in a javascript

for(let x in students){

    console.log(students[x])
}



console.log(students[0].age);

let student = students.find(s=> s.studentId ===101);

console.log(student.email)









