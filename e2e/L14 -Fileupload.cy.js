import 'cypress-file-upload'; // inorder to imprt file package we should 1st iprt

describe("File uploads",()=>{

it("single file upload",()=>{
    cy.visit("https://th-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFeile()// what ever file you want to upload you should keep it in fixture 
    cy.get("#file-submit").click();
    cy.wait("5000");
    cy.get("div[class='example'] h3").should("have.text",'File Uploaded!');

})


it("File upload -Rename",()=>{
    cy.visit("https://th-internet.herokuapp.com/upload");//this method is when you want change file name
    //but the easest way is to rename the file while saving it
    cy.get("#file-upload").attachFeile({filePath:'test1.pdf',fileName:'myfile.pdf'});
    cy.get("#file-submit").click();
    cy.wait("5000");
    cy.get("div[class='example'] h3").should("have.text",'File Uploaded!');


})


it("File upload- Drag and drop",()=>{
    // Here where we upload the file with the drag and drop option
    // Commonds mentioned into the ( github and cypress io )official sites 
    cy.visit("https://th-internet.herokuapp.com/upload");//
    cy.get('#drag-drop-upload').attachFeile('test1.pdf',{subjectType:'drag-n-drop'});
    cy.wait("5000");
    cy.get("#drag-drop-upload> .dz-preview> .dz-details> .dzx-filename>span")
    .contains("test1pdf");

})


it("Multiple files Upload",()=>{

// Here we use this method for uploading mutiple files at once
    cy.get("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").atacheFile(['test.pdf','test2pdf']);
    cy.wait("5000");
    cy.get("nth-child(6) > strong").should("contain.text","Files you selected:");

})

it("Sahdow Dom file upload",()=>{
    
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
    cy.get(".smart-brows-input", {includeShadowDom:true}).attachFeile("test1.pdf");
    cy.wait("5000");
    cy.get(".smart-item-name",{includeShadowDom:true}).contains("test1.pdf");



})








})
