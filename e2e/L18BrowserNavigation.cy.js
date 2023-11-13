//Go ()
describe("Navigation",()=>{
   it("NavigationTest",()=>{

    cy.visit("https://demo.opencart.com/");
      cy.title().should("eq","Your Store"); //Home page

      cy.get("div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item:nth-child(7) > a.nav-link")
      .click();
      cy.get("main:nth-child(3) div.container:nth-child(2) div.row div.col > h2:nth-child(1)")
      .should("have.text","Cameras");// Cameras page
      cy.go("back") //Here it should go back to the main page of the website
      cy.title().should("eq","Your Store");
      
      cy.go("forward"); // should go back to the camera page
      
      cy.go(-1); // this command will take it back to the Home main page
      //Instead of back we can ise -1 command

      cy.go(1); // Back to the cameras page
      // instead of farword we can use 1 commond

      cy.reload(); // to relaod the page


    })

})

