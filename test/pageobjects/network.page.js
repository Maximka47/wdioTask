const { Page } = require('./page');

class NetworkPage{
    get header() {
        return $('header');
    };

    get main() {
        return $('main');
    };

    get footer(){
        return $('footer');
    };

    get contactUsLink(){
        return $("//main/section[1]/div/div[3]/div/a[2]").getAttribute('href');
    };

    get signupLink(){
        return $("//main/section[1]/div/div[3]/div/a[1]").getAttribute('href');
    };

    get gliderTrack()   {
        return $(".glider-track");
    }

    get gliderLinks(){
        return $$("//main/section[3]/div[2]/div/div[1]/div/div/div/a");
    }

    get faqSection(){
        return $("//main/section[5]/div");
    }
    get faqTitle(){
        return $("//strong[@id='faq']").getText();
    }

    open() {
        return browser.url('/our-network');
    };
};

module.exports = new NetworkPage();