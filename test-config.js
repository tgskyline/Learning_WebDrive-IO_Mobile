exports.config = {
    ruuner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        requires: ['@babel/register'],
        timeout: 60000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        'test\\specs\\HelloWorld.js'
    ],
    // capabilities: [{
    //     platformName: 'Android',
    //     automationName: 'UiAutomator2',
    //     udid: 'emulator-5554',
    //     appPackage: 'com.wdiodemoapp',
    //     appActivity: '.MainActivity'
    // }]    
    capabilities: [{
        platformName: 'Android',
        automationName: 'UiAutomator2',
        udid: 'emulator-5554',
        app: 'C:\\qa.automation.robot\\QA.Automation.Robot\\Config\\Apk\\ToroMobile_HML_10-8-0.apk',
        // appActivity: '.MainActivity'
    }]
}
