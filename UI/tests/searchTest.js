module.exports = {
  'Search for a Word and Verify Results': function (browser) {
    const searchPage = browser.page.searchPage();

    const searchQuery = 'Dress';

    searchPage
      .navigate()
      .performSearch(searchQuery)
      .verifySearchResultsContainText(searchQuery);

    browser.end();
  },

  'Search for a word then Count and verify the total number of results': function (browser) {
    const searchPage = browser.page.searchPage();
    const searchQuery = 'dress';

    searchPage
      .navigate()
      .performSearch(searchQuery)
      .countResults()  // Count and verify the total number of results
      
    browser.end();
  },

  'No Results Found for a Search Term': function (browser) {
    const searchPage = browser.page.searchPage();
    const searchQuery = 'xyzabc'; // Non-existent term

    searchPage
      .navigate()
      .performSearch(searchQuery)
      .assert.containsText('@noResultsMessage', `No results were found for your search "${searchQuery}"`);

    browser.end();
  },

  'Search with Special Characters': function (browser) {
    const searchPage = browser.page.searchPage();
    const searchQuery = '@#$%'; // Special characters

    searchPage
      .navigate()
      .performSearch(searchQuery)
      .assert.containsText('@noResultsMessage', `No results were found for your search "${searchQuery}"`);

    browser.end();
  },

  'Search with Blank Input': function (browser) {
    const searchPage = browser.page.searchPage();

    searchPage
      .navigate()
      .performSearch("")
      .assert.containsText('@noResultsMessage', 'Please enter a search keyword'); // Assuming an error message appears in body

    browser.end();
  },

  'Search with Partial Word Match': function (browser) {
    const searchPage = browser.page.searchPage();
    const searchQuery = 'blou'; // Partial word

    searchPage
      .navigate()
      .performSearch(searchQuery)
      .verifySearchResultsContainText(searchQuery);

    browser.end();
  },
};
  