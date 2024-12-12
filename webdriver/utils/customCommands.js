module.exports.customClick = async function(selector) {
    const element = await $(selector);  
    await element.waitForDisplayed();   
    await element.click();              
};