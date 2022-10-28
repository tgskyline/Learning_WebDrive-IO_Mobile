# Aprendizado sobre WebDriver IO para automação Mobile Android

## Framework de automação de teste WEB e MOBILE

Instalação do Appium

    npm install -g appium

Comando para listar AVDS

    emulator -list-avds

Iniciar o AVD por linha de comando


    emulator @avd_name [ {-option [value]} … ]

Exemplo

    emulator @Pixel_4_API_33

Instalação do WebdriverIO

    npm init wdio .

Parametrização e repostas da confgiuração do Wdio

    =========================
    WDIO Configuration Helper
    =========================

    ? Where is your automation backend located? On my local machine
    ? Which framework do you want to use? mocha      
    ? Do you want to use a compiler? Babel (https://babeljs.io/)
    ? Where are your test specs located? ./test/specs/**/*.js        
    ? Do you want WebdriverIO to autogenerate some test files? Yes
    ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
    ? Where are your page objects located? ./test/pageobjects/**/*.js
    ? Which reporter do you want to use? spec
    ? Do you want to add a plugin to your test setup?
    ? Do you want to add a service to your test setup? appium, eslinter-service
    ? What is the base url? http://localhost    
    ? Do you want me to run `npm install` Yes