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

To execute the test, run the following command:
open the file in vscode and proper file structure and use the below command.

npx playwright install   **For install playwright if required** 
  npx jest --detectOpenHandles **Command for execution of file** 

# TASK 2   

