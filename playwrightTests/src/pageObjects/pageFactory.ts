import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { CategoryPage } from "./categoryPage";
import { NewsPage } from "./newsPage";
import { LoginPage } from "./loginPage";

export class PageFactory{
    static getPage(page: Page, namePage: string){
        switch(namePage){
            case 'HomePage':
                return new HomePage(page);
            case 'CategoryPage':
                return new CategoryPage(page);
            case 'NewsPage':
                return new NewsPage(page);
            case 'LoginPage':
                return new LoginPage(page);
            default:
                return new BasePage(page);        
        }
    }
}