import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage{
    readonly page: Page;
    url: string;
    mainInfo: RegExp;
    inputUsernameForm: any;
    buttonSubmitForm: any;
    errorInfoField: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.url = "https://ilex.by/login/?nocacheParam=1719758883479&needCredentials=true";
        this.mainInfo = /Информационно-правовой портал для бухгалтеров, юристов и руководителей/;
        this.inputUsernameForm = this.page.locator('//input[@id="username-input"]');
        this.buttonSubmitForm = this.page.locator("//button[@id='loginFormSubmitButton']");
        this.errorInfoField = this.page.locator('#login-form > div > p.error-message');
    }

    async openLoginPage() {
        await super.openPage(this.url);
    }

    async findLoginInfoText() {
        await expect(this.page).toHaveTitle(this.mainInfo);
    }
    
    async inputLoginEmail() {
        await this.inputUsernameForm.fill('test.email');
    }

    async submitLoginForm() {
        await this.buttonSubmitForm.click();
    }

    async findErrMessage() {
        await expect(this.errorInfoField).toBeVisible();
    }
}