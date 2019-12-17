import{browser} from  "protractor";
import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {

    directConnect:true,
      
   
     // getPageTimeOut: 200000,
      //allScriptsTimeout: 500000,

    capabilities: {
        browserName: 'chrome'
    },
    

    // set to "custom" instead of cucumber.
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
   // SELENIUM_PROMISE_MANAGER: false,
  
    // require feature files
    specs: [
      '../features/cypressSiteTest.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      tags:'  @currentURL_Content',
      format:'json:./cucumberJson_rporter.json',
      // require step definitions
      require: [
       './stepDefinations/verifyCypressChildWindowContent_step.js', 
        './stepDefinations/verifyLandingPageURL_step.js'
        
      ]
    },
    onPrepare: function(){
       browser.ignorSynchronization=true;
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(60000);
        browser.manage().timeouts().implicitlyWait(6000);
        browser.waitForAngularEnabled(false);

    
    }
}
  

onComplete: () =>{
  var options = {
    theme: 'bootstrap',
    jsonFile: './cucumberreport.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }  
};

reporter.generate(options);


}




