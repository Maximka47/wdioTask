const { Page } = require('./page');

class StoriesPage {
    get header() {
        return $('header');
    };

    get main() {
        return $('main');
    };

    get footer(){
        return $('footer');
    };

    get storiesList(){
        return $$("/html/body/div[1]/div/main/section[3]/div[3]/div");
    };

    get contactUsLink(){
        return $("//main/div[2]/div/div[2]/div/a[2]").getAttribute('href');
    };

    get signupLink(){
        return $("//main/div[2]/div/div[2]/div/a[1]").getAttribute('href');
    };

    get statsSection(){
        return $("//main/div[1]");
    };
    

    open() {
        return browser.url('/customer-stories');
    };
};

module.exports = new StoriesPage();