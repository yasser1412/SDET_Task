module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',

    elements: {
        subjectDropdown: '#id_contact',
        emailField: '#email',
        orderReferenceField: '#id_order',
        messageField: '#message',
        fileUploadField: 'input[type="file"]',
        sendButton: '#submitMessage',
        successAlert: '.alert-success',
        errorAlert: '.alert-danger'
    },

    commands: [{
        /**
         * Fills the contact form fields dynamically.
         * @param {object} fields - An object containing form field values.
         */
        fillContactForm(fields) {
            if (fields.subject) {
                this.click('@subjectDropdown')
                    .click(`option[value="${fields.subject}"]`);
            }
            if (fields.email) {
                this.setValue('@emailField', fields.email);
            }
            if (fields.orderReference) {
                this.setValue('@orderReferenceField', fields.orderReference);
            }
            if (fields.message) {
                this.setValue('@messageField', fields.message);
            }
            if (fields.filePath) {
                this.setValue('@fileUploadField', require('path').resolve(__dirname, fields.filePath));
            }

            return this;
        },

        /**
         * Submits the form and expects a success alert.
         */
        submitAndExpectSuccess() {
            this.click('@sendButton')
                .waitForElementVisible('@successAlert', 100000)
                .expect.element('@successAlert').text.to.contain('Your message has been successfully sent');

            return this;
        },

        /**
         * Submits the form and expects an error alert.
         */
        submitAndExpectError() {
            this.click('@sendButton')
                .waitForElementVisible('@errorAlert', 10000)
                .expect.element('@errorAlert').text.to.contain('There is 1 error');

            return this;
        }
    }]
};
