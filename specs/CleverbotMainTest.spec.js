let data = require('../json/data'),
    objects = require('../json/objects');

let BasePage = require('../PageObjects/BasePage'),
    SignUpForm = require("../PageObjects/SignUpForm"),
    SignInForm = require('../PageObjects/SignInForm'),
    ChatPage = require('../PageObjects/ChatPage'),
    MailChecker = require('../utils/emailChecker');

describe('Basic chatting test', function () {
        let today = new Date();
        let Name = data.Name + today.getMilliseconds();
        let Email = Name + '@mailinator.com';

        it('should Fill Sign Up Form', function () {
            BasePage.navigateToURL(objects.testsiteURL);
            BasePage.OpenSignInUpForm();
            SignUpForm.fillOutSignUpForm(Name, data.FullName, Email, data.Password);
            expect(SignUpForm.HeaderMessage.getText()).toContain(data.SuccessfulLinkSending);
        });

        it('should check email and click verification link', function () {

            MailChecker.navigateToURL(objects.mailSiteURL);
            MailChecker.checkEmail(Email, data.MailSubj, data.LinkText);
            browser.ignoreSynchronization = true;
            expect(SignInForm.SignInHeader.getText()).toEqual(data.SuccessfulRegMessage);

        });

        it('should Sign In', function () {
            SignInForm.fillOutSignInForm(Name, data.Password);
            expect(ChatPage.LoggedName.getText()).toEqual(Name);
        });

        for (let i = 0; i < data.Phrases.length; i++) {
            it(`should Chat with bot ${i+1} time`, function () {
                ChatPage.ChatWithBot(data.Phrases[i]);
                expect(ChatPage.LatestBotsResponse.getText()).not.toEqual('');
            });
        }

});
