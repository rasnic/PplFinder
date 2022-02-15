import { useState, useEffect } from "react";
import { users } from "./usePeopleFetch"

export const useCountryFetch = () => {
const [countries, setCountries] = useState([]);

useEffect(() => {
fetchCountries();
}, []);

 async function fetchCountries(){
    let c = {};
      let cArr = [];
        for (let i = 0; i < users.length; i++) {
          if (!c[users[i].location.country]) {
            c[users[i].location.country] = 1;
            cArr.push({[users[i].location.country]: users[i].location.country})
          }
      }
      setCountries(cArr);
      console.log(countries);
    }
return {countries, fetchCountries };
};