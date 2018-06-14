import { Selector } from 'testcafe';
import Home from '../models/homeModel.js'

const home = new Home();

fixture ('Search product')
.beforeEach (async t =>{
})
.page('https://www.testtest.com/');

test('Search product', async t => {
    await t

    .typeText(home.searchForm, home.textToSearch)
    .click(home.searchButton)

});