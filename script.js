(function(){
   let captchaValue = ""  
   function generateCaptcha(){
    let value = btoa(Math.random()*1000000000);
    value = value.substr(0,6 + Math.random()*5)
   }
   function setCaptcha(){
     
   }
})