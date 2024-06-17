import LoginPage from '../pageobjects/login.page.js'

const loginPage = new LoginPage()
describe('Login users', () => {
    it('should not login with empty credentials', async () => {
        await loginPage.login("", "")
        await loginPage.assertInvalidLogin("Erro ao realizar login")
    })
})
