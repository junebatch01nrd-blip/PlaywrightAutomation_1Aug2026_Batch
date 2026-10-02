import {Page, Locator} from '@playwright/test'

export class PimPage{

readonly page;

constructor(page: Page){


    this.page =page;
}

get pimLink():Locator{

return this.page.getByRole('link', {name: 'PIM'})

}

get pimHeading(){

    return this.page.getByRole('heading', {name:'PIM'})

}

get addButton(){

return this.page.getByRole('button', {name: 'Add'})
}

get employeeFullNametext(){

    return this.page.getByText('Employee Full Name')
}

get firstNameField():Locator{

    return this.page.getByRole('textbox', {name: 'First Name'})
}

get lastNameField():Locator{

    return this.page.getByPlaceholder('Last Name')
}

get employeeIdField():Locator{

    return this.page.locator('.oxd-input-group').filter({has:this.page.locator('label', {hasText:'Employee Id'})})
        .locator('.oxd-input.oxd-input--active')
}

get saveButton():Locator{

    return this.page.getByRole('button', {name: 'Save'})
}

get searchButton():Locator{

    return this.page.getByRole('button', {name:'Search'})
}

get successMessage():Locator{

    return this.page.getByText('Successfully Saved')
}

get employeeIdInputValue(){

return this.employeeIdField.inputValue()

}


async addEmployee(firstname:string, lastname:string){

await this.pimLink.click();
await this.addButton.click();
await this.firstNameField.fill(firstname);
await this.lastNameField.fill(lastname);

const employeeIdValue= await this.employeeIdInputValue;

await this.saveButton.click();

return employeeIdValue;


}
async searchEmployeeById(employeeId:string):Promise<Locator>{

await this.pimLink.click();
await this.employeeIdField.fill(employeeId);
await this.searchButton.click();

return this.page.locator('.oxd-table-card').filter({hasText:employeeId});
}




}