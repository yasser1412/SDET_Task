const HtmlReporter = require('nightwatch-html-reporter');

// Configure the HTML Reporter
const htmlReporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: './UI/nightwatchReports',
  themeName: 'default',
  reportFilename: 'nightwatch-report.html',
  hideSuccess: false, // Show successful assertions
  relativeScreenshots: true,
  uniqueFilename: true,
  reportTitle: 'Detailed Nightwatch Test Report',
  enableCharts: true,
  useCssFile: true, // Use custom CSS file for styling
});

module.exports = {
  src_folders: ['UI/tests'], // Folder where your test cases are stored
  page_objects_path: ['UI/page-objects'], // Folder for Page Object files
  output_folder: './UI/nightwatchReports',

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/selenium-server',
    cli_args:['--port=4444'],
  },

  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
      screenshots: {
        enabled: false,
        on_failure: true,
        on_error: true,
        path: './UI/nightwatchReports/screenshots',
      },
      abortOnAssertionFailure: false,
      skip_testcases_on_fail: false,
    }
  },

  globals: {
    reporter: (results, done) => {
      htmlReporter.fn(results, done); // Correct way to generate the report
    }
  }
};
