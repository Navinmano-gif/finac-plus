
const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');
const { writeToFile } = require('../utils/fileUtils');

let browser, page, loginPage, productsPage, cartPage;
jest.setTimeout(120000); 

beforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
});

afterAll(async () => {
      

  // Close the browser 
  await browser.close();
});

test('Add product to cart and verify', async () => {
    await page.goto('https://www.saucedemo.com', { timeout: 1200000 });
  await loginPage.login('standard_user', 'secret_sauce');
  expect(await loginPage.isLoggedIn()).toBe(true);

  const { productName, productPrice } = await productsPage.getFirstProductDetails();
  console.log(`Product Name: ${productName}, Price: ${productPrice}`);
  await writeToFile('productDetails.txt', `Product: ${productName}, Price: ${productPrice}\n`);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
  const cartItemName = await cartPage.getCartItemName();
  expect(cartItemName).toContain(productName);

  await page.click('.bm-burger-button'); 
await page.waitForTimeout(500); // Wait for a small time to ensure the menu has opened
await page.waitForSelector('#logout_sidebar_link', { visible: true }); 
await page.click('#logout_sidebar_link'); 
});
