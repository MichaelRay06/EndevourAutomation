
'use strict';
module.exports ={

    elementGoogleHomePgae:{

   googleTextBox_type: element(by.name('q')),
   googleTextBox_enter: element(by.name('q'))




},



googleTextField: function(TextToSerch) {

    var element = this.elementGoogleHomePgae;
  element.googleTextBox_type.sendKeys(TextToSerch)

},


googleTextField_ENTER: function(){
    var element= this.elementGoogleHomePgae;
    element.googleTextBox_type.sendKeys(protractor.Key.ENTER)
    browser.sleep(6000);


},



}