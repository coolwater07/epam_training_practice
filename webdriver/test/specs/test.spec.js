describe('EPAM site test', () => {

    // сценарий 1
    it('title', async () => {
        await browser.url("https://www.epam.com/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
    });


    //  // сценарий 2
    it('hamburger', async () => {
        await browser.url("https://www.epam.com/"); 
        const hamburger = await $('button.hamburger-menu__button');
        
        expect(await hamburger.isDisplayed()).toBe(true);
    });

    // сценарий 3
    it('"OUR BRANDS" section', async () => {
        await browser.url("https://www.epam.com/");
        const section = await $("//h2[contains(text(), 'OUR BRANDS')]");
        expect(await section.isDisplayed()).toBe(true);
    });
    

    // сценарий 4
    it('results for a search query', async () => {
        const searchIcon = await $('button.header-search__button'); // CSS
        await searchIcon.click();

        const searchInput = await $("//input[@placeholder='What are you looking for?']"); // XPath
        await searchInput.setValue('Automation');
        await browser.keys('Enter');

        const result = await $("//a[contains(text(),'Automation')]");
        expect(await result.isDisplayed()).toBe(true);
    });

});

