describe("API testing",()=>{

    let authToken=null;
    before("creating access token",()=>{

        cy.request({
            method:"POST",
            url:"https://simple-books-api.glitch.me/api-client/",
            headers:{
                "Content-type": "application/json" 
                    },
            body:{
                     clientName: "ABC",
                     clientEmail: Math.random().toString(2)+"@gmail.com"
            }
         }).then((response)=>{
               authToken=response.body.accessToken;  
        
        });

    });

    before("creating new order",()=>{

        cy.request({
            method:"POST",
            url:"https://simple-books-api.glitch.me/orders/",
            headers:{
                "Content-type": "application/json",
                "Authorization":'Bearer'+authToken
                    },
            body:{
                 "bookId":1,
                 "customerName": "xyzabc"
            }
     
            }).then((response)=>{
               expect(response.status).to.eq(201);
               expect(response.body.created).to.eq(true);  

        })

    })

         it("Fetching the orders",()=>{
            cy.request( 
                 { method: "GET",
                   url: "https://simple-books-api.glitch.me/orders/",
                   headers:{
                           "Content-type":"application/json",
                           "Authorization":"Bearer" +authToken   
                   },
                    Cookies:{
                          "cookieName":"mycookie"       
                }
            }).then((response)=>{
                   expect(response.status).to.eq(200);
                   expect(response.body).has.length(1);


            })










         })
















})