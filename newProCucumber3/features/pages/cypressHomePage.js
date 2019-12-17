var {brower} =require ('protractor');

'use strict';
module.exports ={
    element_cypressHomePage:{

        doclink: element(by.xpath('//ul[2]/li[3]/a')),




    },

    
clickDocksLink: function(TextToSerch) {

    var element = this.cypressHomePage;
  element.doclink.click();

},



}