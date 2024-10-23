module.exports = {
    'Successful Submission with All Fields': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',  // Assuming '2' is 'Customer service'
                email: 'test@example.com',
                orderReference: '12345',
                message: 'This is a test message.',
                filePath: '../testfiles/samplefile.pdf'  // Replace with actual file path
            })
            .submitAndExpectSuccess();
    },

    'Submission without Optional Fields': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'test@example.com',
                message: 'This is a test message.'
            })
            .submitAndExpectSuccess();
    },

    'Submission with File Upload': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'test@example.com',
                message: 'This is a file upload test.',
                filePath: '../testfiles/samplefile.pdf'  // Replace with actual file path
            })
            .submitAndExpectSuccess();
    },

    'Missing Subject Heading': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                email: 'test@example.com',
                orderReference: '12345',
                message: 'This is a test message.'
            })
            .submitAndExpectError();
    },

    'Missing Email Address': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                orderReference: '12345',
                message: 'This is a test message.'
            })
            .submitAndExpectError();
    },

    'Missing Message': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'test@example.com',
                orderReference: '12345'
            })
            .submitAndExpectError();
    },

    'Invalid Email Format': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'invalid-email',
                orderReference: '12345',
                message: 'This is a test message.'
            })
            .submitAndExpectError();
    },

    'Attach Invalid File Format': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'test@example.com',
                message: 'Trying to upload an invalid file.',
                filePath: '../testfiles/samplefile.exe'  // Replace with actual invalid file path
            })
            .submitAndExpectError();
    },

    'Attach Large File': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                email: 'test@example.com',
                message: 'Trying to upload a large file.',
                filePath: '../testfiles/largesamplefile.pdf'  // Replace with actual large file path
            })
            .submitAndExpectSuccess();
    },

    'Form Resubmission after Error': function (browser) {
        const contactUsPage = browser.page.contactUsPage();

        // First, try submitting with a missing email to generate an error
        contactUsPage.navigate()
            .fillContactForm({
                subject: '2',
                message: 'This is a test message.'
            })
            .submitAndExpectError();

        // Now, fill in the missing email and resubmit
        contactUsPage.fillContactForm({
                email: 'test@example.com'
            })
            .submitAndExpectSuccess();
    },

    after: function (browser) {
        browser.end();
    }
};
