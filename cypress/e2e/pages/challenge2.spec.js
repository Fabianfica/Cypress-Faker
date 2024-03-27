import HomePage from "../components/thinking-components/homePage";
import RegisterPage from "../components/thinking-components/registerPage";
import LoginPage from "../components/thinking-components/loginPage";
import AddUserPage from "../components/thinking-components/addUser";
import UsersPage from "../components/thinking-components/users";
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

        const addUserPage = new AddUserPage();
        addUserPage.clickaddUser();


        const usersPage = new UsersPage ();
        cy.task('parseCsv', { filePath: 'contacts.csv' }).then((contacts) => {
            contacts.forEach((contact) => {
                usersPage.fillForm(
                    contact.firstName,
                    contact.lastName,
                    contact.birthdate,
                    contact.email,
                    contact.phone,
                    contact.street1,
                    contact.city,
                    contact.stateProvince,
                    contact.postalCode,
                    contact.country
                );
                addContactPage.submitForm();
                
            });
            
    });
    addUserPage.clickaddUser();
    });
}); 
