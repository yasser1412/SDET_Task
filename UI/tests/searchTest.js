module.exports = {
    'Search for "dress" and verify results': function (browser) {
      const homePage = browser.page.homePage();
  
      homePage
        .navigate()
        .performSearch('dress')
        .countResults()  // Count the total number of results
        .verifySearchResultsContainText('dress');  // Verify that each result contains "Blouse"
      
      browser.end();
    }
  };
  