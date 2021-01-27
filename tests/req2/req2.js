const { I, homePage, searchPage } = inject()

Given(/^I fill search field$/, function () {
    homePage.clickOnSearch()
    homePage.fillSearchField("Matt")
    homePage.clickOnShowResult()
    searchPage.getAllTitles()
});

Given(/^I visit$/, function () {
    homePage.visit()
});