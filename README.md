# Aprendizado sobre WebDriver IO para automação Mobile Android

## Framework de automação de teste WEB e MOBILE

Crie um novo projeto NodeJs

    npm init -y

Instalação do Appium

    npm install -g appium

ou para instalar a versão Beta

    npm install -g appium@next

Instale o Appium doctor e o execute para verificar se esta tudo ok

    npm install -g appium-doctor

Execute o Appium Doctor com o comando

    appium-doctor --android
    appium-doctor --ios

Instale o Wdio CLI

    npm i @wdio/cli

Instalação do WebdriverIO

    npm init wdio .

Também pode ser configurado o projeto a parte com o comando 

    npx wdio config

Parametrização e repostas da confgiuração do Wdio

    =========================
    WDIO Configuration Helper
    =========================

    ? Where is your automation backend located? On my local 
    machine
    ? Which framework do you want to use? mocha      
    ? Do you want to use a compiler? Babel (https://babeljs.io/)
    ? Where are your test specs located? ./test/specs/**/*.js  
    ? Do you want WebdriverIO to autogenerate some test files? 
    Yes
    ? Do you want to use page objects 
    (https://martinfowler.com/bliki/PageObject.html)? Yes
    ? Where are your page objects located? 
    ./test/pageobjects/**/*.js
    ? Which reporter do you want to use? spec
    ? Do you want to add a plugin to your test setup?
    ? Do you want to add a service to your test setup? appium
    ? What is the base url? http://localhost    
    ? Do you want me to run `npm install` Yes

    Installing wdio packages:  
    - @wdio/local-runner       
    - @wdio/mocha-framework    
    - @wdio/spec-reporter      
    - @wdio/appium-service     

Iniciar o AVD por linha de comando

    emulator @avd_name [ {-option [value]} … ]

Comando para listar AVDS

    emulator -list-avds

Exemplo

    emulator @Pixel_4_API_33

Executar testes

    npm run wdio

Executar teste mobile com capabilities 

    npm test run ./test-config.js

Atalho rápido para execução do teste

    npx wdio

NOTA: Para iniciar o Servidor Appium caso não utilize o Wdio/CLI utilize o comando abaixo

    appium -a localhost --base-path /wd/hub --port 4723
    appium -a 127.0.0.1 --base-path /wd/hub --port 4723

Verifique se driver UIAUTOMATOR2 esta instalado com o comando abaixo

    appium driver list

NOTA: Caso não consiga ter a lista dos driver com o comando acima recomendo desinstalar a versão do Appium com o comando abaixo e instar a versão Beta com o comando <npm install -g appium@next> que esta listado logo acima nas anotações.

Desinstalação do Appium Global e Dependência do projeto

    npm uninstall -g appium
    npm unistanll appium

Com o appium desinstalado instale a versão beta e ela sido instalada sem erros executo o comando abaixo caso seu retorno tenha sido similar ao do exemplo abaixo.

    $ appium driver list
    ✔ Listing available drivers
    - uiautomator2 [not installed]
    - xcuitest [not installed]
    - youiengine [not installed]
    - windows [not installed]
    - mac [not installed]
    - mac2 [not installed]
    - espresso [not installed]
    - tizen [not installed]
    - flutter [not installed]
    - safari [not installed]
    - gecko [not installed]

Instale o Driver UIAUTOMATOR2 com o comando abaixo

    appium driver install uiautomator2
