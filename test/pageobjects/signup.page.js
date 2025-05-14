const { Page } = require('./page')

class SignupPage{

    get firstNameInput() {
        return $('#first_name');
    };

    get lastNameInput() {
        return $('#last_name');
    };

    get emailInput() {
        return $('#email');
    };

    get passwordInput() {
        return $('#password');
    };

    get submitButton() {
        return $('button[type="submit"]');
    };

    get errorMessage() {
        return $$('#error');
    };

    get termsAndConditionsCheckbox() {
        return $('#terms_and_conditions');
    }

    get termsAndConditionsMessage() {
        return $('#terms_and_conditions_message');
    };

    get shortPasswordMessage() {
        return $('#passwordMinLength');
    }

    async open() {
        await browser.url('/sign-up');
    }

}

module.exports = new SignupPage();