describe("HTTP Request",()=>{
   
 it("Get Call",()=>{
  cy.request("Get","https://jsonplaceholder.typicode.com/posts/1")
  .its("status").should("equal",200);


 })
  
 it.only("Post Call",()=>{

    cy.request({

             method: 'post',
              url:  'https://jsonplaceholder.typicode.com/posts/',
             body: {
                title:"Test post",
                body:"This is post call",
                userId:1

             }
     .its("status")
     .should("equal",201)

    
            })

 })

   it("Put Call",()=>
   {
     cy.request(   {

                method: "PUT",
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                body:{
                userId:1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                }

     }   )
   .its('status')
   .should('equal',200);

   })

    it("Delete Call",()=>
    {

        cy.request({ 
               method:"Delete",
               url:"https://jsonplaceholder.typicode.com/posts/1",

        })
     .its("status")
     .should("equal",200)   


    })

    

})