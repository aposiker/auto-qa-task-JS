let  objects = require("../json/objects.json");

class BasePage {
    constructor() {
        this.navigateToURL = function (url) {

            browser.get(url);
        };
        this.SignInUpBtn = $(objects.Locators.MainPage.SignInUpBtn);


    }

    OpenSignInUpForm(){

        this.SignInUpBtn.click();
    };

}

module.exports = new BasePage();