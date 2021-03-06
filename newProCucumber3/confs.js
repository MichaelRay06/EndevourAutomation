exports.config = {

    // setting to launch tests directly without selenium server
    directConnect: true,
    // address of running selenium server
    //   seleniumAddress: 'http://localhost:4444/wd/hub',

    // setting time outs
    getPageTimeOut: 200000,
    allScriptsTimeout: 500000,

    // setting framework
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
    ignoreUncaughtExceptions: true,

    // browser to launch tests
    capabilities: {
        browserName: 'chrome',
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            reportName: 'CucumberJS Report',
            pageFooter: '<div><p>Created by Way2Automation</p></div>',
            pageTitle: 'CucumberJS with Protractor Report',
            customData:{
                title: 'Execution info',
                data:[

                    {label: 'Project', value: 'CucumberJS Project'},
                    {label: 'Release', value: '1.2.3'},
                    {label: 'Tester', value: 'Rahul Arora'}

                ]


            },

            displayDuration: true
        }
    }],

    // Specify Test Files
    //
    // Define which tests should execute
    specs: [
        'features/test2.feature'

    ],

    //Define which tests should be excluded from execution.
    exclude: [
        // './feature/*.feature'
    ],

    // arguments to cucumber.js
    cucumberOpts: {
        tags: false,
       format:'json:.tmp/results.json',
        require: [

          'features/stepdefinations/test2Step.js',
             'features/stepdefinations/test3Step.js',

        ],


    },
    onPrepare: function(){
        browser.ignorSynchronization=true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
        browser.waitForAngularEnabled(false);


    }


};