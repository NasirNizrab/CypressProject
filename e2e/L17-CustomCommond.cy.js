
describe("custom commonds",()=>{

it("handling links",()=>{
    cy.visit("https://demo.nopcommerce.com/");
    //cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.home-page div.page-body div.product-grid.home-page-product-grid div.item-grid div.item-box:nth-child(2) div.product-item div.details h2.product-title > a:nth-child(1)").click();
   // cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
   // .should("have.text","Apple MacBook Pro 13-inch");
    //The above method is Direct method without using custom command 
    
    // Now using custom command below in order to use custom command method
    // we have to make a command on COMMAND.JS under the Support file
    
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
    .should("have.text","Apple MacBook Pro 13-inch");



})

// In over writting now we are making a custom command that should verfiy if its upper case
// or lower case latter still our test should pass for that we make custom command

it.only("overwritting existing command",()=>{
    cy.visit("https://demo.nopcommerce.com/");
 // Below we change lower case ("Apple MacBook Pro 13-inch") to UPper case ("APPLE MACBOOK PRO 13-inch")
 // in this situation our case will be fail so thats why we create a command so that it should pass

    cy.clickLink("APPLE MACBOOK PRO 13-inch");
    cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
    .should("have.text","Apple MacBook Pro 13-inch");


})


it("Login command",()=>{
    



})

















})