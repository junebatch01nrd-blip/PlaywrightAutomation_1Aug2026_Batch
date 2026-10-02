import {Page, Locator} from '@playwright/test'

export class LoginPage{

readonly page:Page;

constructor(page:Page){

    this.page=page;
}


get usernameField(){


   return this.page.getByPlaceholder('Username')


}

get passwordField(){

    return this.page.getByRole('textbox', {name: 'Password'})

}

get loginButton():Locator{

return this.page.getByRole('button', {name:'Login'})

}

get errorMessage(){

    return this.page.getByText('Invalid credentials')
}


get loginImg(): Locator{

return this.page.getByRole('img', {name:'OrangeHrm'})

}


get dahboardHeading(){

    return this.page.getByRole('heading', {name: 'Dashboard'})
}

async login(username:string, password:string){

await this.usernameField.fill(username)
await this.passwordField.fill(password)
await this.loginButton.click();


}


}