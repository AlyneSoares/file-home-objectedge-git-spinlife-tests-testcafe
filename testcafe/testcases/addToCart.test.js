
import { Selector } from 'testcafe';
import Home from '../models/homeModel.js'
import SearchResult from '../models/searchResultModel.js'
import Category from '../models/categoryModel.js'
import ProductPage from '../models/productPageModel.js'

const home = new Home();
const srcResult = new SearchResult();
const category = new Category();
const product = new ProductPage();

fixture ('Add Product to Cart')
.beforeEach (async t =>{
})
.page('https://www.testtest.com/');

test('Create Account', async t => {
   
    await t

    .typeText(home.searchForm, home.textToSearch)
    .click(home.searchButton)
    .click(category.leftColumn)
    .click(category.centerColumn)
    .click(category.rightColumn)
    .click(category.findButton)
    .click(srcResult.viewIten)
    .click(product.Joystick)
    .click(product.rightSideJoystick)
    .click(product.chooseColorOfProduct)
    .click(product.chosenColor)
    .click(product.selectWidth)
    .click(product.widthSelected)
    .click(product.addToCartButton)
    .click(product.noThanksUpgrade)
    .click(product.viewCart)

});