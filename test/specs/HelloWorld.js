// const shell = require('shelljs');

describe('Diga Hello World',function () {

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

    it('Cenário 2: A Definir', function (){
        console.log("Segundo teste")
    })

    it('Cenário 3: Clique em Login', function(){
        
        // Browser.pause(3000)
        
        //Elementos mapeados
         const BTN_Entrar = '~Login'
        
        //  $(BTN_Entrar).waitForClickable()
 
         //Clica no Botão ENTRAR
         $(BTN_Entrar).click()
    })
})