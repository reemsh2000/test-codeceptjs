exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout:20000,
  multiple: {
    basic: {
      browsers: ["chrome", "firefox"]
    }
  },
  helpers: {
    Playwright: {
      url: 'https://www.diagrams.net/',
      show: true,
      waitForAction:1500,
      waitForTimeout:60000,
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsdemo'
}