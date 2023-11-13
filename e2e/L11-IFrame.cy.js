
import"cypress-Iframes" // Inorder to use Iframe plugins we have to import the files 


describe("handling Iframe",()=>{
    
    it("appraoch1",()=>{
    cy.visit("https://www.reddit.com/r/QualityAssurance/comments/liizfs/playwright_iframes_and_nested_iframes/");

    const iframe=cy.get("#mce-0-ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

      iframe.clear().type("welcome{cmd+a}");
      cy.get("(aria-lable='Bold')").click();

    })


   // Custom commond way approach2
    it("appraoch2 - by using  ustom  ommand",()=>{

        cy.visit("https://www.reddit.com/r/QualityAssurance/comments/liizfs/playwright_iframes_and_nested_iframes/");

          cy.getiframe("#mce-0-ifr").clear().type("welcome{cmd+a}");
          cy.get("[aria-label='Bold']").click();
    
          
    })
         // By using Ifrmae plugins
    it.only("appraoch3 - by using  cypress-Iframe plugins",()=>{

        cy.visit("https://www.reddit.com/r/QualityAssurance/comments/liizfs/playwright_iframes_and_nested_iframes/");

          cy.frameLoaded("#mce-0-ifr"); // Load the frame
          cy.iframe("#mce-0-ifr").clear().type("welcome{cmd+a}");
          cy.get("[aria-label='Bold']").click();
    // Note we can use 3 or 4 diffrent type of the it blocks at same time
          
    })

})
