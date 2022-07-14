import BasePage from '../pageObjects/basePage'

class ItemsPage extends BasePage {
  static get url () {
    return 'https://www.saucedemo.com/inventory';
  }

  static get itemsLength() {
    return cy.get(".inventory_item");
  }

  static get itemsFilter() {
    return cy.get(".product_sort_container");
  }

  static get itemsValidateFirst() {
    return cy.get(".inventory_item");
  }

  static get itemsChoose() {
    return cy.get("#item_1_title_link");
  }

  static get itemsAddToCart() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  static get itemsCartValue() {
    return cy.get(".shopping_cart_badge");
  }

  static get itemsBack() {
    return cy.get("#back-to-products");
  }

  static get itemsChooseSecond() {
    return cy.get("#item_0_title_link");
  }

  static get itemsAddToCartSecond() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }

  static get burgerMenu() {
    return cy.get("#react-burger-menu-btn");
  }

  static get burgerMenuReset() {
    return cy.get("#reset_sidebar_link");
  }

  static get itemsCartBadge() {
    return cy.get(".shopping_cart_link");
  }

  static get itemsRemoveFromCart() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }

  static get itemsChooseRed() {
    return cy.get("#item_3_title_link");
  }

  static get itemsAddToCartThird() {
    return cy.get(".btn_primary")
        .should("include.text", "Add to cart")
        .trigger("mouseover");
  }
}

export default ItemsPage;