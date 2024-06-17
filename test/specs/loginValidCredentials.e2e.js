import LoginPage from '../pageobjects/login.page.js'
import ProductListPage from '../pageobjects/productList.page.js'

const loginPage = new LoginPage()
const productListPage = new ProductListPage()
describe('Login users', () => {

    const email = "teste@teste.com"
    const password = "123456"
    it('should login with valid credentials', async () => {
        await loginPage.login(email, password)
        await productListPage.assertScreenProductList()
    })
})
