import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    fetchUsers().then((u) => fetchCountries(u));
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    localStorage.setItem("countriesFilter", JSON.stringify([]))
    if (!localStorage.users) {
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
    localStorage.setItem("users", JSON.stringify(response.data.results))
    localStorage.setItem("favorites", JSON.stringify([]))
    setFavorites([])
    return await response.data.results
    }
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
    setUsers(JSON.parse(localStorage.getItem("users")))
    return JSON.stringify(localStorage.getItem("users"))
  }

  function fetchCountries(us){
    if(!localStorage.countries){
    let c = {};
     let cArr = [];
       for (let i = 0; i < us.length; i++) {
         if (!c[us[i].location.country]) {
           c[us[i].location.country] = [us[i]];
           cArr.push(us[i].location.country)
         }
         else{
           c[us[i].location.country].push(us[i]);
         }
        } 
        localStorage.setItem("countries", JSON.stringify(cArr))
        setCountries(cArr);
          localStorage.setItem("usersByCountry", JSON.stringify(c));
    }
      else {
        setCountries(JSON.parse(localStorage.getItem("countries")));
        
    }
     setIsLoading(false);
   }
   
  return { users, isLoading, fetchUsers ,countries ,fetchCountries, favorites };
};
