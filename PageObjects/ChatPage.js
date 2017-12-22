let objects = require("../json/objects.json"),
    EC = protractor.ExpectedConditions;

class ChatPage {
    constructor(){
        this.ChatTextBox = $(objects.Locators.MainPage.ChatPage.ChatTextField);
        this.ThinkAboutItBtn = $(objects.Locators.MainPage.ChatPage.ThinkAboutItBtn);
        this.ThinkAboutMeBtn = $(objects.Locators.MainPage.ChatPage.ThinkAboutMeBtn);
        this.ThoughtsSoFarBtn = $(objects.Locators.MainPage.ChatPage.ThoughtsSoFarBtn);
        this.LatestBotsResponse = $(objects.Locators.MainPage.ChatPage.LatestBotsResponse);
        this.LoggedName = $(objects.Locators.MainPage.NameIfLoggedIn);
    }

    ChatWithBot(Phrase){
        this.ChatTextBox.sendKeys(Phrase);
        this.ThinkAboutItBtn.click();
        browser.wait(EC.visibilityOf($('#snipTextIcon')), 10000);
    }
}

module.exports = new ChatPage();