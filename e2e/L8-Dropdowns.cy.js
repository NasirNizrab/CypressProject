

describe("drop down with select",()=>{

it.skip("Drop down with select",()=>{

cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
//Select the ID of the element paste it in get and write slect
cy.get(".select2-search__field").click()
.should("have.value","Italy")


})

it.skip("Drop down without select",()=>{

    //Boot strap drop downs

    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/")

    cy.get("#select2-billing_country-container").click()
    cy.get("#select2-search_field").type("Italy").type("{enter}")

    cy.get("#select2-billing_country-container").should("have.text,Italy")


    it.skip("Static Auto suggested Drop down without select",()=>{

    
        cy.visit("https://www.wikipedia.org/")
    //how to chose all auto suggested from list and how to chose one and click 
    //First should fine a common ID which is in all auto suggested list
        cy.get("#www-wikipedia-org").type("Delhi")
        cy.get(".suggestion-title").contains("Delhi university").click()
    

        it("Daynamic auto suggested Drop down",()=>{

        
            cy.visit("https://www.google.com/")
        
            cy.get(".gLFyf").type("Cypress automation")
            cy.wait(3000)
            cy.get(".divwm6w7d>span").shouldc("have.length",11)
            cy.get(".divwm6w7d>span").each( ($el,index,$list)=>{

                if($el.text()=='cypress automation tutorial')
                {
                    cy.wrap($el).click()

                }
            })

            cy.get("input[name='q']").should("have.value","cypress automati tutorial")

                
        })


    })







})



})

