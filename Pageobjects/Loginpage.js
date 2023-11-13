class Login
{

setUserName(username)
{
    cy.get("input[placeholder='Username']").type("username")
}

setPassword(Password)
{
    cy.get("input[placeholder='Password']").type("admin123");
}

clickSubmit()
{
    cy.get("button[type='submit']").click();
}

verfifyLogin()
{
    cy.get('.oxd-topbar-header-title').should("have.text","Dashboard");
}

}

export default Login;