module.exports = {
    'Search for "dress" and verify results': function (browser) {
      const homePage = browser.page.homePage();
  
      homePage
        .navigate()
        .performSearch('dress')
        .verifySearchResultsContainText('dress');  // Verify that each result contains "Blouse"
      
      browser.end();
    },

    'Search for "dress" then Count and verify the total number of results': function (browser) {
      const homePage = browser.page.homePage();
  
      homePage
        .navigate()
        .performSearch('dress')
        .countResults()  // Count and verify the total number of results
        
      browser.end();
    }
  };
  