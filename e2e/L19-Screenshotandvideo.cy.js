 
  // cypress by default take a screen shot but if you want to take intentionaly 
 describe("Screen and video",()=>{
    it("Capture screenshots and videos",()=>{

        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage");

        cy.wait(5000);

        cy.get("div.container div.row div.col-md-3.col-lg-4 div:nth-child(1) a:nth-child(1) > img.img-fluid")
       .screenshot("logo");

        //automatically capture screenshot and video on failure

        it.only("capture on failure",()=>{
       
        cy.visit("https://demo.opencart.com/")
        cy.get("div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item:nth-child(7) > a.nav-link")
        .click();
        cy.get("main:nth-child(3) div.container:nth-child(2) div.row div.col > h2:nth-child(1)")
        .should("have.text","Tablet");
        
        })











    })















 })


















