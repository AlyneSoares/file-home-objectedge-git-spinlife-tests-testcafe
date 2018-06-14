import { Selector } from 'testcafe';

export default class homeModel {

    constructor() {
        this.searchForm = Selector('#searchForm > input:nth-child(1)')
        this.textToSearch = 'Power Wheelchair'
        this.searchButton = Selector('#searchForm > input:nth-child(2)')
        this.logInLink = Selector ('.my-account')
    }

}