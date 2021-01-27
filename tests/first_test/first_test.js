// let {And} = require('cucumber');
const { I, homePage } = inject()

Given('I visit', () => {
    homePage.visit()
});

Given(/^I scroll down$/, function () {
    homePage.scrollDown()
});