

describe("Mouse operations",()=>{

describe("Mouse operations",()=>{

    it("MouseHover",()=>{// Mouse hover wehn you move your cersar you get opetions to click
     cy.visit("https://demo.opencart.com/");

     cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
     .should("not.be.visible");

     cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

     cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
     .should("be.visible");


    })


     it("Right click",()=>{ 
        //approach one

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

       // cy.get('.context-menu-one').trigger('contextmenu')
        //cy.get('.context-menu-icon-copy').should('be.visible')
    // approach Two 
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy').should('be.visible')
    })

     it("Double Click",()=>{
        
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick3");
       // cy.frameLoaded("#iframeResult");

    })

     it("Drag and using plugin",()=>{

    
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box6").drag('#box106',{force:true});


     it.only("Scroling Page",()=>{

        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get("div.container table.two-column.td-image:nth-child(1) tbody:nth-child(2) tr:nth-child(2) td:nth-child(1) > img:nth-child(1)")
        .scrollIntoView();

     })


})


})
})
