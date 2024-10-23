module.exports = {
    reporters: [
      'default',
      [
        'jest-html-reporter',
        {
          pageTitle: 'Test Report',
          outputPath: 'API/jestReports/test-report.html',
          includeFailureMsg: true,
          includeSuiteFailure: true,
          includeConsoleLog: true,
        }
      ]
    ]
  };
  