
 let actualChildWindowPageTitle;
var {ExpectedConditions}= require ('protractor');
var EC = protractor.ExpectedConditions;
var Utils =function(){

  

   

    this.getURL= async function(url){
        browser.get(url);

    
    };

    this.getPageTitle = async function(){
        browser.sleep(3000);
        return await browser.getTitle();
   


    };
    this.getCurrentURLContent= async function(){

        return await browser.getCurrentUrl();
         
     };

     this.getText= function(){
        var getChildWindowPageText =element(by.css('h1.article-title'));
     return   getChildWindowPageText.getText();

    
     };



   
    }



module.exports= new Utils();
