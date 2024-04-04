class registerNaveen {
    navigate (){
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }
    fillSubmitLogin(){
        cy.get('#input-email').type('applytesters@mydomain.com');
        cy.get('#input-password').type('Apply123!!!')
    }
    Submit(){
        cy.get('input[type="submit"]').click();
    }
    
}

export default registerNaveen