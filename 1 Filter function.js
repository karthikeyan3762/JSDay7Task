const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let countries=JSON.parse(xhr.responseText)
        
// console.log(countries);
        
const asiaCountries = countries.filter(country => country.region === "Asia");


const asiaCountryNames = asiaCountries.map(country => country.name);


console.log(asiaCountryNames);
        
        
        

        
}
xhr.send();
