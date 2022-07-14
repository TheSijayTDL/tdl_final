import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return 'https://www.saucedemo.com/';
  }

  static get logInName() {
    return cy.get("#user-name");
  }

  static get logInPassword() {
    return cy.get("#password");
  }

  static get logInSubmit() {
    return cy.get("#login-button");
  }

  static get logInError() {
    return cy.get("#login_button_container > div > form > div.error-message-container.error");
  }
}

export default LoginPage;