"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
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
        tags: '  @currentURL_Content',
        format: 'json:./cucumberJson_rporter.json',
        // require step definitions
        require: [
            './stepDefinations/verifyCypressChildWindowContent_step.js',
            './stepDefinations/verifyLandingPageURL_step.js'
        ]
    },
    onPrepare: function () {
        protractor_1.browser.ignorSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().pageLoadTimeout(60000);
        protractor_1.browser.manage().timeouts().implicitlyWait(6000);
        protractor_1.browser.waitForAngularEnabled(false);
    }
};
onComplete: () => {
    var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version": "0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBbUM7QUFFbkMsaUVBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBRXhCLGFBQWEsRUFBQyxJQUFJO0lBR2pCLDBCQUEwQjtJQUN6Qiw0QkFBNEI7SUFFOUIsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFHRCx1Q0FBdUM7SUFDdkMsU0FBUyxFQUFFLFFBQVE7SUFFbkIsMkNBQTJDO0lBQzNDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELHdCQUF3QixFQUFFLElBQUk7SUFDL0IsbUNBQW1DO0lBRWxDLHdCQUF3QjtJQUN4QixLQUFLLEVBQUU7UUFDTCxxQ0FBcUMsQ0FBQyxpQkFBaUI7S0FDeEQ7SUFFRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUMsdUJBQXVCO1FBQzVCLE1BQU0sRUFBQyxrQ0FBa0M7UUFDekMsMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNSLDJEQUEyRDtZQUMxRCxnREFBZ0Q7U0FFakQ7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNSLG9CQUFPLENBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDO1FBQ2pDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUd6QyxDQUFDO0NBQ0osQ0FBQTtBQUdELFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDZixJQUFJLE9BQU8sR0FBRztRQUNaLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRTtZQUNOLGFBQWEsRUFBQyxPQUFPO1lBQ3JCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxVQUFVLEVBQUUsWUFBWTtZQUN4QixVQUFVLEVBQUUsV0FBVztZQUN2QixVQUFVLEVBQUUsUUFBUTtTQUN2QjtLQUNKLENBQUM7SUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRzNCLENBQUMsQ0FBQSJ9