describe("API testing",()=>{

    it("Query parameters",()=>{
        cy.request({ 
                     method:"POST",
                     url:"https://reqres.in/api/users",
                     qs:{page: 2}
        })
                .then(  (response)=>{
                    expect(response.status).equal(200);
                    expect(response.body.page).to.eq(200);
                    expect(response.body.data).has.length(6);
                    expect(response.body.data[0]).have.property("id",7);
                    expect(response.body.data).has.property("first_name","Michael")




                })


    })


















})