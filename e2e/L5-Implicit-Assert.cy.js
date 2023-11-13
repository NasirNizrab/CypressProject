

describe("Assertions demo", ()=> {
it("Implicit assertions",()=>{
 //Implicit asset is a built in assert and supported by cypress
  //key  words (SHOULD & AND)
  //Belwo want to validate or double check or do the validation for 
  //title and what the url should have
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("include","orangehrmlive.com",)
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("contain","orangehrm")
   //Instead of writing multiple cy.url we can only use
   //Once as use .Should as below 
   cy.url().should("include","orangehrmlive.com",)
   .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   .should("contain","orangehrm")
   // Here instead of writting multiple time
   //should we can use (AND) as below

   cy.url().should("include","orangehrmlive.com",)
   .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   .and("contain","orangehrm")
   .and ("not contain","greenhrm why not working")
   // Here we can do negative assertion instead of should 
   // we use Should not
   cy.url().should("include","orangehrmlive.com",)
   .should("not.contain","greenharm")
   // we can also use (equal or not equal, Contains) with should 
   cy.title().should("include","Orange")
   .and("eq","OrangeHRM")
   .and("contain","HRM")
   // Here we want to verifiy a logo of page 
   cy.get(".orangehrm-login-branding > img").should("be.visible")
    .and("exist")
   //Below we how we check the number of links in the page
    cy.xpath("//a").should("have.length",'5')
   // Below we verify the value provided to input box
   cy.get("input[placeeho=username']").type("Admin")
   cy.get("inpu[placeholder=username]").should("have.value",'admin')
}) //Implict asserts other parameters  words 
  // (ShoulD,And,eq,contain,include,exist,have.lenght etc)


})


