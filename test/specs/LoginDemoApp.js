describe("Faça o login",function(){

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
    
    it("Cenário 3: Deve aguardar e clicar em 'Login'", function(){
        
        // Elementos mapeados
        const ICN_LOGIN = '~Login'

        // Clica no Icone Login
        $(ICN_LOGIN).click()
        browser.pause(3000)
    })

    it("Cenário 4: Deve realizar o login com SUCESSO!'", function() {
        
        // Elementos mapeados
        const ICN_LOGIN = '~Login'
        const FIELD_EMAIL = '~input-email'
        const FIELD_SENHA = '~input-password'
        const BTN_LOGIN = '~button-LOGIN'

        // Clica no Icone Login
        $(ICN_LOGIN).waitForClickable({ timeout: 5000 });
        $(ICN_LOGIN).click()
        browser.pause(3000)

        // Preenche o campo E-mail
        $(FIELD_EMAIL).waitForClickable({ timeout: 5000 });
        $(FIELD_EMAIL).setValue('a@a.com')

        // Preenche o campo Senha
        $(FIELD_SENHA).waitForClickable({ timeout: 5000 });
        $(FIELD_SENHA).setvalue('12345678')

        // Clica no Botão Login
        $(BTN_LOGIN).waitForClickable({ timeout: 5000 });
        $(BTN_LOGIN).click()

        browser.pause(3000)

    })

})
