
describe("handling tables",()=>{

beforeEach("Login",()=>{
    cy.visit("https://demo.opencart.com/admin/index.php"); //step1 access the webpage
    cy.get("#input-username").type("demo"); //step2 put value in the user box which is DEMO
    cy.get("#input-password").type("demo"); //STEP3 Prpvide the password which is DEMO
    cy.get("button[type='submit']").click();// Step4 now we ask to login or click on login

    cy.get(".btn-close").click(); //step4 we ask to close pop up if it comes

    cy.get("#menu-customer>a").click(); //step5 we ask to go to customer main manue
    cy.get("#menu-customer>ul>li:first-child").click();// step6 here it will click on customers/sub/child item
}) 


 it("Check Number of Rows & Columns",()=>{

   cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","10");

   // cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.lenght','7');
   
//})

    it("Check Cell data from spacific row & Column",()=>{
       cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)")
       .contains("rs@yopmail.com");
    }) 
    
     it("Read all the rows & Columns data in the first page",()=>{
     cy.get("table[class='table table-bordered table-hover']>tbody>tr")
       .each ( ($row, index, $rows)=>{
         cy.wrap($row).within( ()=>{    
          cy.get("td").each(  ($col, index, $cols)=>{   

      it("pagination",()=>{  
        //find total number of pages
        //let total pages;
        cy,get(".col-5m-6.text-end").then(   (e)=>{
           let mytext=e.text(); //showing 1 to 10 of 5581 (559 pages)
           totalpages=mytext.substring(mytext.indexof("(")+1,mytext.index0f("pages")-1);
           cy.log("Total nummber of pages in table=====>"+totalpages);
            

        })





      })   

          })
          

        })


    })

}) 



})
  


})
