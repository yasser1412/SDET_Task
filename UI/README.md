# **SDET 2024 [My Store](http://automationpractice.multiformis.com/index.php) User Scenarios**

For Google Docs Version Click [HERE](https://docs.google.com/document/d/1oCb3mh8DT5X3LU1OJOOtjK4FOEokgf0P-8U_MvFmnOI/edit?usp=sharing)
#

[Contact Us Page](#Contact-Us)

[Search Page](#Search-Page)

[Printed Summer Dress Page](#Item-Page)

# Contact Us

## **High Priority Scenarios**

#### **1\. Successful Submission with All Fields**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, order reference, message, and attach a file.  
  3. Click the "Submit" button.  
* **Expected Result:** The form is successfully submitted, and a success message is displayed.  
* **Priority:** **High** – Ensures the core functionality of the form works correctly when all inputs are filled, enabling users to contact support effectively.


#### **2\. Submission without Optional Fields**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, and message fields.  
  3. Leave the order reference and file attachment blank.  
  4. Click the "Submit" button.  
* **Expected Result:** The form is successfully submitted, and a success message is displayed.  
* **Priority:** **High** – Users should be able to contact support without providing optional details, ensuring faster submission and communication.


#### **3\. Form Resubmission after Error**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Submit the form with a missing email to generate an error.  
  3. Enter a valid email and resubmit.  
* **Expected Result:** The form is successfully resubmitted, and a success message is displayed.  
* **Priority:** **High** – Allows users to correct errors and resubmit the form without confusion, providing a user-friendly experience.


#### **4\. Missing Email Address**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, order reference, and message fields.  
  3. Leave the email field blank.  
  4. Click the "Submit" button.  
* **Expected Result:** An error message is displayed, indicating that an email is required.  
* **Priority:** **High** – Ensures that users cannot submit the form without providing essential information like an email address.


#### **5\. Missing Subject Heading**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the email, order reference, and message fields.  
  3. Leave the subject heading blank.  
  4. Click the "Submit" button.  
* **Expected Result:** An error message is displayed, indicating that the subject is required.  
* **Priority:** **High** – Ensures that users provide context (subject) for their message, making it easier for support to categorize and address the issue.


#### **6\. Missing Message**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, and order reference fields.  
  3. Leave the message field blank.  
  4. Click the "Submit" button.  
* **Expected Result:** An error message is displayed, indicating that a message is required.  
* **Priority:** **High** – Prevents empty submissions, ensuring that users provide the necessary information for support to respond effectively.


  ## **Medium Priority Scenarios**

#### **7\. Invalid Email Format**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, order reference, and message fields.  
  3. Enter an invalid email format (e.g., "invalid-email").  
  4. Click the "Submit" button.  
* **Expected Result:** An error message is displayed, indicating that the email format is invalid.  
* **Priority:** **Medium** – Validates user input, ensuring that only properly formatted email addresses are accepted for communication.


#### **8\. Attach Large File**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, and message fields.  
  3. Attach a large but valid file (e.g., PDF).  
  4. Click the "Submit" button.  
* **Expected Result:** The form is successfully submitted, and a success message is displayed.  
* **Priority:** **Medium** – Ensures that the system can handle large file uploads, which is useful for users but not critical for basic communication.


#### **9\. Attach Invalid File Format**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, and message fields.  
  3. Attach an invalid file format (e.g., `.exe`).  
  4. Click the "Submit" button.  
* **Expected Result:** An error message is displayed, indicating that the file format is not supported.  
* **Priority:** **Medium** – Improves security and ensures that only valid file types can be uploaded, enhancing the user experience.

  ## **Low Priority Scenarios**

#### **10\. Submission with File Upload**

* **Steps:**  
  1. Navigate to the Contact Us page.  
  2. Fill in the subject, email, and message fields.  
  3. Attach a valid file (e.g., PDF).  
  4. Click the "Submit" button.  
* **Expected Result:** The form is successfully submitted, and a success message is displayed.  
* **Priority:** **Low** – Verifies the file upload functionality, which is useful but not critical for basic form submission.
#
# Search Page

## **High Priority Scenarios**

#### **1\. Search for a Word and Verify Results**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter "Dress" in the search field.  
  3. Click the "Search" button.  
* **Expected Result:** Results containing the word "Dress" are displayed.  
* **Priority:** **High** – Ensures the core search functionality works, allowing users to find relevant products.


  #### **2\. Search for a Word, then Count and Verify Total Number of Results**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter "dress" in the search field.  
  3. Click the "Search" button.  
  4. Count the total number of results displayed.  
* **Expected Result:** The total number of results matches the count displayed in the results header.  
* **Priority:** **High** – Ensures that the result count is accurate, helping users gauge the number of relevant results for their query.

  ## **Medium Priority Scenarios**

  #### **3\. No Results Found for a Search Term**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter "xyzabc" (non-existent term) in the search field.  
  3. Click the "Search" button.  
* **Expected Result:** A message is displayed indicating that no results were found for the search term.  
* **Priority:** **Medium** – Verifies that the system handles empty search results correctly, providing feedback to users.


  #### **4\. Search with Partial Word Match**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter "blou" (partial word) in the search field.  
  3. Click the "Search" button.  
* **Expected Result:** Results containing words that partially match the input are displayed.  
* **Priority:** **Medium** – Enhances search flexibility, allowing users to find products even if they enter partial words.


  #### **5\. Search with Uppercase/Lowercase Variations**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter "Dress" (uppercase) in the search field.  
  3. Click the "Search" button.  
  4. Enter "dress" (lowercase) in the search field.  
  5. Click the "Search" button.  
* **Expected Result:** The results are the same for both searches, indicating case-insensitive functionality.  
* **Priority:** **Medium** – Ensures that the search is case-insensitive, providing a consistent user experience regardless of input case.


  ## **Low Priority Scenarios**

  #### **6\. Search with Blank Input**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Leave the search field blank.  
  3. Click the "Search" button.  
* **Expected Result:** An error message is displayed prompting the user to enter a search keyword.  
* **Priority:** **Low** – Ensures that users receive feedback when attempting to search without entering any input.


  #### **7\. Search with Special Characters**

* **Steps:**  
  1. Navigate to the homepage.  
  2. Enter special characters (e.g., "@\#$%") in the search field.  
  3. Click the "Search" button.  
* **Expected Result:** A message is displayed indicating that no results were found for the search term.  
* **Priority:** **Low** – Improves user guidance by handling unexpected inputs and providing feedback.
#

# Item Page

## **High Priority Scenarios**

#### **1\. Checking Product Availability**

* **Scenario:** User checks product availability based on size and color combinations.  
* **Steps:**  
  1. Look at the availability message below the product description.  
* **Expected Result:** The message clearly indicates the availability based on the selected attributes.  
* **Priority:** **High** – Users need to understand whether a product is available to make a purchasing decision.


#### **2\. Selecting Size**

* **Scenario:** User selects a size to see if the product is available.  
* **Steps:**  
  * Click on the "Size" dropdown.  
  * Choose a size (e.g., S, M, or L).  
* **Expected Result:**  
  * **S size**: Unavailable with any color.  
  * **M size**: Available with all colors except **yellow**.  
  * **L size**: Available only with **yellow**.  
* **Priority:** **High** – Size selection is critical for product customization and availability.


  #### **3\. Selecting Color**

* **Scenario:** User selects a color to check if the product is available.  
* **Steps:**  
  * Click on one of the available color options (e.g., yellow, blue, black).  
* **Expected Result:**  
  * **Yellow color**: Available only with **L size**.  
  * **Blue/Black color**: Available with **M size**.  
* **Priority:** **High** – Color selection impacts the user’s decision and product availability.


  #### **4\. Adding Available Combinations to Cart**

* **Scenario:** User tries to add a valid size and color combination to the cart.  
* **Steps:**  
  1. Select **L size** and **yellow** color, or **M size** with **blue**/ **black**.  
  2. Click "Add to Cart."  
* **Expected Result:** The product is successfully added to the cart with a valid combination.  
* **Priority:** **High** – Users need to be able to add available products to the cart to proceed with purchasing.


  ## **Medium Priority Scenarios**

  #### **5\. Viewing Product Details**

* **Scenario:** User views detailed information about the "Printed Summer Dress."  
* **Steps:**  
  1. Open the product page.  
* **Expected Result:** The user can see the product name, reference, condition, description, price, and discount.  
* **Priority:** **Medium** – Product details are essential for users to make informed purchasing decisions.


  #### **6\. Navigating through Product Images**

* **Scenario:** User navigates through the gallery of product images.  
* **Steps:**  
  1. Click on the main product image or one of the smaller images below.  
* **Expected Result:** The main image updates to show the selected image.  
* **Priority:** **Medium** – Product visuals influence buying decisions, but they don't affect core functionality.


  #### **7\. Viewing Price Details**

* **Scenario:** User checks the product's price, discount, and final cost.  
* **Steps:**  
  1. Observe the displayed price and discount.  
* **Expected Result:** The user sees both the original price (strikethrough) and the discounted price in red.  
* **Priority:** **Medium** – Pricing information is crucial, but it's static compared to dynamic availability changes.


  ## **Low Priority Scenarios**

  #### **8\. Printing Product Details**

* **Scenario:** User wants to print the product details.  
* **Steps:**  
  1. Click the "Print" button.  
* **Expected Result:** A print dialog opens with the product details.  
* **Priority:** **Low** – Printing is useful for some users but not a common action.


  #### **9\. Sharing the Product on Social Media**

* **Scenario:** User wants to share the product on social media.  
* **Steps:**  
  1. Click on one of the share buttons (e.g., Twitter, Facebook, Pinterest).  
* **Expected Result:** A new window or popup opens to share the product on the selected platform.  
* **Priority:** **Low** – While helpful for marketing, it's less critical for individual purchasing decisions.


  #### **10\. Breadcrumb Navigation**

* **Scenario:** User navigates back to the category or main menu using breadcrumbs.  
* **Steps:**  
  1. Click on any breadcrumb link (e.g., "Women," "Dresses").  
* **Expected Result:** The user is redirected to the respective category or homepage.  
* **Priority:** **Low** – Navigation aids are useful for browsing but not crucial to the purchasing process.
