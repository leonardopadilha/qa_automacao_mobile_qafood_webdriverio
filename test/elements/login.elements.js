const element = {
    login: {
        input: {
            email: 'android=new UiSelector().text("E-mail")',
            password: 'android=new UiSelector().text("Senha")',
        },
        button: {
            enter: 'android=new UiSelector().packageName("com.qazandoqafood").text("ENTRAR")'
        },
        message: {
            error: '//*[@text="Erro ao realizar login"]'
        }
    }
}

module.exports = element