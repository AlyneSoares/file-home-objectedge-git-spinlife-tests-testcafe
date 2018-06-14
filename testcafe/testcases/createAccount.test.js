
import { Selector } from 'testcafe';
import Home from '../models/homeModel.js'
import LogIn from '../models/loginModel.js'
import Register from '../models/createAccountModel.js'

const home = new Home();
const login = new LogIn();
const register = new Register();

fixture ('Create Account')
.beforeEach (async t =>{
})
.page('https://www.testtest.com/');

test('Create Account', async t => {
   
    await t

    .click(home.logInLink)
    .click(login.registerLink)
    .typeText(register.email, register.addEmail)
    .typeText(register.verifyEmail, register.addVerifyEmail)
    .typeText(register.firstName, register.addFirstName)
    .typeText(register.lastName, register.addLastName)
    .typeText(register.company, register.addCompany)
    .click(register.checkBox)
    .click(register.registerButton)
    
});
