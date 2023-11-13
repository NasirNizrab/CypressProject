
describe("check UI Elements",()=>{

    it("Checking Radio Buttons",()=>{

       //skip cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")
        // Visibility of radio buttons
        cy.get("#sex-0").should("be.visible")
        cy.get("#sex-1").should("be.visible")
       
    
        // Selecting radio buttons 
        cy.get("#sex-0").check().should("be.checked")
        cy.get("#sex-1").should("not.be.checked")
        //opsite of the uper test case 
        cy.get("#sex-0").check().should("not.be.checked")
        cy.get("#sex-1").should("be.checked")


        it("Checking the check boxes",()=>{
          
            cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")
            //Visibility of the element
            cy.get("#profession-0").should("be.visible")
            // Selecting single check box - profissional
            cy.get("#profession-0").check().should("be.cheked")
            //Unselecting check box
            cy.get("#profession-0").uncheked().should("not.be.cheked")
            //Selecting all the check boxes
            // We need to find a common locator
            cy.get("#profession-0").check().should("be.checked")
            // to unselect all boxs
            cy.get("#profession-0").uncheckc().should("not.be.checked")
            //To select one of the boxs like first or last check boxs amoung all boxs

            cy.get("#profession-0").first().checked()
            cy.get("#profession-1").last().checked()




        })



    })



    })