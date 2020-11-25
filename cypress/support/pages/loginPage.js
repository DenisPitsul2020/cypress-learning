class LoginPage {

    login(email, password) {
        cy.get('input[name="username"]').type(email, {force: true})
        cy.get('input[name="password"]').type(password, {force: true})
        cy.get('button').contains('Login').click()
    }

}

export const loginPage = new LoginPage()
