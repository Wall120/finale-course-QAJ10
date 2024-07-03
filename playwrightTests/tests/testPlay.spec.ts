import { test } from '@playwright/test';
import { PageFactory } from '../src/pageObjects/pageFactory';
import { BasePage } from '../src/pageObjects/basePage';
import { HomePage } from '../src/pageObjects/homePage';
import { CategoryPage } from '../src/pageObjects/categoryPage';
import { NewsPage } from '../src/pageObjects/newsPage';
import { LoginPage } from '../src/pageObjects/loginPage';

test.describe.configure({mode: 'serial', retries: 2});

test.beforeEach(async ({page}) => {
    const basePage = new BasePage(page);
    await basePage.openPage('https://ilex.by/');
});

test.describe('First tests block', () => {
    
    test('Home page has title', async ({page: Page}) => {
       const homePage = PageFactory.getPage(Page, 'HomePage');
       await homePage.openPage('https://ilex.by/');
       await homePage.getCurrentTitle();
    });

    test('Switch content page using switcher', async({page: Page}) => {
        const homePage = new HomePage(Page);
        await homePage.changeMainContextfromSwitcher();
    });

    test('find and open link in dropdown header menu', async({page: Page}) => {
        const homePage = new HomePage(Page);
        await homePage.checkUrlFromHeaderDropdown();
        await homePage.getCategoryPage();
    });
});

test.describe('second tests block', () => {

    test('open news page', async ({page: Page}) => {
        const homePage = new HomePage(Page);
        const newsPage = PageFactory.getPage(Page, 'NewsPage');
        await homePage.changePageFromMainBlock();
        await newsPage.getCurrentUrl();
        await newsPage.getCurrentTitle();
    });

    test('find first news category', async ({page: Page}) => {
        const newsPage = new NewsPage(Page);
        await newsPage.openPage('https://ilex.by/novosti/');
        await newsPage.findNewsBlockTitle();
    });

    test('change and check news rubric', async ({page: Page}) => {
        const newsPage = new NewsPage(Page);
        await newsPage.openPage('https://ilex.by/novosti/');
        await newsPage.findNewsRubricTitle();
        await newsPage.clickOnRubricPage();
        await newsPage.getCurrentUrl();
    });
});

test.describe('the third tests block', () => {

    test('open category page', async ({page: Page}) => {
        const categoryPage = new CategoryPage(Page);
        await categoryPage.openCategoryRubricsPage();
        await categoryPage.getCurrentUrl();
    });

    test('check the category page and title', async ({page: Page}) => {
        const categoryPage = new CategoryPage(Page);
        await categoryPage.openPage('https://ilex.by/analitika/');
        await categoryPage.selectCategoryRubric();
        await categoryPage.getCurrentUrl();
        await categoryPage.checkRubricTitle();
        await categoryPage.checkRubricListPage();
    });
});

test.describe('the fourth tests block', () => {

    test('open the login page and input email', async ({page: Page}) => {
       const loginPage = new LoginPage(Page);
       const homePage = new HomePage(Page);
       await homePage.clickOnLoginButton();
       await loginPage.getCurrentUrl();
       await loginPage.findLoginInfoText();
    });

    test('input email and catch error message', async ({page: Page}) => {
        const loginPage = new LoginPage(Page);
        await loginPage.openPage('https://ilex.by/login/?nocacheParam=1719758883479&needCredentials=true');
        await loginPage.inputLoginEmail();
        await loginPage.submitLoginForm();
        await loginPage.findErrMessage();
    });
});