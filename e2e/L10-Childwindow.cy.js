

describe("handle witndow tab",()=>{
//FroM herf remove the target_blank on the child window inorder to open the child window on the samepage
it("Approach1",()=>{
    cy.visit("https://www.freecodecamp.org/")
    cy.get(".example").invoke("removeattr","target").click();
    cy.url().should("include",'https://www.freecodecamp.org/')
    
    cy.wait(5000);
    //operations

    cy.go("back"); //back to parent





})


})