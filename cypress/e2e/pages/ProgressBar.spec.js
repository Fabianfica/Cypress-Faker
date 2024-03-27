import { ProgressBar } from "../components/progressBar.js/progressBar-components";
describe('Clicks Start button and then waits for the progress bar to reach 75%', () => {
    it('ingresar mi nombre en el input', () => {
        cy.visit('/progressbar');
        progressBar.buttons.startButton.click();
        progressBar.buttons.stopButton.click();
    });
});