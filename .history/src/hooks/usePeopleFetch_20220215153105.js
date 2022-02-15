import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryList, setCountyList] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  useEffect(()=>{
    fetchCountries()
  },[])

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchCountries() {
    users.forEach((user) => {
      countryList.push(user.location.country);
    });
    let filteredCountries = countries.filter((v, i, a) => a.indexOf(v) === i)
    setCountyList(filteredCountries);
  }
 

  return { users, isLoading, fetchUsers, countryList };
};
