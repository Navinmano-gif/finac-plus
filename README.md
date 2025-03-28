# TASK 1 UI Automation Framework for Saucedemo.com

This repository contains a UI automation framework built using **Playwright** and **JavaScript** to test the **Add to Cart** functionality on **Saucedemo.com**. The framework follows the **Page Object Model (POM)** design pattern and incorporates error handling, proper setup/teardown, and logging.

## Test Scenario

The following steps are performed in this automation script:
1. Navigate to the site [Saucedemo.com](https://www.saucedemo.com/).
2. Login to the site using the credentials provided on the homepage.
3. Verify that successful login redirects the user to the **Products** page.
4. Get the **first product name** and **price**, and store **this information in a text file.**
5. Add the product to the shopping cart.
6. Navigate to the cart page and verify that the added product is displayed.
7. Logout from the website.


task/
├── pages/
│   ├── loginpage.js            # Contains details and methods for the login page
│   ├── productpage.js          # Contains details and methods for the product page
│   └── cartpage.js             # Contains details and methods for the cart page
├── test/
│   └── addcarttest.js          # Contains test logic for adding products to the cart
├── config/
│   ├── config.js               # Contains configuration settings for the application
│   └── jestconfig.js           # Configuration for Jest to handle test execution
├── utils/
│   ├── fileutils.js            # Utility functions for file operations like saving product info
│   └── ProductDetails.txt      # Stores the product information in text format
├── README.md                   # This file, describing the project structure and setup


To execute the test, run the following command:


open the file in vscode and proper file structure and use the below command.

npx playwright install   **For install playwright if required** 


  npx jest --detectOpenHandles **Command for execution of file** 

# TASK 2   

# API Automation Testing for GET Request

This repository contains an API automation testing script that makes a **GET request** to the **Request** demo API and verifies whether the response status code is `200` or not. This script uses JavaScript** an**Jd **Chai** (or another assertion library) for API testing.

## Test Scenario

1. Make a GET request to the [https://reqres.in/api/users/2](https://reqres.in/api/users/2) endpoint.
2. Validate whether the status code returned is `200`.


**ALternative With PYTHON SCRIPTS:** #api.py file Python
    # API Automation Testing for GET Request
This repository contains an API automation testing script that makes a **GET request** to the **Request** demo API and verifies whether the response status code is `200` or not. This script uses Python  (or another assertion library) for API testing.

## Test Scenario

1. Make a GET request to the [https://reqres.in/api/users/2](https://reqres.in/api/users/2) endpoint.
2. Validate whether the status code returned is `200`.

