import registerNaveen from "../components/login-naveen/registerNaveen";
const RegisterNaveen = new registerNaveen ();

describe ('login y busqueda de producto', () => {
    it ('login', () => {
        RegisterNaveen.navigate();
        RegisterNaveen.fillSubmitLogin();
        RegisterNaveen.Submit();
    })
})