
describe("API Chaining in Cypress",()=>{
    it("Should make all API requests and chain them together",()=>{
        cy.request({
            methood: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
        
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            const postid=response.body[0].id
            return postid
        })
        .then((postid)=>{
            cy.request({
                methoohttps:"GET",
                url:`https://jsonplaceholder.typicode.com/comments?postId=${postid}`
            })
            .then((respons)=>{
                expect(respons.status).to.eq(200)
                expect(respons.body).to.have.length(5)

            })

        })



    })


})