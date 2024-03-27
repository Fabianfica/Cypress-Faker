class LoginPage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com'); // La URL de inicio de sesión
    }
  
    fillEmail(email) {
      cy.get('#email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('#submit').submit();
    }
  }
  
  export default LoginPage;
  