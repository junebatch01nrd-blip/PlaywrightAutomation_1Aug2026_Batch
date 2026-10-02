import {faker} from '@faker-js/faker'

export class Helper{

static generateData(){

const firstNames = faker.person.firstName();
const lastNames =  faker.person.lastName();
const empids = faker.number.int({min:1000, max:9999})

return{

    firstName: firstNames,
    lastName: lastNames,
    empid: empids
}


}

}