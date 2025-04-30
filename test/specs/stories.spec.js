
const StoriesPage = require('../pageobjects/stories.page');

describe('Telnyx Customers Stories Page', () => {
    it('should open correct url', async () => {
        await StoriesPage.open();
        await expect(await browser.getUrl()).toBe('https://telnyx.com/customer-stories');
    });

    it('should display main components of the page', async () => {
        await StoriesPage.open();
        await expect(StoriesPage.header).toBeDisplayed();
        await expect(StoriesPage.main).toBeDisplayed();
        await expect(StoriesPage.footer).toBeDisplayed();
        await expect(await browser.getTitle()).toBe('Customer Stories - Telnyx Telecom Use Case Studies');
    });

    it('should have correct number of stories', async () => {
        await StoriesPage.open();
        await expect(await StoriesPage.storiesList.length).toBe(25);
    });

    it('should have correct stories titles', async () => {
        await StoriesPage.open();
        const storiesTitles = await StoriesPage.storiesList.map(async (story) => {
            return await story.getText();
        });
        for (let i = 0; i < await storiesTitles.length; i++) {
            await expect(await storiesTitles[i]).not.toBeNull();
        }
    });

    it('should have correct stories descriptions', async () => {
        await StoriesPage.open();
        const storiesDescriptions = await StoriesPage.storiesList.map(async (story) => {
            return await story.getText();
        });
        for (let i = 0; i < await storiesDescriptions.length; i++) {
            await expect(await storiesDescriptions[i]).not.toBeNull();
        }
    });

    it('should have correct links to sign up and contact us', async () => {
        await StoriesPage.open();
        await expect(await StoriesPage.signupLink).toContain('/sign-up');
        await expect(await StoriesPage.contactUsLink).toContain('/contact-us');
    });

    it('should have correct stats section', async () => {
        await StoriesPage.open();
        await expect(StoriesPage.statsSection).toBeDisplayed();
    });

});