import BasePage from '../pageObjects/basePage'

class BuyPage extends BasePage {
  static get url () {
    return 'https://www.saucedemo.com/cart';
  }

  static get clickCheckOut() {
    return cy.get("#checkout");
  }

  static get fillFirstName() {
    return cy.get("#first-name");
  }

  static get fillLastName() {
    return cy.get("#last-name");
  }

  static get fillZip() {
    return cy.get("#postal-code");
  }

  static get clickContinue() {
    return cy.get("#continue");
  }

  static get validateItem() {
    return cy.get(".inventory_item_name");
  }

  static get finishPurchase() {
    return cy.get("#finish");
  }

  static get purchaseSuccess() {
    return cy.get("#checkout_complete_container");
  }
}

export default BuyPage;