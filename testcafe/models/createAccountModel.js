import { Selector } from 'testcafe';

export default class createAccountModel {

    constructor() {
        this.email = Selector ('#emailCheck')
        this.verifyEmail = Selector ('#verifyEmail')
        this.firstName = Selector('#user_first_name')
        this.lastName = Selector ('#user_last_name')
        this.company = Selector ('#company_name')
        this.addEmail = 'teste@teste.com'
        this.addVerifyEmail = 'teste@teste.com'
        this.addFirstName = 'FirstName'
        this.addLastName = 'LastName'
        this.addCompany = 'GoodCompany'
        this.checkBox = Selector ('.css-label')
        this.registerButton = Selector('#form1')

    }
}