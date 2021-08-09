describe('Front page ', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000/main')
      cy.contains('Welcome to use Time Tracker')
      cy.contains('Sign Up')
    })
  })

describe('Login ', function() {
    it('login works correct', function() {
      cy.visit('http://localhost:3000/login')
      cy.contains('Sign Up')
      cy.get('#email').type('kissa@koira')
      cy.get('#password').type('00000')
      cy.get('#login-button').click()
    })
  })

// Account have to be unique, so the test fails if types are not chanced.
describe('Sign up ', function() {
    it('creating a new account works correct', function() {
      cy.visit('http://localhost:3000/register')
      cy.contains('Register')
      cy.get('#name').type('testi')
      cy.get('#email').type('testi@tunnus')
      cy.get('#password').type('12345')
      cy.get('#register-btn').click()
      cy.wait(2000)
      cy.visit('http://localhost:3000/logout')
      cy.contains('Log out')
    })
  })  
  
  describe('when logged in', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').type('kissa@koira')
        cy.get('#password').type('00000')
        cy.get('#login-button').click()
        cy.wait(5000)
    })
  
    it('adding a new project', function() {
      cy.visit('http://localhost:3000/projects')
      cy.wait(5000)
      cy.get('#project-name').type('Testiprojekti 1')
      cy.get('#project-amount').type('3')
      cy.contains('Add new project').click()
    })

    it('adding a workingHour to project', function() {
        cy.visit('http://localhost:3000/projects')
        cy.wait(5000)
        cy.get('#page-link').click()
        cy.contains('Time you have used:')
        cy.get('#workingHour-text').type('Lisäsin testin2')
        cy.get('#workingHour-amount').type('1')
        cy.get('#addHour-btn').click()
        cy.wait(5000)
        cy.contains('Lisäsin testin')
      })
  })    