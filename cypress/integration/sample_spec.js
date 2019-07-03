/* 
  The describe and it functions comes from Mocha which Cypress "bakes" into its application.
  The same is true for the expect assertion function which comes from Chai.
 */
describe('Vue frontend test', () => {
  describe('It navigates to the web app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    })
    /* 
        cy methods has built-in assertion which will fail the test if the command/method 
        we call fail.
        cy.visit() visits the url that's passed in as an argument
      */
    it('contains a header with "Todo List" and a form submission', () => {
      cy.get('header').contains('Todo List')
      cy.get('#app').get('form')
      /* 
       cy.get() gets passed in a selector (in the class, I specified a header element)
       and returns the element(or reference to it, idk what to be exact).
       Then we chain it with a .contains(). This will check if there is a value of "Todo List" within
       the header element as a child
      */
    })
    it('todo items can be added to the list', () => {
      cy.get('.todo-submission').type('Do the dishes')
      cy.get('.btn').click()
      cy.contains('Do the dishes')
      cy.get('#app').get('p')
      /*
        1) grabs an element with a class of todo-submission and type in "Do the dishes" as a todo item
        2) grabs the submit button and click it so we actually create the new todo item 
      */
    })
    it('todo items can be deleted from the list', () => {
      cy.contains('delectus aut autem')
        .contains('x')
        .click()
      cy.contains('et porro tempora')
        .contains('x')
        .click()
      // finds and deletes 2 todo items from our list
    })
  })
})
