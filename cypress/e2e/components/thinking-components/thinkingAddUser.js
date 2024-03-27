class Register {
    //propiedades / elementos
    get = {
    //endpoint:()=> cy.visit("/auth/login"),
    firstNameInput: ()=> cy.get('[id="firstName"]'),
    lastNameInput: ()=> cy.get('[id="lastName"]'),
    emailInput: ()=> cy.get('[id="email"]'),
    passwordInput: ()=> cy.get('[id="password"]'),
    registerButtont: ()=> cy.get('[id="submit"]'),
    cancelButtont: ()=> cy.get('[id="cancel"]'),
    MessageWarning: ()=> cy.get('[id="error"]'),

    //Customer login    
    forgotLink: ()=> cy.get('[class*="login-forgot"]p'),
    }
    //functions /methods
    enterUsername(type){
     this.get.usernameInput().type(type)
    }
    enterPassword(type){
        this.get.passwordInput().type(type)
       }
    sumitLogin(){
     this.get.sumitButtont().click()
    }   
}

export const login = new Login;