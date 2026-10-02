//What is Inheritence

//inheritence is the process of aquiring all methods and variables from parent class

//it can access with keyword - extends

//Need to import the parent class class to provide the information to the child class while creating the object .

import {Person} from "./basicClass.js";


class Pet extends Person{

 constructor(firstName, lastName, age){

    super(firstName,lastName, age)


}

//Polymorphism
//Method overrriding
//Method Overloading --- javascript does not allow method overloading

getLocation(){

    return 'Mumbai'
}

getLocation(city){

    return city
}

}

let pet = new Pet("Tom", 'Cat', 2)
console.log(pet.fullname());
console.log(pet.getLocation());

console.log(pet.getLocation('Banglore'));