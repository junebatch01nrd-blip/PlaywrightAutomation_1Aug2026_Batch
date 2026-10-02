
//Fuction
//What is function
//It is a block of code that can be excuted together by wrapping them in module
//{    }
//A function is an independent block of code that perform specific task
// It does not belongs to any object

//Example

function add (a, b){

    return a+b
}

console.log(add(10, 20))
console.log(add(100, 200))
console.log(add())

function substract(a =1000, b=300){

    return b-a  //300-1000

}

console.log(substract(1000, 300))


//function which does not have any name which is called as anonymous function

   let multiplyInt = function(c, d){

        return c*d

    }

    console.log(multiplyInt(40, 20))

    //Alternate wau to write anonyous function

    let multiplyNumbers = (e, f)=>{

        return e*f
    }

    console.log(multiplyNumbers(50, 30))


    //Method
    //What is the difference between function and methods
    //Method is simply a function that is stored as a property of an object
    //Method : a functions that belongs to an object or class

    //Function = standalone 
    //method= function inside an object/class


    class Login {

      
        validLogin(a, b){

            return a+b
        }
    }

    const login = new Login()

    console.log(login.validLogin(100, 20));