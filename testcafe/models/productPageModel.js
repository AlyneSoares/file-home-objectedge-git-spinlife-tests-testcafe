import { Selector } from 'testcafe'

export default class ProductPage {

    constructor(){
        this.Joystick = Selector('#i_X1897')
        this.rightSideJoystick = Selector('#i_X196850')
        this.chooseColorOfProduct = Selector('#i_X820')
        this.chosenColor = Selector('#i_X196852')
        this.selectWidth = Selector('#i_X828')
        this.widthSelected = Selector('#i_X196855')
        this.addToCartButton = Selector('a.add-to-cart')
        this.noThanksUpgrade = Selector('#noThanks')
        this.viewCart = Selector('.price-and-stuff > a:nth-child(4)')
    }
};