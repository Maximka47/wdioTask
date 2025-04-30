
const HomePage = require('../pageobjects/home.page');

describe('Telnyx Home Page', () => {
    it('should open correct url', async () => {
        await HomePage.open();
        await expect( await browser.getUrl()).toBe('https://telnyx.com/');
    });

    it('should display main components of the page', async () => {
        await HomePage.open();
        await expect(HomePage.header).toBeDisplayed();
        await expect(HomePage.main).toBeDisplayed();
        await expect(HomePage.footer).toBeDisplayed();
        await expect(await browser.getTitle()).toBe('Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking');

    });

    it('should have correct social links in footer', async () => {
        await HomePage.open();
        await expect(await HomePage.socialFacebookLink).toContain('facebook');
        await expect(await HomePage.socialLinkedInLink).toContain('linkedin');
        await expect(await HomePage.socialTwitterLink).toContain('twitter');
    })

    it('should have correct links  to sign up, login and contact us', async () => {
        await HomePage.open();
        
        await expect(await HomePage.signUpLink).toContain('/sign-up');
        await expect(await HomePage.loginLink).toContain('portal.telnyx.com');
        await expect(await HomePage.contactUsLink).toContain('/contact-us');
    });

    it('should have correct links in resources tab', async () => {
        await HomePage.open();
        await HomePage.resourcesButton.click();
        await expect(await HomePage.resourcesTab).toBeDisplayed();
        await expect(await HomePage.customerStoriesLink).toContain('/customer-stories');
        await expect(await HomePage.resourceCenterLink).toContain('/resources');
        await expect(await HomePage.supportCenterLink).toContain('https://support.telnyx.com/');
    });

});