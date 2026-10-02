
//String -primitive data ype
//-Represents a sequence of character enclosed in single quote or double quote

let day = 'tuesday'
console.log(day)

//how to modify string as Uppercase and lowercase

console.log(day.toUpperCase()); //TUESDAY

console.log(day.toLowerCase()); //tuesday

//how check string length

console.log(day.length);  // 7

//how to slice the string value

console.log(day.slice(0, 4));//tues

//how to split string

let splitDay = day.split('s') // ['tue', ' day'] //  'firstname lastname'

console.log(splitDay);

console.log(splitDay[0]);
console.log(splitDay[1]);

console.log(splitDay[0].length);

//how to remove white space from string //    "                          text successfully added"
console.log(splitDay[1].trim().length);

let fname = "  Firstname";

console.log(fname.length);
console.log(fname.trim().length);

//how to convert number into string

let date = '10';

let nextDate= '25';

let add = nextDate + date
console.log(add);

console.log(typeof(add));

newAdd = parseInt(nextDate) + parseInt(date)

console.log(newAdd);
console.log(typeof(newAdd));

//how to convert number into string
let newAddConvertToString = newAdd.toString();
console.log(newAddConvertToString);

console.log(typeof(newAddConvertToString));

let bigDay = 10;   //'10'
console.log(typeof(bigDay));

let bigDayString = bigDay.toString();
console.log(typeof(bigDayString));

//how to concatenate 2 string values together
let word = "Hello "
let newWord = word + bigDayString   // "Hello 10"

console.log(newWord);


//how to count each character from string array

let stringarray = ['apple', 'banana', 'mango']
console.log(stringarray);
console.log(stringarray.length);
let stringarrayChar = stringarray.join();

console.log(stringarrayChar);
console.log(stringarrayChar.length);














