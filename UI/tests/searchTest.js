module.exports = {
    'Search for a word and verify results': function (browser) {
      const homePage = browser.page.homePage();
      const searchQuery = 'dress';

      homePage
        .navigate()
        .performSearch(searchQuery)
        .verifySearchResultsContainText(searchQuery);  // Verify that each result contains "Blouse"
      
      browser.end();
    },

    'Search for "dress" then Count and verify the total number of results': function (browser) {
      const homePage = browser.page.homePage();
      const searchQuery = 'dress';

      homePage
        .navigate()
        .performSearch(searchQuery)
        .countResults()  // Count and verify the total number of results
        
      browser.end();
    }
  };
  