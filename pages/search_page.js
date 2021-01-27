const {I} = inject();

module.exports = {
    locators: {
        cardTitles: '[class="list__item-title"] h2',
    },

    getAllTitles() {
        //stex ogtagorcum protractor@ vorpes helper em kanchum vor listi meji sax elementneri text antribut@ stananq
        const driver = this.helpers['Protractor'].browser
        let elements = driver.element.all(by.css(this.locators.cardTitles)).getAttribute("text");
        console.log(elements)
    },
}

