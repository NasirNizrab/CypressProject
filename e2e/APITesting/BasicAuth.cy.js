
describe("Basic Auth",()=>{

    it("Basic Authentication",()=>{
        cy.request (
            {mehtod: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth:{
                   user: "postman",
                   pass: "password"
                 }
            })
            .then((Response)=>{
                expect(Response.status).to.equal(200)
                expect(Response.body.authenticated).to.equal(true);
            })



    })


    it("Basic Authentication",()=>{
        cy.request (
            {mehtod: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth:{
                   username: "postman",
                   password: "password",
                   method: "Digest"
                 }
            })
            .then((Response)=>{
                expect(Response.status).to.equal(200)
                expect(Response.body.authenticated).to.equal(true);
            })



    })
    
})