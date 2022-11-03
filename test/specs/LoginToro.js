describe("Faça o login", async () => {

    before(function (){
        // shell.exec('emulator @Pixel_4_API_33'); 
        console.log("ANTES DE TODOS TESTES")
    })

    after(function (){
        console.log("DEPOIS DE TODOS TESTES")
    })

    beforeEach(function (){
        console.log("ANTES DE CADA CENÁRIO DE TESTE")
    })

    afterEach(function (){
        console.log("DEPOIS DE CADA CENÁRIO DE TESTE")
    })

    it('Cenário 1: Deve dizer Hello World!', function (){
        console.log("Hello World!")
        console.log("Primeiro teste")
    })

    it('Cenário 2: Teste do Before e After Each', function (){
        console.log("Segundo teste")
    })
    

    
    // it("Deve aguardar e clicar em 'Entrar'",function(){
        
    //     //Elementos mapeados
    //     const BTN_Entrar = '~Entrar'
    //     const FIELD_EMAIL = '//android.view.View/android.widget.EditText[1]'
    //     const FIEL_SENHA = '//android.view.View/android.widget.EditText[2]'
        
    //     $(BTN_Entrar).waitForClickable()

    //     //Clica no Botão ENTRAR
    //     $(BTN_Entrar).click()

    //     // //Preenche o campo E-MAIL
    //     // $(FIELD_EMAIL).setValue('Teste@teste.com.br')

    //     // //Preenche o campo SENHA
    //     // $(FIEL_SENHA).setValue('Teste')

    //     // //Clica no Entrar
    //     // $(BTN_Entrar).click()

    // })

    it('Login Toro', async () => {
        
        // const BTN_Entrar = '~Entrar'
        const BTN_Entrar = '//android.widget.Button[@content-desc="Entrar"]'
        const FIELD_EMAIL = '//android.view.View/android.widget.EditText[1]'
        const FIEL_SENHA = '//android.view.View/android.widget.EditText[2]'

        const click_BTN_Entrar = await $(BTN_Entrar)
        await click_BTN_Entrar.click()

        const campo_email = await $(FIELD_EMAIL)
        await campo_email.click()
        await campo_email.addValue('Teste@teste.com.br')
        driver.execute("mobile: performEditorAction", { "action": "next" });

        const password = await $(FIEL_SENHA)
        await password.addValue('teste')
        driver.execute("mobile: performEditorAction", { "action": "next" });

        await click_BTN_Entrar.click()

    });

})