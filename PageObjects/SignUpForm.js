let objects = require("../json/objects.json"),
    SelectWrapper = require("../utils/select-wrapper"),
    EC = protractor.ExpectedConditions;

class SignUpForm {
    constructor() {
        this.Username = $(objects.Locators.MainPage.SignUpForm.Username);
        this.FullName = $(objects.Locators.MainPage.SignUpForm.Fullname);
        this.Email = $(objects.Locators.MainPage.SignUpForm.Email);
        this.Password = $(objects.Locators.MainPage.SignUpForm.Password);
        this.PassClear = $(objects.Locators.MainPage.SignUpForm.PassFieldClear);
        this.PolicyDropdown = new SelectWrapper(by.css(objects.Locators.MainPage.SignUpForm.AgreePolicyDropdown));
        this.SignUpBtn = $(objects.Locators.MainPage.SignUpForm.SignUpBtn);
        this.HeaderMessage = $(objects.Locators.MainPage.SignUpForm.SignUpHeaderMessage);
    };

    fillOutSignUpForm(Name, FullName, Email, Password){
        this.Username.sendKeys(Name);
        this.FullName.sendKeys(FullName);
        this.Email.sendKeys(Email);
        this.PassClear.click();
        this.Password.sendKeys(Password);
        this.PolicyDropdown.selectByText("yes");
        this.SignUpBtn.click();
        browser.wait(EC.visibilityOf(this.HeaderMessage), 4000);
    }
}

module.exports = new SignUpForm();
