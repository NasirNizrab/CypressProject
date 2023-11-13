
describe("xpathlocators",() =>{
// Here in this method we want to find total number of 
// product on the page
    it("find number of products",()=>{
// First we want ot visti our page so we put the url
// as below in the it block
 cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")
 //Here we want to make sure about the number of products 
 //Through our test we want to do assertion
 cy.xpath("//ur(@id='heytrhkhome featured").should("have.lengt" , 7)
// GET method is used to find the element and its 
// applycable for CSS and xpath is to use for xpath locator
//CSS slector comes by deafult with cypress 
//BUT xpath is a plug in so that is why we used 
// up (XPATH instead of GET)

it("chained xpath",()=>{
cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")
cy.xpath("ul@ifds[kdas']").xpath(".li").should("have.length",7)



})
  
    
})









})
