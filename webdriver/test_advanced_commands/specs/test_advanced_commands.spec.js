describe('test_advanced_command', () => {


    //сценарий 1

    it('should get the page title using execute()', async () => {
        await browser.url('https://www.epam.com/');
        const title = await browser.execute(() => document.title);
        expect(title).toBe("EPAM | Software Engineering & Product Development Services");
    });


    //сценарий 2

    it('should wait until the Investors button is displayed', async () => {
        await browser.url('https://www.epam.com/');
        const investorsButtonSelector = 'a[href="/investors"]';
        
        await browser.waitUntil(async () => {
            const isDisplayed = await $(investorsButtonSelector).isDisplayed();
            return isDisplayed;
        }, {
            timeout: 10000,
            timeoutMsg: 'Investors button was not displayed after 10 seconds'
        });
        
        const isDisplayed = await $(investorsButtonSelector).isDisplayed();
        expect(isDisplayed).toBe(true);
    });

    
    //сценарий 3

    it('should perform browser actions like scrolling and hovering', async () => {
        await browser.url('https://www.epam.com/');
        
        const investorsButton = await $('a[href="/investors"]');
        
        await browser.execute((element) => {
            element.scrollIntoView();
        }, investorsButton);
        
        await investorsButton.moveTo();
        
        const isDisplayed = await investorsButton.isDisplayed();
        expect(isDisplayed).toBe(true);
    });
    

    //бонус

    it('should set and get a cookie using execute()', async () => {
        await browser.url('https://www.epam.com/');
    
        await browser.execute(() => {
            document.cookie = "testCookie=cookieValue; path=/";
        });
        
        
        const cookieValue = await browser.execute(() => {
            const cookies = document.cookie.split('; ');
            const cookieObj = {};
            cookies.forEach(cookie => {
                const [name, value] = cookie.split('=');
                cookieObj[name] = value;
            });
            return cookieObj['testCookie'];
        });
        
        expect(cookieValue).toBe('cookieValue');
    });
    
    
});
