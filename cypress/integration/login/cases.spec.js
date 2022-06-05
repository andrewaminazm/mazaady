/// <reference types ="cypress" />


describe('login', function(){
    it(' case1', function(){
      const fileName='original.jpeg';
      cy.log('login with valid credentials as seller&buyer')
      cy.visit('https://staging.mazaady.com/', {
       headers: {
         "Accept-Encoding": "gzip, deflate, br"
       }
     })



      /* ==== Generated with Cypress Studio ==== */
      cy.get('.flex-row > .user-actions').click();
      cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click();
      cy.get('#email').clear();
      cy.get('#email').type('andre@gmail.com');
      cy.get('#password').clear();
      cy.get('#password').type('123456');
      cy.get('label > input').check();
      cy.get('.w-75 > .btn').click();
      cy.get('.flex-row > .user-actions').click();
      cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > :nth-child(1) > a').click();
      /* ==== End Cypress Studio ==== */
    })
    it(' case2', function(){
        const fileName='original.jpeg';
        cy.log('login with valid credentials as buyer')
        cy.visit('https://staging.mazaady.com/', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > .user-actions').click();
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click();
        cy.get('#email').clear();
        cy.get('#email').type('zzzzzzxwawawa@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('123456');
        cy.get('label > input').check();
        cy.get('.w-75 > .btn').click();
        cy.get('.flex-row > .user-actions').click();
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > :nth-child(1) > a').click();
        /* ==== End Cypress Studio ==== */
      })
      it(' case3', function(){
        const fileName='original.jpeg';
        cy.log('login with invalid  password credentials ')
        cy.visit('https://staging.mazaady.com/', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > .user-actions').click();
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click();
        cy.get('#email').clear();
        cy.get('#email').type('zzzzzzxwawawa@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('12345688');
        cy.get('label > input').check();
        cy.get('.w-75 > .btn').click();
       cy.wait(8000)
        /* ==== End Cypress Studio ==== */
      })
      it(' case4', function(){
        const fileName='original.jpeg';
        cy.log('login with invalid  email credentials ')
        cy.visit('https://staging.mazaady.com/', {
         headers: {
           "Accept-Encoding": "gzip, deflate, br"
         }
       })
  
  
  
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > .user-actions').click();
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click();
        cy.get('#email').clear();
        cy.get('#email').type('zzzzzzwxwawawa@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('123456');
        cy.get('label > input').check();
        cy.get('.w-75 > .btn').click();
       cy.wait(8000)
        /* ==== End Cypress Studio ==== */
      })
    
    })