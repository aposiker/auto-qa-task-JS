let EC = protractor.ExpectedConditions;

class EmailChecker{
    constructor(){
        browser.ignoresynchronization = false;
        this.navigateToURL = function (url) {

            browser.get(url);
        };
        this.MailBoxFinder = $("#inbox_field");
        this.InboxBtn = $("#inbox_button");
    }

    checkEmail(BoxAddress, MailSubj, LinkText){
        this.MailBoxFinder.sendKeys(BoxAddress);
        this.InboxBtn.click();
        browser.wait(EC.visibilityOf(element(by.xpath("//div[.='" + MailSubj + "']"))), 5000);
        element(by.xpath("//div[.='" + MailSubj + "']")).click();
        browser.switchTo().frame('msg_body')
            .then(() => {
                let link = element(By.partialLinkText(LinkText));
                browser.wait(EC.elementToBeClickable(link));
                link.click();
                browser.getAllWindowHandles()
                    .then((handles) => browser.switchTo().window(handles[1]))
            })

    }
}
module.exports = new EmailChecker();