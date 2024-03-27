class HomePage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    }
  
    clickSignup() {
      cy.get('#signup').click();
      
    }
  }
  
  export default HomePage;