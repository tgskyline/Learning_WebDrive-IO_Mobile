describe("Faça o login",function(){
    // before(function (){
    //     // shell.exec('emulator @Pixel_4_API_33'); 
    //     console.log("ANTES DE TODOS TESTES")
    // })

    // after(function (){
    //     console.log("DEPOIS DE TODOS TESTES")
    // })

    // beforeEach(function (){
    //     console.log("ANTES DE CADA CENÁRIO DE TESTE")
    // })

    // afterEach(function (){
    //     console.log("DEPOIS DE CADA CENÁRIO DE TESTE")
    // })
    

    it("Deve aguardar e clicar em 'Entrar'",function(){
        
        //Elementos mapeados
        const BTN_Entrar = '~Entrar'
        // const FIELD_EMAIL = '//android.view.View/android.widget.EditText[1]'
        // const FIEL_SENHA = '//android.view.View/android.widget.EditText[2]'
        
        $(BTN_Entrar).waitForClickable()

        //Clica no Botão ENTRAR
        $(BTN_Entrar).click()

        // //Preenche o campo E-MAIL
        // $(FIELD_EMAIL).setValue('Teste@teste.com.br')

        // //Preenche o campo SENHA
        // $(FIEL_SENHA).setValue('Teste')

        // //Clica no Entrar
        // $(BTN_Entrar).click()

    })

})