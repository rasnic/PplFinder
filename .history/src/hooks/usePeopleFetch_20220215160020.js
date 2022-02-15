import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchUsers().then(fetchCountries())
  }, []);


  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchCountries() {
    console.log(users);
    let countries = {};
      for (let i = 0; i < users.length; i++) {
      countries.assign(countries,  );
    }
    
    let filteredCountries = countries.filter((v, i, a) => a.indexOf(v) === i)
    setCountryList(filteredCountries)
    console.log(users);
    console.log(filteredCountries);
  }
 

  return { users, isLoading, fetchUsers, countryList };
};
