export class textInput {
    static get formGroup () {
        return {
            get inputThisButton() {
                return cy.get ( '[id="newButtonName"]');
            }
        }
    }
    static get buttons () {
        return {
            get buttonToChange () {
                return cy.get('[id="updatingButton"]');
            }
        }
    }
}