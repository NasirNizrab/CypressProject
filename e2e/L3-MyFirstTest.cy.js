


// In describe we spacify the Test suit (Test Case)name 
//And under one test suit or test case we can have multiple IT blocks or tests
describe('My First Test', () => { 

  it("Test One-verify the title-positive Test",()=> {  //Every IT block is consider as one test
    
    cy.visit("https://www.orangehrm.com/") // We use this commond to access the url of the website
    cy.title(),should("eq,OrangeHRM")      // Here we are trying to verify the web page elemet 

    it("Test Two-verify the title-Nagitive Test",()=> { //Here this test should fail
      cy.visit("https://www.orangehrm.com/") // 
      cy.title(),should("eq,OrangeHRM123")


    })

  })

})