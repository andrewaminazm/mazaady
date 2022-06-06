/// <reference types ="cypress" />


describe('forgetpassword', function(){
    it(' case1', function(){
      const fileName='original.jpeg';
      cy.log('forget-password scenario')
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


      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.text-right > .btn').click();
      cy.get('#email').clear();
      cy.get('#email').type('andre@gmail.com');
      cy.get('.col-10 > .btn').click({force:true})
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

})