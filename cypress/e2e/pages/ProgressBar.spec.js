import { progressBar } from “../components/ProgressBar/pro

describe(‘Clicks Start button and then waits for the progress bar to reach 75%’, () => {
    it(‘Presionar start y stop cuando se encuentre en el 75%‘, () => {
        cy.visit(‘/progressbar’);
        progressBar.buttons.startButton.click();
        progressBar.buttons.stopButton.click();
        //textInput.formGroup.inputMyButton.should(‘exist’).and(‘be.visible’);
        //const nombreAleatorio = faker.name.firstName();
        //textInput.formGroup.inputMyButton.type(nombreAleatorio);
        // Hacer clic en el botón para cambiar su contenido
        //textInput.buttons.buttonToChange.click();
        // Validar que el contenido del botón sea el mismo que se ingresó en el campo de entrada
        //textInput.buttons.buttonToChange.should(‘have.text’, nombreAleatorio);
    });
});