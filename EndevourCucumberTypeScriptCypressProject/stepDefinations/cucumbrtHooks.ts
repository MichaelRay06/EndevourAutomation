
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";




Before({tags:' '}, function () {

});

After(async  function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if(scenario.result.status == Status.FAILED)
      {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");

      } 
       
  });
