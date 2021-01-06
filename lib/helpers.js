module.exports = {
    clickSelector: async function(page, selector) {
        try {
                await page.waitForSelector(selector)
                await page.click(selector)
        }
        catch (error) {
            throw new Error('couldnt find the button: ${selector}')

        }
    },
    clickXpath: async function(page, selector) {
        try{
                await page.waitForXPath(selector)
                const elements = await page.$x(selector)
                await elements[0].click() 
        }
        catch (error) {
            throw new Error('couldnt find the button: ${selector}')

        }

    },
    typetext: async function(page, selector, text) {
        try {
                await page.waitForSelector(selector)
                await page.type(selector, text)
        }
        catch (error) {
            throw new Error('couldnt find: ${selector}')

        }
    },
};