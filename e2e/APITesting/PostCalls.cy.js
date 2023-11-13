const { request } = require("cypress/types/cy-http")

describe("Api testing",()=>{

    it("Aproach1 - Hard coding json",()=>{

    const requestBody={

                    tourist_name: "Shashwatverma",
                    tourist_email: "1234srewhashwat15@user.com",
                    tourist_location: "India"
                    }
    cy.request(
               {
                 method: "POST",
                 url: "http://restapi.adequateshop.com/api/Tourist",
                 body:requestBody
                })
                .then((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq("Shashwatverma")
                    exepct(response.body.tourist_email).to.eq("1234srewhashwat15@user.com")
                    expect(response.body.tourist_location).to.eq("India")

                })
            })
   


    it.only("Aproach2 - Dynamically generating json object",()=>{
            
                const requestBody={
            
                                tourist_name: Math.random().toString(5).substring(2),
                                tourist_email: Math.random().toString(5).substring(2)+"@user.com",
                                tourist_location: "India"
                                }
                cy.request(
                           {
                             method: "POST",
                             url: "http://restapi.adequateshop.com/api/Tourist",
                             body:requestBody
                            })
                            .then((response)=>{
                                edxpect(response.status).to.eq(201)
                                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                                exepct(response.body.tourist_email).to.eq(requestBody.tourist_email)
                                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            
                            })
                        })
    

    it.only("Aproach3 - using fixture",()=>{
            // Fixture file is located under the Fixture file and with below method we call 
            // data from fixture file 
            cy.fixture("Tourist").then( (data)=>{

                const requestBody=data;
                            cy.request(
                                       {
                                         method: "POST",
                                         url: "http://restapi.adequateshop.com/api/Tourist",
                                         body:requestBody
                                        })
                                        .then((response)=>{
                                            edxpect(response.status).to.eq(201)
                                            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                                            exepct(response.body.tourist_email).to.eq(requestBody.tourist_email)
                                            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                                            
                                             
                                            expect(response.body).has.property('Tourist_email',requestBody.tourist_email)
                                            expect(response.body).to.have.property("Tourist_email",requestBody.tourist_email)


                                        })                                                                                     
                                    })
                
                        
            
    


            
            
                        
            
                    })





                })

