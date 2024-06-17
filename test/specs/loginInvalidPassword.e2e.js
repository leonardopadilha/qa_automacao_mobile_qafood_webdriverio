import LoginPage from '../pageobjects/login.page.js'

const loginPage = new LoginPage()
describe('Login users', () => {

    const email = "teste@teste.com"
    it('should not login with invalid password', async () => {
        await loginPage.login(email, "12345")
        await loginPage.assertInvalidLogin("Erro ao realizar login")
    })
})
