/// <reference types ="cypress" />


describe('seller registeration', function(){
    it(' case1', function(){
      cy.log('buyer register')
      const fileName='original.jpeg';
      cy.visit('https://staging.mazaady.com/', {
       headers: {
         "Accept-Encoding": "gzip, deflate, br"
       }
     })




      /* ==== Generated with Cypress Studio ==== */
      cy.get('.flex-row > .user-actions').click().then(() => {
          // we are trying to return something
          // from the .within callback,
          // but it won't have any effect
        cy.log(' click on register button')
        });




      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.flex-row > :nth-child(7)').click();
      cy.get('.flex-row > :nth-child(7) > .dropdown-menu > .categories-sections > :nth-child(2) > a').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.flex-row > .user-actions').click({force:true});
      cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/register"]').click({force:true});
      cy.get(':nth-child(6) > label').click({force:true});
      cy.get('#opt-91').check({force:true});
      cy.get('#start').click({force:true});
      cy.get('#first_name').clear({force:true});
      cy.get('#first_name').type('aawa',{force:true});
      cy.get('#last_name').clear({force:true});
      cy.get('#last_name').type('wqwq',{force:true});
      cy.get('#email').clear({force:true});
      cy.get('#email').type('zzzzzzzzzzzzzxwawawa@gmail.com',{force:true});
      cy.get('.page-section > .col-sm-8 > :nth-child(1)').click({force:true});
      cy.get('#password').clear({force:true});
      cy.get('#password').type('123456',{force:true});
      cy.get('#confirm_password').clear({force:true});
      cy.get('#confirm_password').type('123456',{force:true});
      cy.get('.form-check > :nth-child(1) > label').click({force:true});
      cy.get('#opt-14').check({force:true});
      cy.get(':nth-child(5) > .col-12 > .btn').click({force:true})
      cy.wait(6000)
      /* ==== End Cypress Studio ==== */
    })
    it(' case2', function(){
        cy.log('verifyemail')

        cy.visit('https://mailtrap.io/inboxes/1558797/messages/2510791390')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#user_email').clear({force:true});
        cy.get('#user_email').type('Info@mazaady.com',{force:true});
        cy.get('.login_next_button').click({force:true});
        cy.wait(7000)
        cy.get('#user_password').clear({force:true});
        cy.get('#user_password').type('P@m_7aza@dy$',{force:true});
        cy.get('.login_password > :nth-child(3) > .button').click({force:true});
        cy.wait(7000)

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        /* ==== End Cypress Studio ==== */
        cy.get('.settings_inbox_link > .i4w4pc3').click()
        cy.wait(7000)
        cy.get(':nth-child(1) > .i18m0o91').click()
        

        /* ==== End Cypress Studio ==== */
      })

      it(' case3', function(){
        cy.log('validation field')
        cy.visit('https://staging.mazaady.com/', {
          headers: {
            "Accept-Encoding": "gzip, deflate, br"
          }
        })




        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > .user-actions').click().then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log(' click on register button')
          });




        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > :nth-child(7)').click();
        cy.get('.flex-row > :nth-child(7) > .dropdown-menu > .categories-sections > :nth-child(2) > a').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.flex-row > .user-actions').click({force:true});
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/register"]').click({force:true});
        cy.get(':nth-child(6) > label').click({force:true});
        cy.get('#opt-91').check({force:true});
        cy.get('#start').click({force:true});


        /* ==== Generated with Cypress Studio ==== */


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > .col-12 > .btn').click();
        cy.get('#first_name').clear();
        cy.get('#first_name').type('waw');
        cy.get(':nth-child(5) > .col-12 > .btn').click();
        cy.get('#last_name').clear();
        cy.get('#last_name').type('ewq');
        cy.get(':nth-child(5) > .col-12 > .btn').click();
        cy.get('#password').clear();
        cy.get('#password').type('123456');
        cy.get('#confirm_password').clear();
        cy.get('#confirm_password').type('123456');
        cy.get(':nth-child(5) > .col-12 > .btn').click();
        cy.get('#email').clear();
        cy.get('#email').type('andre@gmail.com');
        cy.get('.page-section > .col-sm-8 > :nth-child(1)').click();
        cy.get('#email').clear();
        cy.get('#email').type('andrewewewewe@gmail.com');
        cy.get('.page-section > .col-sm-8 > :nth-child(1)').click();
        cy.get('.form-check > :nth-child(1) > label').click();
        cy.get('#opt-14').check({force:true});
        cy.get('.page-section > .col-sm-8').scrollIntoView()
        /* ==== End Cypress Studio ==== */
      })
     
    
    })