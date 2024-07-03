import {Page} from '@playwright/test';

export class BasePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async openPage(url: string) {
        await this.page.goto(url);
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async getCurrentTitle() {
        return this.page.title();
    }

    async closePage() {
        await this.page.close();
    }
}