/*
Steps :

1: Get the OAuth2 access token
 then mehtod :POST https://github.com/login/access_token
Query params
      ------
      client_id
      client_secret
      code
2: Send GET Request by using access token.
https://api.github.com/user/repos
Auth:accessToken
*/
describe("OAuth",()=>{
    
    let accessToken="";

    it("Get Oath2 access token",()=>{
        cy.request({
            method:"POST",
            url:"https://github.com/login/access_token",
            qs:{
                client_id: "725ca3837bb7bc54b224",
                client_secret: "889016073686d43f6642bdd5ab788225cb2f1681",
                code: "79c39c41f43671adebce"
            }
        })
        .then((response)=>{
            const params= response.body.split("&");
            params[0].split("=")[1];
        })

    })

    it("OAuth2 Request",()=>{
        cy.request({
            method: "GET",
            url: "https://api.github.com/user/repos",
            headers: {
                Autherization:"Bearer"+accessToken 
            }
        })
        .then(response.status).to.eq(200)

    })
    

})