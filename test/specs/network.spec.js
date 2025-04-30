const NetworkPage = require('../pageobjects/network.page');

describe('Telnyx Network Page', () => {
    it('should open correct url', async () => {
        await NetworkPage.open();
        await expect(await browser.getUrl()).toBe('https://telnyx.com/our-network');
    });

    it('should display main components of the page', async () => {
        await NetworkPage.open();
        await expect(NetworkPage.header).toBeDisplayed();
        await expect(NetworkPage.main).toBeDisplayed();
        await expect(NetworkPage.footer).toBeDisplayed();
        await expect(await browser.getTitle()).toBe('Our private, global, multi-cloud IP network');
    });

    it('should have correct links to sign up and contact us', async () => {
        await NetworkPage.open();
        await expect(await NetworkPage.signupLink).toContain('/sign-up');
        await expect(await NetworkPage.contactUsLink).toContain('/contact-us');
    });

    it('glider track with Products, Solutions and Stories should be visible ', async () => {
        await NetworkPage.open();
        await expect(NetworkPage.gliderTrack).toBeDisplayed();
    });

    it('should have correct number of glider links', async () => {
        await NetworkPage.open();
        await expect(await NetworkPage.gliderLinks.length).toBe(3);
    });

    it('should have correct links in glider', async () => {
        await NetworkPage.open();
        const gliderLinks = await NetworkPage.gliderLinks.map(async (link) => {
            return await link.getAttribute('href');
        });
        for (let i = 0; i < await gliderLinks.length; i++) {
            await expect(await gliderLinks[i]).not.toBeNull();
        }
    });

    it('should have correct FAQ section', async () => {
        await NetworkPage.open();
        await expect(NetworkPage.faqSection).toBeDisplayed();
    });

    it('should have correct FAQ title', async () => {
        await NetworkPage.open();
        await expect(await NetworkPage.faqTitle).toBe('FAQ');
    });
});