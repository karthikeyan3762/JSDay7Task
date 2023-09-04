const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let countries=JSON.parse(xhr.responseText)
        
        // console.log(countries);
        countries.forEach(function(country) {
           
            console.log("Name: " + Object.entries (country.name));
            console.log("Capital: " + country.capital);
            console.log("Flag: " + country.flag);
            console.log("---------------------------");
            
          });
        
        
}
xhr.send();
