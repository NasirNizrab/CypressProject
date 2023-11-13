// cypress css locators how to get the element ID

describe("csslocator", () => {
 //After describe we must make a (it) block for our case   

    it("csslocator", () => {
// After creating it on 1st we copy url of the web page
//And paste it in cy.visit as below to access the web page
    cy.visit("https://www.saucedemo.com/")
// Than inorder to access specific web element 
//we should get an elemnet ID through xpath or should make manually as below
//1.Tag&ID 2. Tag.Class 3. Tag [Attribute="value"]
//ID tag is opetional    

    cy.get("#user-name").type("standard_user")

    cy.get("#login-button").click()
    cy.get(".lighter").contains("T-shirt")//Assertion




    })

})