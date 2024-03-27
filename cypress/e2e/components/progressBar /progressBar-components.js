export class ProgressBar {
    static get buttons (){
        return {
            get startButton() {
                return cy.get ('[id="startButton"]');
            }
        }
    }
    static get buttons (){
        return {
            get stoptButton() {
                return cy.get ('[id="stopButton"]');
                
            }
        }
    }
}