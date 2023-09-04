const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let countries=JSON.parse(xhr.responseText)
        
        // console.log(countries);
        
    const totalPopulation = countries.reduce(function (accumulator, country) {
    return  accumulator+country.population;
  },0);
  
  console.log("Total Population:", totalPopulation);
        
        
}
xhr.send();











