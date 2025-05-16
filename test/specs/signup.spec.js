const SignupPage = require('../pageobjects/signup.page.js');
const { generateInvalidFormData } = require('../../helpers/invalidData.js');

describe('Telnyx Signup Page', () => {
    it('should open correct url', async () => {
        await SignupPage.open();
        await expect(await browser.getUrl()).toBe('https://telnyx.com/sign-up');
    });

    it('should display main components of the page', async () => {
        await SignupPage.open();
        await expect(SignupPage.firstNameInput).toBeDisplayed();
        await expect(SignupPage.lastNameInput).toBeDisplayed();
        await expect(SignupPage.emailInput).toBeDisplayed();
        await expect(SignupPage.passwordInput).toBeDisplayed();
        await expect(SignupPage.submitButton).toBeDisplayed();
        await expect(SignupPage.termsAndConditionsCheckbox).toBeDisplayed();
    });

    it('should give all error messages when trying to submit no data', async () => {
        await SignupPage.submitButton.click();
        await expect(SignupPage.errorMessage).toBeElementsArrayOfSize({ gte: 5 });
    });

    it('should give all error messages when trying to submit invalid data', async () => {
        const invalid = generateInvalidFormData();
        await SignupPage.firstNameInput.setValue(invalid.name);
        await SignupPage.lastNameInput.setValue(invalid.name);
        await SignupPage.emailInput.setValue(invalid.email);
        await SignupPage.passwordInput.setValue(invalid.password);
        await SignupPage.submitButton.click();

        await expect(SignupPage.shortPasswordMessage).toBeDisplayed();
        await expect(SignupPage.termsAndConditionsMessage).toBeDisplayed();
        await expect(SignupPage.errorMessage).toBeElementsArrayOfSize({ gte: 5 });
    });
});