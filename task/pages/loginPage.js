
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[id="user-name"]';
        this.passwordInput = 'input[id="password"]';
        this.loginButton = 'input[id="login-button"]';
    }

    async navigateTo() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoggedIn() {
        // Check if an element is visible after successful login
        try {
          // Wait for an element that only appears after a successful login, like the products list
          await this.page.waitForSelector('.inventory_list', { timeout: 5000 }); // Adjust the selector based on the page
          return true;
        } catch (error) {
          // If the element is not found, it means the login failed
          return false;
        }
      }
    }


module.exports = LoginPage;
