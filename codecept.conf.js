exports.config = {
  output: './output',
  helpers: {
    Playwright: {  //stex protractor a petq dnel helper@ vor karananqn ogtagorcenq bayc vor anum run em tali error a stacvum
      url: 'https://www.oranum.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    homePage: './pages/home_page.js',
    searchPage: './pages/search_page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/*.feature',
    steps: ['./tests/req2/req2.js']
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

