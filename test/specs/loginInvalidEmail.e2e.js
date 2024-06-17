import LoginPage from '../pageobjects/login.page.js'

const loginPage = new LoginPage()
describe('Login users', () => {

    const password = "123456"
    it('should not login with invalid email', async () => {
        await loginPage.login("email@email.com", password)
        await loginPage.assertInvalidLogin("Erro ao realizar login")
    })
})
