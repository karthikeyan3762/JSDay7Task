const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let countries=JSON.parse(xhr.responseText)

        // console.log(countries);

        const dolors = countries
      .filter((item) => item?.currencies?.USD?.name === "United States dollar")
      .map((value) => value.name);
      console.log('dolors', dolors);
    
      
        
        
}
xhr.send();
