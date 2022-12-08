/// <reference types="cypress"/>

describe('Test Functionality', ()=>{
    
beforeEach(()=>{
    cy.visit('/')

})

// it.only
// it.skip
it('should open login application', () => {


    cy.fixture('example').then(function(data){

        this.data = data
        
        // cy.get('#txtUsername').type('admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()

        cy.login(this.data.username, this.data.password)

        cy.get('h1').contains('Dashboard')
        cy.contains('Invalid credentials').should('not.exist')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        cy.logout()
    })
})



it('should open not login application', () => {
    // cy.get('#txtUsername').type('admin')
    // cy.get('#txtPassword').type('admin')
    // cy.get('#btnLogin').click()
    // cy.get('h1').contains('Dashboard')

    cy.login('admin', 'admin')


    cy.contains('Invalid credentials').should('exist')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
})

// afterEach(()=>{
//     cy.logout()
// })
})
