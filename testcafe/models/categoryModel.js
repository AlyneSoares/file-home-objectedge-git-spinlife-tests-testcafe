import { Selector } from 'testcafe'

export default class Category {

    constructor(){
        this.leftColumn = Selector ('div.column:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > label:nth-child(2)')
        this.centerColumn = Selector ('div.column:nth-child(3) > ul:nth-child(3) > li:nth-child(2) > label:nth-child(2)')
        this.rightColumn = Selector('div.column:nth-child(4) > ul:nth-child(3) > li:nth-child(1) > label:nth-child(2)')
        this.findButton = Selector('#wizardSubmit')
    }
}