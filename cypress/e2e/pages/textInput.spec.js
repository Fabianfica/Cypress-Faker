import LoginPage from '../page_objects/loginPage';

describe('Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    loginPage.fillEmail('fabian.fica@applydigital.com');
    loginPage.fillPassword('12345678');
    loginPage.submit();

    // Agrega aquí tus aserciones para verificar que el inicio de sesión fue exitoso
  });
});