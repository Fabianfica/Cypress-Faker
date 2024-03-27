class Loginthinking {
    //propiedades / elementos
    get = {
    //endpoint:()=> cy.visit("/auth/login"),  

    loginInput: ()=> cy.get('[id="email"]'),
    passwordInput: ()=> cy.get('[id="password"]'), 
    submitButtont: ()=> cy.get('[class="button"]'),
    userNameMessageWarning: ()=> cy.get('[id="error"]'),
    //Customer login   
    //forgotLink: ()=> cy.get('[class*="login-forgot"]p'),
    }
    //functions /methods
    enterUsername(type){
     this.get.usernameInput().type('fabian.fica@applydigital.com')
    }
    enterPassword(type){
        this.get.passwordInput().type('12345678')
       }
    sumitLogin(){
     this.get.sumitButtont().click()
    }   
}

export const login = new Login;