class contactList {
    //propiedades / elementos
    get = {
    //endpoint:()=> cy.visit("/auth/login"),
    firstName: ()=> cy.get('[id="firstName"]'),
    lastName: ()=> cy.get('[id="lastName"]'),
    birthDate: ()=> cy.get('[id="birthdate"]'),
    email: ()=> cy.get('[id="email"]'),
    street1: ()=> cy.get('[id="street1"]'),
    street2: ()=> cy.get('[id="street2"]'),
    city: ()=> cy.get('[id="city"]'),
    stateProvince: ()=> cy.get('[id="stateProvince"]'),
    postaleCode: ()=> cy.get('[id="postalCode"]'),
    postaleCode: ()=> cy.get('[id="postalCode"]'),
    submitButton: ()=> cy.get('[id="submit"]'),
    cancelButton: ()=> cy.get('[id="cancel"]'),
    logoutButton: ()=> cy.get('[id="logout"]'),

    

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