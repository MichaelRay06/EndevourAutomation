var {ExpectedConditions}=require('protractor');
var elementLocator =require('../dataSet/data.js');
EC=protractor.ExpectedConditions;
module.exports={

elementSelectGoogl:{

  GoogleLink: element (by.css('div:nth-child(2) > .rc .S3Uucc')),
  
  
},
clickGoogleLink: function(){
  var element= this.elementSelectGoogl;
 element.GoogleLink.click();
    
}




}