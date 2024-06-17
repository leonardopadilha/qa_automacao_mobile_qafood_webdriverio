import { $, expect } from '@wdio/globals'
import element from '../elements/login.elements.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $(element.login.input.email);
    }

    get inputPassword () {
        return $(element.login.input.password);
    }

    get btnSubmit () {
        return $(element.login.button.enter);
    }

    get loginErrorMessage() {
        return $(element.login.message.error)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async textErrorLogin() {
        return await this.loginErrorMessage.getText()
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async assertInvalidLogin (message) {
        await expect(await this.textErrorLogin()).toEqual(message)
    }
}
