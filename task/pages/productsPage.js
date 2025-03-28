
class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productNameSelector = '.inventory_item_name';
        this.productPriceSelector = '.inventory_item_price';
        this.addToCartButton = '.btn_inventory';
        this.cartLink = '.shopping_cart_link';
        this.cartButtonSelector='.shopping_cart_container'
        
    }

    async addFirstProductToCart() {
        const firstProductButton = await this.page.$(this.addToCartButton);
        await firstProductButton.click();
      }
    
    async getFirstProductDetails() {
        // Get the first product's name and price
        const productName = await this.page.textContent(this.productNameSelector);
        const productPrice = await this.page.textContent(this.productPriceSelector);
    
        // Return both name and price
        return {
          productName,
          productPrice
        };
      }

    async getProductDetails() {
        const productName = await this.page.textContent(this.productNameSelector);
        const productPrice = await this.page.textContent(this.productPriceSelector);
        return { productName, productPrice };
    }

    async addProductToCart() {
        await this.page.click(this.addToCartButton);
    }
    async goToCart() {
        await this.page.waitForSelector(this.cartButtonSelector); // Wait for the cart button to be visible
        await this.page.click(this.cartButtonSelector); // Click the cart button to go to the cart page
      }
    async navigateToCart() {
        await this.page.click(this.cartLink);
    }
}

module.exports = ProductsPage;
