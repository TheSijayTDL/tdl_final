import BuyPage from "../pageObjects/buyPage";
import ItemsPage from "../pageObjects/itemsPage";
import LoginPage from "../pageObjects/loginPage";

describe('(Part 1) Swag Labs', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Login with locked_out_user", () => {
    LoginPage.logInName.type("locked_out_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();  
    LoginPage.logInError
      .should("be.visible")
      .and("have.text", "Epic sadface: Sorry, this user has been locked out."); 
  });

  it("Login with wrong password", () => { 
    LoginPage.logInName.clear().type("standard_user");
    LoginPage.logInPassword.clear().type("password");
    LoginPage.logInSubmit.click();
    LoginPage.logInError
      .should("be.visible")
      .and("have.text", "Epic sadface: Username and password do not match any user in this service");  
  });

  it("Validate item amount", () => {  
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();
    ItemsPage.itemsLength.should("have.length", 6);
  });

  it("Sort items - Price high to low", () => {  
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();
    ItemsPage.itemsFilter.select("Price (high to low)");
    ItemsPage.itemsValidateFirst
      .eq(0)
      .should("be.visible")
      .and("include.text", "Sauce Labs Fleece Jacket");
    ItemsPage.itemsValidateFirst
      .eq(0)
      .should("include.text", "$49.99");
  });

  it("Sort items - Price low to High", () => {  
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();
    ItemsPage.itemsFilter.select("Price (low to high)");
    ItemsPage.itemsValidateFirst
      .eq(0)
      .should("be.visible")
      .and("include.text", "Sauce Labs Onesie");
    ItemsPage.itemsValidateFirst
      .eq(0)
      .should("include.text", "$7.99");
  });

  it("Sort items - Name (Z to A)", () => { 
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();
    ItemsPage.itemsFilter.select("Name (Z to A)");
    ItemsPage.itemsValidateFirst
      .eq(0)
      .should("be.visible")
      .and("include.text", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Validate shopping cart badge amount", () => { 
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();
    ItemsPage.itemsChoose
      .should("include.text", "Sauce Labs Bolt T-Shirt")   
      .click(); 
    ItemsPage.itemsAddToCart.click();
    ItemsPage.itemsCartValue.should("have.text", 1);
    ItemsPage.itemsBack.click();
    ItemsPage.itemsChooseSecond
      .should("include.text", "Sauce Labs Bike Light")
      .click();
    ItemsPage.itemsAddToCartSecond.click();
    ItemsPage.itemsCartValue.should("have.text", 2);
  });

  it("Reset App State", () => { 
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();  
    ItemsPage.itemsChoose
      .should("include.text", "Sauce Labs Bolt T-Shirt")   
      .click();  
    ItemsPage.itemsAddToCart.click(); 
    ItemsPage.itemsBack.click();
    ItemsPage.itemsCartValue.should("have.text", 1);
    ItemsPage.burgerMenu.click();
    ItemsPage.burgerMenuReset.click();
    ItemsPage.itemsCartBadge.should("not.have.text");
  });

  it("Validate shopping cart remove button", () => { 
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();  
    ItemsPage.itemsChoose
      .should("include.text", "Sauce Labs Bolt T-Shirt")   
      .click();  
    ItemsPage.itemsAddToCart.click();
    ItemsPage.itemsCartValue.should("have.text", 1);     
    ItemsPage.itemsRemoveFromCart.click();
    ItemsPage.itemsCartBadge.should("not.have.text");
  });

  it.only("Buy a T-shirt", () => { 
    LoginPage.logInName.type("standard_user");
    LoginPage.logInPassword.type("secret_sauce");
    LoginPage.logInSubmit.click();  
    ItemsPage.itemsChooseRed
      .should("include.text", "Test.allTheThings() T-Shirt (Red)")   
      .click();  
    ItemsPage.itemsAddToCartThird.click();
    ItemsPage.itemsCartBadge.click();
    BuyPage.clickCheckOut.click();
    BuyPage.fillFirstName.type("Test");
    BuyPage.fillLastName.type("Yes");
    BuyPage.fillZip.type("LV-3601");
    BuyPage.clickContinue.click();
    BuyPage.validateItem.should("have.text", "Test.allTheThings() T-Shirt (Red)");
    BuyPage.finishPurchase.click();
    BuyPage.purchaseSuccess.should("include.text", "THANK YOU FOR YOUR ORDER");
  });
});