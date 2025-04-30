const { Page } = require('./page')


class HomePage {

    get header() {
        return $('header');
    };

    get main() {
        return $('main');
    };

    get footer(){
        return $('footer');
    };

    get socialFacebookLink(){
        return $("//footer/div[1]/div[3]/ul/ul/li[3]/a").getAttribute('href');
    };

    get socialTwitterLink(){
        return $("//footer/div[1]/div[3]/ul/ul/li[2]/a").getAttribute('href');
    };

    get socialLinkedInLink(){
        return $("//footer/div[1]/div[3]/ul/ul/li[1]/a").getAttribute('href');
    };

    get signUpLink(){
        return $("//header/div[2]/div/div[2]/a[5]").getAttribute('href');
    } ;  

    get loginLink(){
        return $("/html/body/div[1]/div/div/header/div[1]/a[4]").getAttribute('href');
    };

    get contactUsLink(){
        return $("//header/div[1]/a[3]").getAttribute('href');
    };

    get resourcesButton(){
        return $("//header/div[2]/div/div[2]/div/button[4]");
    };
    
    get resourcesTab(){
        return $("//header/div[2]/div/div[2]/div/div/div/nav/div/div");
    }

    get customerStoriesLink(){
        return $("//header/div[2]/div/div[2]/div/div/div/nav/div/div/li[1]/div/a").getAttribute('href');    
    }

    get resourceCenterLink(){
        return $("//header/div[2]/div/div[2]/div/div/div/nav/div/div/li[2]/div/a").getAttribute('href');    
    }

    get supportCenterLink(){
        return $("//header/div[2]/div/div[2]/div/div/div/nav/div/div/li[3]/div/a").getAttribute('href');    
    }


    open() {
        return browser.url('/');
    };
}

module.exports = new HomePage();