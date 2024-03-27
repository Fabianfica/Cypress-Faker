import HomePage from "../components/thinking-components/homePage";
import RegisterPage from "../components/thinking-components/registerPage";
import LoginPage from "../components/thinking-components/loginPage";
describe('Proceso de registro y manejo de contactos', () => {
    it('Debería registrar un usuario, iniciar sesión y crear contactos', () => {
        const homePage = new HomePage();
        homePage.visit();
        homePage.clickSignup();

        const registerPage = new RegisterPage();
        registerPage.fillFormAndSubmit();

        const email = 'fabian.fica@applydigital.com';
        const password = '123456789';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillFormAndSubmit(email, password);
    });
}); 
