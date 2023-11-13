describe('Home Work',()=>{


    it("Get Call",()=>{
        cy.request("Get","https://reqres.in/api/users?page=2")
        .its("status").should("equal",200);
      
    }),

    it("Get Call",()=>{
        cy.request("Get","https://httpbin.org/#/")
        .its("status").should("equal",200);
      
    })


     it("Home Work - Hard coding json",()=>{
       const requestBody={
                            name: "Tenali Ramakrishna",
                            email: "Anasbhai2023@1015ce.com"
                        }
            cy.request(
                        { 
                         method:"POST",
                         url: "https://gorest.co.in/public/v2/users",
                         body:requestBody
                        }) 
                        .then( (response)=>{
                            expect(response.status).to.eq(201)
                            expect(response.body.name).to.eq("Tenali Ramakrishna")
                            expect(response.body.email).to.eq("Anasbhai2023@15ce.com")

                        })            

    })

    it.only("Post Call",()=>{

        cy.request({
                  method: 'POST',
                  url:"https://gorest.co.in/public/v2/users",
                  body: { tourist_name: "Shashwatverma",
                  tourist_email: "111vccvzcxvzxc@user.com"
                  }
              .its("status")
              .should("equal",201)
    
        
                })
            })
        
})
