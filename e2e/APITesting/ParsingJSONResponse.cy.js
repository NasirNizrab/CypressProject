
describe("Parsing JSON Response",()=>{

    it("Parsing simple JSON response",()=>{
        cy.request(
            { 
               method: "GET",
               url:"https://fakestoreapi.com/products",

            })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].price).to.equal(109.95)
            expect(response.body[0].rating.rate).to.equal(3.9)
//Note: One array can have mutiple objects or data up above in methood its the 1st data assert and below we are takin the 20th object of the array
            
            expect(response.body[19].id).to.equal(20)
            expect(response.body[19].title).to.equal("DANVOUY Womens T Shirt Casual Cotton Short")
            expect(response.body[19].price).to.equal( 12.99)
            expect(response.body[19].rating.rate).to.equal(3.6)
        })
    })
// NOte below we are making an arrow function to find the total of 5 data in same array and assert the total price of 5 objects

    it.only("Parsing Complex JSON response",()=>{
        let totalprice=0
        cy.request(
            { 
               method: "GET",
               url:"https://fakestoreapi.com/products",
               qs:{limit:5}

            })
        .then((response)=>{
            expect(response.status).to.eq(200)
            response.body.forEach(element => {
                totalprice=totalprice+element.price;
                
            });
            expect(totalprice).to.equal(899.23);
        })
    })
})