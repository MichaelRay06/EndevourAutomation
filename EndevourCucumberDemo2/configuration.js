var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');
require('jasmine2-protractor-utils');

    exports.config = {
        // The address of a running selenium server.
         //seleniumAddress: 'http://localhost:4444/wd/hub',
    
        directConnect: true,
    
    
       // set to "custom" instead of cucumber.
      framework: 'jasmine2',

      getPageTimeOut: 200000,
      allScriptsTimeout: 500000,
     
     
    
      capabilities: {
          "browserName": 'chrome'
    
      },
     
      // require feature files
      specs: [
        
        './specDefs/verifyWhyCypress_spec.js',
        './specDefs/urlContentVerification_spec.js' 
      ],
      params:{
          url: 'https://www.google.com/'
      },
    
      jasmineNodeOpts:{
    defaultTimeOutInterval:6000
      },

      plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath:'./screenshots',
        screenshotOnExpectFailure:false,
        screenshotOnSpecFailure:true,
        clearFoldersBeforeTest: true
      }],

     
    onPrepare: function() {

      browser.ignorSynchronization=true;
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(6000);
      browser.waitForAngularEnabled(false); 

    //jasmine allure reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));


   //
   jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './',
    filePrefix: 'xmlresults'
}));
  },

  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');

       var HTMLReport = require('protractor-html-reporter-2');

       testConfig = {
           reportTitle: 'Protractor Test Execution Report',
           outputPath: './',
           outputFilename: 'ProtractorTestReport',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });
}


  };