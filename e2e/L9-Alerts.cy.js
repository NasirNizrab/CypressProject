
describe("Java script Alerts",()=>{
//1-jAVA SCRIPT Alerts:It will have some text and ok  button
    it("JS Alerts",()=>{

        cy.visit("https://www.techlistic.com/2020/07/automation-testing-demo-websites.html")
        cy.get("button[onceclick=jsaler").click();
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am JS Alert")
        })
//alert window automatically closed by cypress
cy.get("#result").should("have.text","you successfully clicked an alert")

})
//2- Javascript confirmation alert: It will have some text with (ok) and (Cancel) buttons
it.onlyvisit("https://www.techlistic.com/2020/07/automation-testing-demo-websites.html")
//When you have only infornt of your case test it will only run the one with Only
cy.get("button once clickjsconfir").click();
cy.on("window:confirm",(t)=>{

})
//Cypress automatically closed alert window by using ok button-default
cy.get("#result").should("have.text","you click:ok")

//3- Javascript prompt Alerts:It will have some text with a text box for user in put along with ok

it.only("Js prompt alert",()=>{
    cy.visit("https://www.techlistic.com/2020/07/automation-testing-demo-websites.html")
    cy.window().then((win)=>{
    cy.stub(win,"prompt").returns("welcome");

    })
 cy.get("buttononclick=jsprompt()']").click();
 //cypress will automatically close promptalert- it will use ok buttom-by default


})
//4- Authenticated Alert
it.only("Authenticated alerts",()=>{
    //approach 1
        cy.visit("https://www.techlistic.com/2020/07/automation-testing-demo-websites",{suth:
    {
        username:"admin",
        password:"admin"
}
        });
        cy.get("divclassp").should("have.contain",'congratulations');
             


})

})