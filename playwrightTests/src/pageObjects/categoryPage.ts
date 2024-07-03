import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class CategoryPage extends BasePage{
    readonly page: Page;
    url: string;
    headerToggleLink: any;
    categoryRubricLink: any;
    categoryRubricTitle: RegExp;
    rubricList: any;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.url = "https://ilex.by/analitika/";
        this.headerToggleLink = this.page.locator("//li[@id='menu-item-5982']/a[@href='https://ilex.by/analitika/']")
        this.categoryRubricLink = this.page.locator("//ul[@class='category-list']/li[1]/a[@href='https://ilex.by/business/nedvizhimost/']")
        this.categoryRubricTitle = /Недвижимость - аналитика и документация - ilex/;
        this.rubricList = this.page.locator("//div[@id='articles-list']/div[1]")
    }
    
    async openCategoryPage() {
        await super.openPage(this.url);
    }

    async openCategoryRubricsPage() {
        await this.headerToggleLink.click();
    }

    async selectCategoryRubric() {
        await this.categoryRubricLink.click();
    }

    async checkRubricTitle() {
        await expect(this.page).toHaveTitle(this.categoryRubricTitle);
    }

    async checkRubricListPage() {
        await this.rubricList.isVisible();
    }

}