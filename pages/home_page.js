const {I} = inject();

module.exports = {
    locators: {
        searchBox: '.header-search-input'
    },

    visit() {
        I.amOnPage('/en/new')
    },

    scrollDown() {
        I.scrollPageToBottom();
    }
};

