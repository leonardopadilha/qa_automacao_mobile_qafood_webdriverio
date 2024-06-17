import { $, expect } from '@wdio/globals'
import element from '../elements/productList.elements.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class ProductListPage {
    /**
     * define selectors using getter methods
     */
    get selectAddress () {
        return $(element.productList.select.address);
    }

    async validSceenProductList() {
        return await this.selectAddress.getText()
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async assertScreenProductList () {
        expect(await this.validSceenProductList()).toBeDisplayed();
    }
}
