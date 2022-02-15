import { useState, useEffect } from "react";


export const useCountryFetch = (users) => {
const [countries, setCountries] = useState([]);

useEffect(() => {
fetchCountries(users);
}, []);

 async function fetchCountries(usrs){
    let c = {};
      let cArr = [];
        for (let i = 0; i < usrs.length; i++) {
          if (!c[usrs[i].location.country]) {
            c[usrs[i].location.country] = 1;
            cArr.push({[usrs[i].location.country]: usrs[i].location.country})
          }
      }
      setCountries(cArr);
      console.log(countries);
    }
return {countries, fetchCountries };
};