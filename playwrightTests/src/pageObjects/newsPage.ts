import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";

export class NewsPage extends BasePage{
    readonly page: Page;
    url: string;
    selectorNewsList: Locator;
    newsRubricLink: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.url = "https://ilex.by/novosti/";
        this.selectorNewsList = this.page.locator("div.col-md-3.hidden-sm.hidden-xs ul li:nth-child(1)");
        this.newsRubricLink = this.page.locator("//h2[@class='main-block-title col-md-12 _link']/a[@href='https://ilex.by/news-category/dopolnitelnyye-servisy-ilex/']");
    }

    async openNewsPage() {
        await super.openPage(this.url);
    }

    async findNewsBlockTitle() {
        await expect(this.selectorNewsList).toHaveText('Внешняя торговля');
    }

    async findNewsRubricTitle() {
        await expect(this.newsRubricLink).toHaveText('Все статьи рубрики')
    }

    async clickOnRubricPage() {
        await this.newsRubricLink.click();
    }
}