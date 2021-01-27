exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.oranum.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    homePage: './pages/home_page.js',
    // ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/*.feature',
    steps: ['./tests/first_test/first_test.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'codeceptTask'
}

