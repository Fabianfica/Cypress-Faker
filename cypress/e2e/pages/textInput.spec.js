import { textInput } from "../components/textInput/textInput-components.js"
import { faker } from '@faker-js/faker';
describe('Visualization of header components', () => {
    it('ingresar mi nombre en el input', () => {
        cy.visit('/textinput');
        textInput.formGroup.inputMyButton.should('exist').and('be.visible');
        const nombreAleatorio = faker.name.firstName();
        textInput.formGroup.inputMyButton.type(nombreAleatorio);
        // Hacer clic en el botón para cambiar su contenido
        textInput.buttons.buttonToChange.click();
        // Validar que el contenido del botón sea el mismo que se ingresó en el campo de entrada
        textInput.buttons.buttonToChange.should('have.text', nombreAleatorio);
    });
});