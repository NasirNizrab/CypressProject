// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//<reference types="cypress-xpath" />

//const { filter } = require("cypress/types/bluebird");
//const { stubObject } = require("cypress/types/lodash");

//const cypress = require("cypress");



// Custom command for clicking on link using label
    Cypress.Commands.add('clickLink',(label)=>{
        cy.get('a').contains(label).click();

    })
    //over writing

   // Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=>{
      //  if(typeof text === 'object') {
          //  options = text
          //  text = filter
          //  filter = undefined

       // }
        
         // options.matchCase = false

          // return originalFn(subject, filter, text, options)


//})


