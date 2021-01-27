const {I} = inject();

module.exports = {
    locators: {
        searchBtn: '[class*="search__btn "]',
        searchField: '[id="header_search_bar"]',
        showResults: '[class*="search_for"] a'
    },

    visit() {
        I.amOnPage('/en/new')
    },

    clickOnSearch() {
        I.click(this.locators.searchBtn)
    },

    fillSearchField(arg) {
        I.fillField({css: this.locators.searchField}, arg)
    },

    clickOnShowResult() {
        I.click(this.locators.showResults)
    }
};

