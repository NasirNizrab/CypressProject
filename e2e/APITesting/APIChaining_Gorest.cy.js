
/*
Steps which we will implement
POST:https://gorest.co.in/public/v2/users
PUT: https://gorest.co.in/public/v2/users/${USERiD}
DELETE:https://gorest.co.in/public/v2/users/${USERiD}
*/
describe("Gorest API Chaning",()=>{
    const auth_token="Bearer 7963afc4627b29d867c23ee70865c75b5ff7900ff30e6c8c8b40c429fe8ff167"
    it("Create,Update,Delete users in Gorest API",()=>{
        Cypress.request({
            mehtod:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:{
                     name:"John Kennedy",
                     gender: "male",
                     email: Math.random().toString(5).substring(2)+"@gmail.com",
                     status: " active"
            },
            headers:{
                Authorization:auth_token
            }
            .then((response)=>{
                expect(response.staus).to.eq(201)
                const userid=response.body.userid
                //update user name
                cy.request({
                    mehtod: "PUT",
                    url:`https://gorest.co.in/public/v2/users/${userId}`,
                    body:{name: "scott"
                    },
                    headers:{
                        Authorization:auth_token
                    }   
                })
                .then((response)=>{
                    expect(response.stause).to.eq(200)
                    expect(response.body.name).to.eq("Scott")
                    //Delete Request
                    cy.request({
                        mehtod: "DELETE",
                        url:`https://gorest.co.in/public/v2/users/${userId}`,
                        headers:{
                            Authorization:auth_token
                        }
                    })
                    .then((response)=>{
                       expect(response.status).to.eq(204)

                    })
                })


            })



        })








    })


})