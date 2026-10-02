import { Page } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { PimPage } from '../pages/PimPage'


export class PageManager{


readonly page:Page;
readonly loginPage:LoginPage;
readonly pimPage:PimPage;


constructor(page:Page){

    this.page =page;

    this.loginPage = new LoginPage(page)
    this.pimPage = new PimPage(page)
    
}


}