/// <reference types ="cypress" />


describe('quiz', function(){
it(' case2', function(){
 const fileName='original.jpeg';
 cy.visit('https://staging.mazaady.com/', {
  headers: {
    "Accept-Encoding": "gzip, deflate, br"
  }
})



 /* ==== Generated with Cypress Studio ==== */
 cy.get('.flex-row > .user-actions').click({ force: true});
 cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click({ force: true});
 cy.get('#email').clear({ force: true});
 cy.get('#email').type('an_tester@mazaady.com',{force: true});
 cy.get('#password').clear({ force: true});
 cy.get('#password').type('testermazaady',{force: true});
 cy.get('.w-75 > .btn').click({ force: true});
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get('.flex-row > .user-actions').click({ force: true});
 cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > :nth-child(5) > a').click({ force: true});
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get('.w-25 > .btn').click({ force: true});
 cy.get('.page-content').click({ force: true});
 cy.get('.page-content').click({ force: true});
 cy.get('[data-src="https://staging.mazaady.com/uploads/LiveBadge/design_img/ioy3w4Vjfz5RBO548mcl9VIqKVTJ4DoyyHJXy4A5.jpeg"] > :nth-child(1) > .choose-badge-icons > .fa').click({ force: true});
 cy.get('.slick-current > :nth-child(1) > img').click({ force: true});
 cy.get('.lg-close').click({ force: true});
 cy.get('[data-src="https://staging.mazaady.com/uploads/LiveBadge/design_img/NTrxRrYMTbJ9ZOYS46twXy1eKEgxB00jLkCfTFaX.jpeg"] > :nth-child(1) > .choose-badge-icons > .fa').click({ force: true});
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').clear({ force: true});
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').type('andrewwwwww',{ force: true});
 cy.get('#vs3__combobox > .vs__selected-options > .vs__search').click();
 cy.wait(5000)


 /* ==== Generated with Cypress Studio ==== */
 cy.get('#vs3__combobox > .vs__selected-options > .vs__search').clear();
 cy.wait(5000)

 cy.get('#vs3__combobox > .vs__selected-options > .vs__search').type('clo{enter}');
 cy.wait(5000)
 cy.get('#vs4__combobox > .vs__selected-options > .vs__search').clear();
 cy.wait(5000)
 cy.get('#vs4__combobox > .vs__selected-options > .vs__search').type('clo{enter}');
 cy.wait(5000)
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get('#vs9__combobox > .vs__selected-options > .vs__search').clear();
 cy.wait(5000)
 cy.get('#vs9__combobox > .vs__selected-options > .vs__search').type('bo{enter}');
 cy.wait(5000)
 cy.get('#vs15__combobox > .vs__selected-options > .vs__search').clear();
 cy.wait(5000)
 cy.get('#vs15__combobox > .vs__selected-options > .vs__search').type('3 s{enter}');
 cy.wait(5000)
 cy.get('#vs10__combobox > .vs__selected-options > .vs__search').clear();
 cy.wait(5000)
 cy.get('#vs10__combobox > .vs__selected-options > .vs__search').type('cap{enter}');
 cy.wait(5000)
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get(':nth-child(9) > [data-type="boys & girls"]').click();
 cy.get(':nth-child(9) > [data-type="General"]').click();
 cy.get('#vs11__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs11__combobox > .vs__selected-options > .vs__search').type('ac{enter}');
 cy.get('#vs12__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs12__combobox > .vs__selected-options > .vs__search').type('bla{enter}');
 cy.get('#vs13__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs13__combobox > .vs__selected-options > .vs__search').type('ne{enter}');
 cy.get('.col > div > .form-control').clear();
 cy.get('.col > div > .form-control').type('222222222');
 cy.get('#vs14__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs14__combobox > .vs__selected-options > .vs__search').type('egyp{enter}');
 cy.get(':nth-child(5) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(5) > .col > :nth-child(3) > .form-control').type('3');
 cy.get(':nth-child(7) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(7) > .col > :nth-child(3) > .form-control').type('WQVP+5Q Yaylak/Sarıyahşi/Aksaray, Turkey');
 const iframe=cy.get("#tinymce_description_ifr").
 its('0.contentDocument.body').
 should('be.visible').then(cy.wrap);
 iframe.clear().type('helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
 const iframe2=cy.get("#tinymce_policy_ifr").
 its('0.contentDocument.body').
 should('be.visible').then(cy.wrap);
 iframe.clear().type('hellowwwwwwwwwwwwwwwwwwwwwwwwwwww')
 cy.wait(5000)



 /* ==== Generated with Cypress Studio ==== */



 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get('#main_image_btn').click();
 cy.get('#main-image').click({ force: true}).attachFile('original.jpeg');
 cy.wait(5000)
 cy.get('#step-2 > :nth-child(1) > .form-container-group > .mt-4 > .col-12 > .btn').click({ force: true})
 cy.wait(5000)

 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-control').type('200000');
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear();
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('20000000');
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').type('20000000');
 cy.get('.col-sm-12 > :nth-child(3) > .form-control').clear();
 cy.get('.col-sm-12 > :nth-child(3) > .form-control').type('3');
 cy.get('#vue-button-to-open-date').click();
 cy.get('#mddtp-date__current > .mddtp-picker__grid > .mddtp-picker__tr > :nth-child(26)').click();
 cy.get('#mddtp-date__current > .mddtp-picker__grid > .mddtp-picker__tr > :nth-child(31)').click();
 cy.get('#mddtp-date__ok').click();
 cy.get('#vue-button-to-open-time').click();
 cy.get('#mddtp-time__hourView > .mddtp-picker__cell--rotate-90 > span').click();
 cy.get('#mddtp-time__minuteView > .mddtp-picker__cell--rotate-110 > span').click();
 cy.get('#mddtp-time__ok').click();

 cy.get(':nth-child(1) > .cl-switch > .switcher').click();
 cy.get(':nth-child(1) > .cl-switch > .hidden').check({ force: true});
 cy.get('#step-3 > :nth-child(1) > .container > .mt-4 > .col-12 > .btn').click({ force: true})
cy.wait(5000)
 
 cy.get('.swal-button').click({ force: true});
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear({ force: true});
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('2',{ force: true});
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').clear({ force: true});
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').type('20',{ force: true});
 cy.get('#step-3 > :nth-child(1) > .container > .mt-4 > .col-12 > .btn').click({ force: true});
 cy.wait(5000)

 cy.get(':nth-child(2) > .col-12 > .btn').click({ force: true});
 cy.wait(5000)

 cy.get(':nth-child(2) > .swal-button').click({ force: true});
 cy.wait(5000)
 cy.get('.nav > :nth-child(1) > a').click({ force: true});
 cy.wait(5000)

 /* ==== Generated with Cypress Studio ==== */

 /* ==== End Cypress Studio ==== */
})   

it.skip(' case1', function(){
 const fileName='original.jpeg';
 cy.visit('https://staging.mazaady.com/', {
  headers: {
    "Accept-Encoding": "gzip, deflate, br"
  }
})



 /* ==== Generated with Cypress Studio ==== */
 cy.get('.flex-row > .user-actions').click({ force: true});
 cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > .nav-item > [href="https://staging.mazaady.com/login"]').click({ force: true});
 cy.get('#email').clear({ force: true});
 cy.get('#email').type('an_tester@mazaady.com',{force: true});
 cy.get('#password').clear({ force: true});
 cy.get('#password').type('testermazaady',{force: true});
 cy.get('.w-75 > .btn').click({ force: true});
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */
 cy.get('.flex-row > .user-actions').click({ force: true});
 cy.get('.flex-row > .user-actions > .dropdown-menu > .categories-sections > :nth-child(5) > a').click({ force: true});
 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */



 /* ==== Generated with Cypress Studio ==== */
 cy.get('[href="https://staging.mazaady.com/add-product/multiple"]').click();
 cy.get('.w-25 > .btn').click();
 cy.get('.m-2').click();
 cy.get(':nth-child(1) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(1) > .col > :nth-child(3) > .form-control').type('wwwww');
 cy.get('#vs11__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs11__combobox > .vs__selected-options > .vs__search').type('clo{enter}');
 cy.get('#vs12__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs12__combobox > .vs__selected-options > .vs__search').type('clo{enter}');
 cy.get('#vs13__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs13__combobox > .vs__selected-options > .vs__search').type('boy{enter}');
 cy.get('#vs19__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs19__combobox > .vs__selected-options > .vs__search').type('2b{enter}');
 cy.get('#vs14__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs14__combobox > .vs__selected-options > .vs__search').type('aba{enter}');
 cy.get(':nth-child(10) > [data-type="General"]').click();
 cy.get('#vs15__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs15__combobox > .vs__selected-options > .vs__search').type('bam{enter}');
 cy.get('#vs16__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs16__combobox > .vs__selected-options > .vs__search').type('bla{enter}');
 cy.get('#vs17__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs17__combobox > .vs__selected-options > .vs__search').type('new{enter}');
 cy.get('.col > div > .form-control').clear();
 cy.get('.col > div > .form-control').type('2321');
 cy.get('#vs18__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs18__combobox > .vs__selected-options > .vs__search').type('egy{enter}');
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').type('3');
 /* ==== End Cypress Studio ==== */
 cy.get('.modal-footer > .btn-danger').click({ force: true})
 cy.wait(5000)

 /* ==== Generated with Cypress Studio ==== */
 cy.get(':nth-child(4) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(4) > .col > :nth-child(3) > .form-control').type('wawsa');
 cy.get('.m-2').click();
 cy.get(':nth-child(1) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(1) > .col > :nth-child(3) > .form-control').type('qae');
 cy.get('#vs22__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs22__combobox > .vs__selected-options > .vs__search').type('anim{enter}');
 cy.get('#vs23__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs23__combobox > .vs__selected-options > .vs__search').type('pet{enter}');
 cy.get('#vs24__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs24__combobox > .vs__selected-options > .vs__search').type('cat{enter}');
 cy.get('#vs29__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs29__combobox > .vs__selected-options > .vs__search').type('american bob{enter}');
 cy.get('#vs25__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs25__combobox > .vs__selected-options > .vs__search').type('un{enter}');
 cy.get('#vs26__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs26__combobox > .vs__selected-options > .vs__search').type('bla{enter}');
 cy.get('.col > div > .form-control').clear();
 cy.get('.col > div > .form-control').type('23');
 cy.get('#vs27__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs27__combobox > .vs__selected-options > .vs__search').type('fe{enter}');
 cy.get('#vs28__combobox > .vs__selected-options > .vs__search').clear();
 cy.get('#vs28__combobox > .vs__selected-options > .vs__search').type('aki{enter}');
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(3) > .col > :nth-child(3) > .form-control').type('23');
 cy.get('.modal-footer > .btn-danger').click();
 /* ==== End Cypress Studio ==== */
 const iframe=cy.get("#tinymce_description_ifr").
 its('0.contentDocument.body').
 should('be.visible').then(cy.wrap);
 iframe.clear().type('helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
 const iframe2=cy.get("#tinymce_policy_ifr").
 its('0.contentDocument.body').
 should('be.visible').then(cy.wrap);
 iframe.clear().type('hellowwwwwwwwwwwwwwwwwwwwwwwwwwww')
 cy.wait(5000)
 cy.get('#main_image_btn').click();
 cy.get('#main-image').click({ force: true}).attachFile('original.jpeg');
 cy.wait(5000)
 cy.get('#step-2 > :nth-child(1) > .form-container-group > .mt-4 > .col-12 > .btn').click({ force: true})
 cy.wait(5000)
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .form-control').type('200000');
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear();
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('20000000');
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').clear();
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').type('20000000');
 cy.get('.col-sm-12 > :nth-child(3) > .form-control').clear();
 cy.get('.col-sm-12 > :nth-child(3) > .form-control').type('3');
 cy.get('#vue-button-to-open-date').click();
 cy.get('#mddtp-date__current > .mddtp-picker__grid > .mddtp-picker__tr > :nth-child(26)').click();
 cy.get('#mddtp-date__current > .mddtp-picker__grid > .mddtp-picker__tr > :nth-child(31)').click();
 cy.get('#mddtp-date__ok').click();
 cy.get('#vue-button-to-open-time').click();
 cy.get('#mddtp-time__hourView > .mddtp-picker__cell--rotate-100 > span').click();
 cy.get('#mddtp-time__minuteView > .mddtp-picker__cell--rotate-100 > span').click();
 cy.get('#mddtp-time__ok').click();
 
 cy.get(':nth-child(1) > .cl-switch > .switcher').click();
 cy.get(':nth-child(1) > .cl-switch > .hidden').check({ force: true});
 cy.get('#step-3 > :nth-child(1) > .container > .mt-4 > .col-12 > .btn').click({ force: true})
cy.wait(5000)
 
 cy.get('.swal-button').click({ force: true});
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').clear({ force: true});
 cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('2',{ force: true});
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').clear({ force: true});
 cy.get(':nth-child(3) > :nth-child(2) > :nth-child(3) > .form-control').type('20',{ force: true});
 cy.get('#step-3 > :nth-child(1) > .container > .mt-4 > .col-12 > .btn').click({ force: true});
 cy.wait(5000)

 cy.get(':nth-child(2) > .col-12 > .btn').click({ force: true});
 cy.wait(5000)

 cy.get(':nth-child(2) > .swal-button').click({ force: true});
 cy.wait(5000)
 cy.get('.nav > :nth-child(1) > a').click({ force: true});
 cy.wait(5000)



 /* ==== Generated with Cypress Studio ==== */



 /* ==== End Cypress Studio ==== */
 /* ==== Generated with Cypress Studio ==== */

})  


})