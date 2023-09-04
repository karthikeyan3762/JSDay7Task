const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let countries=JSON.parse(xhr.responseText)

        
    //    let coutarray= Object.entries(countries);

 const countriesWithLowPopulation = countries.filter(country => country.population < 200000);

 const lowPopulationCountryNames = countriesWithLowPopulation.map(country => country.name);


 console.log(lowPopulationCountryNames);
        
        
}
xhr.send();
