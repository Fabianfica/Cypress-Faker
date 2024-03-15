export class progressBar {
    static get buttons () {
        return {
            get startButton() {
                return cy.get(‘[id=“startButton”]‘);
            },
            get stopButton() {
                return cy.get(‘[id=“stopButton”]’);
            },
        }
    }
}