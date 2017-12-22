let objects = require("../json/objects.json"),
    EC = protractor.ExpectedConditions;

class SignInForm {
    constructor() {
        this.Username = $(objects.Locators.MainPage.SignInForm.Username);
        this.Password = $(objects.Locators.MainPage.SignInForm.Password);
        this.PassClear = $(objects.Locators.MainPage.SignInForm.PassFieldClear);
        this.SignInBtn = $(objects.Locators.MainPage.SignInForm.SignInBtn);
        this.SignInHeader = $(objects.Locators.MainPage.SignInForm.SignInHeader);
    };

    fillOutSignInForm(Name, Password){

        this.Username.sendKeys(Name);
        this.PassClear.click();
        this.Password.sendKeys(Password);
        this.SignInBtn.click();
        browser.wait(EC.invisibilityOf(this.SignInBtn));

    }
}

module.exports = new SignInForm();