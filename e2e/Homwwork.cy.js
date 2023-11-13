describe("New Home Work",()=>{
   it.only("Home work on ORANGEHRM",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.get("button[type='submit']").click();
      cy.get('.oxd-topbar-header-title').should("have.text","Dashboard");
      cy.get(':nth-child(2) > .oxd-main-menu-item').click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
      .type("Ans bhai");
      cy.get(':nth-child(2) > .oxd-input').type("606785");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .click()
      //cy.get("div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) div.oxd-select-wrapper div.oxd-select-text.oxd-select-text--active > div.oxd-select-text--after")
      //.select(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input")
      //.click()


     // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
//.click()
     // cy.get("div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) div.oxd-select-wrapper div.oxd-select-text.oxd-select-text--active > div.oxd-select-text-input")
     // .select("1")
      //cy.get('[name="countries"]').click().get.('[id="selection_option_375"]').click()
      //"select("Full-Time Contract")
      //cy.get("div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) div.oxd-select-wrapper div.oxd-select-text.oxd-select-text--active > div.oxd-select-text-input")
      //.select("Full-Time Contract")

      //contains("Full-Time Contract").click();

    //  cy.get("div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.oxd-table-filter:nth-child(1) div.oxd-table-filter-area form.oxd-form div.oxd-form-row div.oxd-grid-4.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(3) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) div.oxd-select-wrapper div.oxd-select-text.oxd-select-text--active > div.oxd-select-text-input")

      //cy.get(".oxd-form-actions").select("Full-Time Contract");    
      //click().type("have.value","Full-Time Contract")
      //.type('{enter}')



      

      

     



    


















   })




})