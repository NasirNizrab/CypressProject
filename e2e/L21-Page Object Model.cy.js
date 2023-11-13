import Login from "../Pageobjects/Loginpage2";
// Arrow functions are added in to (Loginpage and Loginpage2)Under the pageproject folder
// If any changes we want to make we can go to Login pages and make the change.
// NOTE :Each time we want to import any arrow functin from another file we should change the file name on IMPORT 

//
describe("pom",()=>{
    // General approach
    it("Login test",()=>{
    
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[placeholder='Username']").type("Admin");
            cy.get("input[placeholder='Password']").type("admin123");
            cy.get("button[type='submit']").click();
            cy.get('.oxd-topbar-header-title').should("have.text","Dashboard");
            
            // Using (POM)Page object Model

            it("Login test",()=>{
    
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
              
                        const ln=new Login();
                        ln.setUserName("Admin")
                        ln.setPassword("admin123")
                        ln.clickSubmit();
                        ln.verfifyLogin();              

            })

            //3RD Method using pom with fixture
            it.only("Login test",()=>{
    
              cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
               

              cy.fixture("orangehrm.json").then((data)=>{

                const ln=new Login();
                ln.setUserName(data.username)
                ln.setPassword(data.password)
                ln.clickSubmit();
                ln.verfifyLogin();              



              })
                      

            })

  })

})