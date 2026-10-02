/*

Array in JavaScript

What is array in JavaScript?
-array is collection of multiple values stored in single varibale
-If we have set of elements then we can store those elementsts in one container which is called as array

const fruit = 'apple';
declaration ..single value

const fruits = ['apple', 'banana', 'grapes', 'mango'];
//array declaration for list of elements from same group

let cities = ['Pune', 'Mumbai', 'Delhi', 'Bangalore'];

let numbers = [1, 2, 3, 4, 5];
let marks = [90, 80, 70, 60, 50];


*/

var marks = [90, 80, 70, 60, 50];

var marks = [90, 80, 70, 55, 57, 40];

console.log(marks);

//how to update index value in array
marks[0] = 100;
console.log(marks);

//access by index value and print the value
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

//how to check lenghth of an array
console.log(marks.length);

//how to access index number from value in array

console.log(marks.indexOf(80));


//subarray

pcm = marks.slice(2,5);

console.log(pcm);

//how to add element in array

console.log(marks);
marks.push(45);
console.log(marks);

//how to add element in first index

marks.unshift(31);
console.log(marks);

//how to delete element from array

marks.pop();
console.log(marks);

//how to remove first index value

marks.shift();
console.log(marks);


//javascript array is always dynamic even if we declare size 
// still we can add elements above its define size

var students = new Array(5)

students[0] = 'Ramesh';
students[1] = 'Ganesh';
students[5] = 'Shaym';

console.log(students);

//reduce/filter/map

//var marks = [100, 80, 70, 55, 57, 40];
//reduce - reduce is used to combine all elements of array in one value

let sum =0;
for(let i=0; i< marks.length; i++){

    sum= sum + marks[i]

}
console.log(sum);

let total = marks.reduce((sum, mark)=> sum + mark, 0)

console.log(total);

//filter

//filter even score from marks

//var marks = [100, 80, 70, 55, 57, 40];

let evenScore=[]
for(let i=0;i<marks.length; i++){

      if(marks[i]%2==0){
      
       evenScore.push(marks[i])
       
      }

}
console.log(evenScore);

//Filter is used to filter elements present in an array based on specific condition

let filterEvenScore= marks.filter(mark =>mark%2==0);
console.log(filterEvenScore);

//Map
//Map is used to transform existing array element with new values without changing its array size

let price = [2000, 1200, 5000, 3000]

gstPrice= price.map(price=>price*1.18);

console.log(gstPrice)





































