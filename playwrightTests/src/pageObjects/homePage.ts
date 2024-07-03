import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    readonly page: Page;
    url: string;
    headerSwitcher: Locator;
    dropedownMenuCategory: Locator;
    headerMenu: any;
    newsBlockLink: any;
    loginButton: any;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = "https://ilex.by/";
        this.headerSwitcher = this.page.locator("//div[@class='role-switcher-control']/div[@class='switcher-track']/a[2]");
        this.headerMenu = this.page.locator("//li[@class='_analytics dropdown custom-dropdown']");
        this.newsBlockLink = this.page.locator("//a[@class='main-block-title-link' and @href='https://ilex.by/novosti/']");
        this.loginButton = this.page.locator("div.login")
        this.dropedownMenuCategory = this.page.locator("//div[@class='row']/ul[@class='sub-menu menu-links']/li[1]/a[contains(text(), 'Налог на прибыль')]");
    }

    async openHomePage() {
        await super.openPage(this.url);
    }

    async changeMainContextfromSwitcher() {
        await this.headerSwitcher.click();
        await expect(this.headerSwitcher).toHaveText('Юрист');
    }

    async checkUrlFromHeaderDropdown() {
        await this.headerMenu.hover();
        await this.headerMenu.isVisible();
    }

    async getCategoryPage() {
        await this.headerMenu.hover();
        await this.dropedownMenuCategory.click();
        
    }

    async changePageFromMainBlock() {
        await this.newsBlockLink.click();
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }
}