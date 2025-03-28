
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProductNameSelector = '.cart_item .inventory_item_name';
        this.cartProductPriceSelector = '.cart_item .inventory_item_price';
        
    }

    async verifyProductInCart(productName, productPrice) {
        const cartProductName = await this.page.textContent(this.cartProductNameSelector);
        const cartProductPrice = await this.page.textContent(this.cartProductPriceSelector);
        return cartProductName.includes(productName) && cartProductPrice.includes(productPrice);
    }

    
      
      async goToCart() {
        await this.page.click('.shopping_cart_link'); 
      }

      async getCartItemName() {
        const itemNameElement = await this.page.$(this.cartProductNameSelector );
        if (!itemNameElement) {
          throw new Error('Cart item name not found');
        }
        return await itemNameElement.textContent(); 
      }
    }



module.exports = CartPage;
