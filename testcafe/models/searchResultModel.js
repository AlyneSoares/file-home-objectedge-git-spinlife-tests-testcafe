import { Selector } from 'testcafe'

export default class SearchResult {

    constructor(){
        this.sort = Selector ('div.options:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > select:nth-child(4)')
        this.viewIten = Selector ('div.product:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > a:nth-child(5)')
        
    }
}
