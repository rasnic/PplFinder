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
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].location.country);
      
    }
console.log(users);
    // let filteredCountries = users.location.country.filter((v, i, a) => a.indexOf(v) === i)
    // console.log(filteredCountries);
    // setCountryList(filteredCountries);
  }
 

  return { users, isLoading, fetchUsers, countryList };
};
