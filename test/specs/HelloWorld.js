describe('Diga Hello World',function () {

    before(function (){
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
})