

describe("Authentication",()=>{

    const token= "ecec31ec385b3650ff1e9764cf37e07d893042713c8f70097e7229d7a2b271a5"
    it("Bearer Token Authentication",()=>{
        cy.request(
                    {
                        method:"GET",
                        url:"https://api.github.com/users/reports",
                        headers:{
                            Authentication: "Bearer"+token
                        }
                    })
                    .then((Response)=>{

                        expect(Response.staus).to.eq(200)
                    })



    })

    
     it("API Key Auth",()=>{
          
           cy.request(
            {
                method:"GET",
                url:"api.openweathermap.org/data/2.5/forcast/daily?q=Delhi",
                qs:{
                    appid:"fe9c5cddb7e01d747b4611c3fc9eaf2c"

                }
           })
           .then((response)=>{
            expect(response.status).to.eq(200)
              


           })




    })


})