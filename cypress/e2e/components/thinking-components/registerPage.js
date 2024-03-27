class RegisterPage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    }
  
    fillFormAndSubmit() {
      cy.get('#firstName').type('Fabian');
      cy.get('#lastName').type('Fica');
      cy.get('#email').type('fabian.fica1@applydigital.com');
      cy.get('#password').type('123456789');
      cy.get('#submit').click();
    }
  }
  
  export default RegisterPage;