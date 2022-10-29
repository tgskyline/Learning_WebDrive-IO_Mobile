describe("Faça o login",function(){

    

    it("Deve aguardar e clicar em 'Entrar'",function(){
        
        //Elementos mapeados
        const LOC_Entrar = 'COMEÇAR'
        const BTN_Entrar = $(`android=${LOC_Entrar}`)
        
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