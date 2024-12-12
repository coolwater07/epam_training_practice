
describe('test suite', () =>{

    it('first test', async () =>{
        await browser.url("https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Configuration Migration Guide - ESLint - Pluggable JavaScript Linter");
    })

})