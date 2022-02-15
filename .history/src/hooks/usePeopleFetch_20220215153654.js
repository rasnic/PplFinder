import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchUsers().then(fetchCountries())
  }, [countryList]);


  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchCountries() {
    var countries = []
    users.forEach((user) => {
      countries.push(user.location.country);
    });
    let filteredCountries = countries.filter((v, i, a) => a.indexOf(v) === i)
    setCountryList(filteredCountries);
  }
 

  return { users, isLoading, fetchUsers, countryList , fetchCountries};
};
