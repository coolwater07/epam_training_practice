const { customClick } = require('../../utils/customCommands.js');



describe('test_basic_command', () => {

    // сценарий 1
   
    it('should check if logo is displayed on the homepage', async () => {
        await browser.url('https://www.epam.com/');
        const logo = await $('div.header__logo-container');
        await logo.waitForDisplayed();
        const isDisplayed = await logo.isDisplayed();
        expect(isDisplayed).toBe(true);
    });

    // сценарий 2

    it('should search for jobs on the EPAM site', async () => {
        await browser.url('https://www.epam.com/');
        const search__button = await $('//*[@id="wrapper"]/div[2]/div[1]/header/div/div/ul/li[3]/div/button'); 
        await search__button.click();
        const searchInput = await $('#new_form_search');
        await searchInput.waitForDisplayed();
        await searchInput.setValue('QA Engineer');
        await browser.keys('Enter'); 
        const results = await $('h2.search-result__items');
        expect(await results.isDisplayed());
        
    });

    // сценарий 3
   
    it('should check if Read More button exists', async () => {
        await browser.url('https://www.epam.com/');
        const ReadMoreButton = await $('a[href="https://www.epam.com/insights/blogs/rethinking-network-security-embrace-inevitability-of-breaches-to-strengthen-defenses"]');
        const isExisting = await ReadMoreButton.isExisting();
        expect(isExisting).toBe(true);
    });

    // сценарий 4
    
    it('should open the services page', async () => {
        await browser.url('https://www.epam.com/');
        const Hamburger = await $('button.hamburger-menu__button');
        await Hamburger.waitForDisplayed();
        await Hamburger.click();
        const servicesLink = await $('a[href="/services"]');
        await servicesLink.waitForDisplayed();
        await servicesLink.click();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Services | EPAM");
    });    

    // сценарий 5



    it('should check if Investors button is displayed after waiting', async () => {
        await browser.url('https://www.epam.com/');
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
        const investorsButton = await $('a[href="/investors"]');
        const isDisplayed = await investorsButton.isDisplayed();
        expect(isDisplayed).toBe(true);
    });


    //custom click

    it('custom click test, should click on Investors button after waiting for it to be displayed', async () => {
        await browser.url('https://www.epam.com/');
        await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
        const investorsButtonSelector = 'a[href="/investors"]';
        
        await customClick(investorsButtonSelector);

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/investors');
    });
   
});

