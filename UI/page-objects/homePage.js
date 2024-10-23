module.exports = {
    url: 'http://automationpractice.multiformis.com',

    elements: {
        searchField: '#search_query_top',
        searchButton: 'button[name="submit_search"]',
        resultsSection: '#center_column ul.product_list',
        resultItems: '#product_list a.product-name',
        resultCount: '.product-count'
    },
    
    commands: [{
        performSearch(term) {
            return this
                .waitForElementVisible('@searchField', 10000)
                .setValue('@searchField', term)
                .waitForElementVisible('@searchButton', 10000)
                .click('@searchButton');
        },

        verifySearchResultsContainText(expectedText) {
            const page = this;

            // Wait for the result section to be visible
            page.waitForElementVisible('@resultsSection', 10000, function () {
                // Fetch all result items
                page.api.elements('css selector', page.elements.resultItems.selector, function (result) {
                    console.log('Number of items found:', result.value.length);

                    result.value.forEach((element, index) => {
                        // Handle both legacy and W3C WebDriver formats for element IDs
                        const elementId = element?.ELEMENT || element['element-6066-11e4-a52e-4f735466cecf'];

                        if (elementId) {
                            // Use perform() to handle async behavior
                            page.api.perform(function (done) {
                                page.api.elementIdText(elementId, function (textResult) {
                                    if (textResult.status === 0) {
                                        const resultText = textResult.value.toLowerCase();
                                        console.log(`Result ${index + 1}: ${resultText}`);

                                        // assert that the result text contains the expected text
                                        page.assert.ok(
                                            resultText.includes(expectedText.toLowerCase()), 
                                            `Result ${index + 1} contains "${expectedText}"`
                                        );
                                    } else {
                                        console.error(`Failed to retrieve text for element at index ${index + 1}`);
                                    }

                                    done(); // Indicate completion of this async step
                                });
                            });
                        } else {
                            console.error(`Element ID not found for result ${index + 1}`);
                        }
                    });
                });
            });

            return this;
        },

        countResults() {
            const page = this;
            page.waitForElementVisible('@resultsSection', 10000, function () {
            // Get the number of listed items
                page.api.elements('css selector', page.elements.resultItems.selector, function (result) {
                    const listedCount = result.value.length;
                    console.log(`Number of listed items: ${listedCount}`);

                    // Get the displayed result count from the 'heading-counter' element
                    page.getText('@resultCount', function (resultText) {
                        // Extract the total number of items from the format "Showing 1 - 7 of 7 items"
                        const match = resultText.value.match(/of (\d+) item[s]?/);
                        const displayedCount = match ? parseInt(match[1], 10) : 0;
                        console.log(`Displayed result count: ${displayedCount}`);

                        // Compare listed count with displayed count
                        page.assert.equal(
                            listedCount,
                            displayedCount,
                            `Listed item count (${listedCount}) matches the displayed result count (${displayedCount})`
                        );
                    });
                });

            });
            return this;
            
        }
    }]
};