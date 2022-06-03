/// <reference types ="cypress" />


describe('seller registeration', function(){
    it(' case1', function(){
      cy.log('check validation on  personal information page')
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


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear();
      cy.wait(5000)
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('andre@gmail.com');
      cy.wait(5000)
      cy.get('.page-section > .col-lg-8 > :nth-child(1)').click();
      cy.wait(5000)
      cy.get('#register-phone-number').clear();
      cy.wait(5000)
      cy.get('#register-phone-number').type('11111a');
      cy.wait(5000)
      cy.get('#step2 > :nth-child(1)').click();
      cy.wait(5000)
      cy.get('#register-phone-number').clear();
      cy.wait(5000)
      cy.get('#register-phone-number').type('11111');
      cy.wait(5000)
      cy.get('#step2 > :nth-child(1)').click();
      cy.wait(5000)
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear();
      cy.wait(5000)
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('andreww@gmail.com');
      cy.wait(5000)
      cy.get('.page-section > .col-lg-8 > :nth-child(1)').click();
      cy.wait(5000)
      cy.get(':nth-child(2) > .container > .list-inline > .text-center > .btn').click();
      cy.wait(5000)
      /* ==== End Cypress Studio ==== */
    })
    it(' case2', function(){
      cy.log('check validation on  location page')
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
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').clear();
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').type('شششش');
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').clear();
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type('صصصص');
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear();
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('aaswswsws@gmail.com');
      cy.get('.page-section > .col-lg-8 > :nth-child(1)').click();
      cy.get('#password').clear();
      cy.get('#password').type('123456');
      cy.get('#password_confirmation').clear();
      cy.get('#password_confirmation').type('123456');
      cy.get('#register-phone-number').clear();
      cy.get('#register-phone-number').type('111');
      cy.get('#step2 > :nth-child(1)').click();
      cy.get(':nth-child(2) > .container > .list-inline > .text-center > .btn').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('zi{enter}');
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#location').clear();

      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */

      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('bu{enter}');
      cy.wait(5000)
      cy.get('#location').clear();
      cy.wait(5000)
      cy.get('#location').type('WF4X+RQ Borg El Arab, Egypt');
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click({force:true})
      /* ==== End Cypress Studio ==== */
    })
    it(' case3', function(){
      cy.log('check validation on  interest page')
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
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').clear();
      cy.get('.form-container-group > :nth-child(2) > :nth-child(1) > :nth-child(1) > .form-control').type('شششش');
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').clear();
      cy.get('.form-container-group > :nth-child(2) > :nth-child(2) > :nth-child(1) > .form-control').type('صصصص');
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').clear();
      cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .form-control').type('aaswswsws@gmail.com');
      cy.get('.page-section > .col-lg-8 > :nth-child(1)').click();
      cy.get('#password').clear();
      cy.get('#password').type('123456');
      cy.get('#password_confirmation').clear();
      cy.get('#password_confirmation').type('123456');
      cy.get('#register-phone-number').clear();
      cy.get('#register-phone-number').type('111');
      cy.get('#step2 > :nth-child(1)').click();
      cy.get(':nth-child(2) > .container > .list-inline > .text-center > .btn').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('zi{enter}');
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click();
      cy.get('#location').clear();

      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */

      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > .form-container-group > :nth-child(2)').click();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').clear();
      cy.wait(5000)
      cy.get('#vs5__combobox > .vs__selected-options > .vs__search').type('bu{enter}');
      cy.wait(5000)
      cy.get('#location').clear();
      cy.wait(5000)
      cy.get('#location').type('WF4X+RQ Borg El Arab, Egypt');
      cy.wait(5000)
      cy.get('#step3 > :nth-child(1) > :nth-child(2) > .container > .list-inline > :nth-child(1) > .btn').click({force:true})
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(3) > .container > .list-inline > :nth-child(1) > .btn').click({force:true});
      cy.wait(5000)
      cy.get('.form-check > :nth-child(1) > label').click({force:true});
      cy.wait(5000)
      cy.get('#opt-14').check({force:true});
      cy.wait(5000)
      /* ==== End Cypress Studio ==== */
    })
      
    })