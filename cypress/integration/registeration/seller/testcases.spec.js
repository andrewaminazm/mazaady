/// <reference types ="cypress" />


describe('seller registeration', function(){
    it(' case1', function(){
      cy.log('Check that all the required fields are present on the registration page')
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
      cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/register"]').click().then(() => {
          // we are trying to return something
          // from the .within callback,
          // but it won't have any effect
        cy.log(' check on seller')
        });
      cy.get('#start').click().then(() => {
          // we are trying to return something
          // from the .within callback,
          // but it won't have any effect
        cy.log('click start ')
        });
      cy.get('#step2').scrollIntoView()


      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').clear({force:true});
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').type('aaaa',{force:true});
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').clear({force:true});
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type('vvv',{force:true});
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear({force:true});
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('andwwwwrqqqwe@gmail.com',{force:true});
      cy.wait(7000)
      cy.get('.page-section > .col-lg-8 > :nth-child(1)').click({force:true});
      cy.get('#password').clear({force:true});
      cy.get('#password').type('123456',{force:true});
      cy.get('#password_confirmation').clear({force:true});
      cy.get('#password_confirmation').type('123456',{force:true});
      cy.get('#register-phone-number').clear({force:true});
      cy.get('#register-phone-number').type('1111111145111',{force:true});
      cy.get('#step2 > :nth-child(1)').click({force:true});
      cy.wait(5000)
      cy.get(':nth-child(2) > .container > .list-inline > .text-center > .btn').click({force:true});
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').click();
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.wait(5000)
      cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click();
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.wait(5000)
      cy.wait(5000)
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('bur{enter}');
      cy.wait(5000)
      cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click();
      cy.wait(5000)
      cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click();
      cy.get('#location').clear();
      cy.get('#location').type('WG7X+M5 Borg El Arab, Egypt');
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */

      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .w-100 > label').click({force:true});
      cy.get('#opt-1').check({force:true});
      cy.get(':nth-child(4) > .w-100 > label').click({force:true});
      cy.get('#opt-4').check({force:true});
      cy.get(':nth-child(6) > .w-100 > label').click({force:true});
      cy.get('#opt-6').check({force:true});
      cy.get('.form-check > :nth-child(1) > label').click({force:true});
      cy.get('#opt-14').check({force:true});
      /* ==== End Cypress Studio ==== */
    })
    it(' case2', function(){
        cy.log('complete scenario')
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
        cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/register"]').click().then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log(' check on seller')
          });
        cy.get('#start').click().then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log('click start ')
          });
        cy.get('#step2').scrollIntoView()
  
  
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').clear({force:true});
        cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').type('aaaa',{force:true});
        cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').clear({force:true});
        cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type('vvv',{force:true});
        cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear({force:true});
        cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('andreqqqqqazwee@gmail.com',{force:true});
        cy.wait(7000)
        cy.get('.page-section > .col-lg-8 > :nth-child(1)').click({force:true});
        cy.get('#password').clear({force:true});
        cy.get('#password').type('123456',{force:true});
        cy.get('#password_confirmation').clear({force:true});
        cy.get('#password_confirmation').type('123456',{force:true});
        cy.get('#register-phone-number').clear({force:true});
        cy.get('#register-phone-number').type('1111341222222111',{force:true});
        cy.get('#step2 > :nth-child(1)').click({force:true});
        cy.wait(5000)
        cy.get(':nth-child(2) > .container > .list-inline > .text-center > .btn').click({force:true});
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
        cy.wait(5000)
        cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
        cy.wait(5000)
        cy.get('#vs5__combobox > .vs__selected-options > .vs__search').click();
        cy.wait(5000)
        cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
        cy.wait(5000)
       
        cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
        cy.wait(5000)
        
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
        cy.wait(5000)
        cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('bur{enter}');
        cy.wait(5000)
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click();
        cy.wait(5000)
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click();
        cy.get('#location').clear();
        cy.get('#location').type('WG7X+M5 Borg El Arab, Egypt');
        cy.wait(5000)
        cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
  
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .w-100 > label').click({force:true});
        cy.get('#opt-1').check({force:true});
        cy.get(':nth-child(4) > .w-100 > label').click({force:true});
        cy.get('#opt-4').check({force:true});
        cy.get(':nth-child(6) > .w-100 > label').click({force:true});
        cy.get('#opt-6').check({force:true});
        cy.get('.form-check > :nth-child(1) > label').click({force:true});
        cy.get('#opt-14').check({force:true});
        cy.get(':nth-child(3) > .container > .list-inline > :nth-child(1) > .btn').click({force:true})
        cy.wait(8000)
        

        /* ==== End Cypress Studio ==== */
      })

      it(' case3', function(){
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

        /* ==== Generated with Cypress Studio ==== */
        
       
        /* ==== End Cypress Studio ==== */
      })
     
    
    })