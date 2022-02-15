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
    let countries = {};
    let cArr = [];
      for (let i = 0; i < users.length; i++) {
        if (!countries[users[i].location.country]) {
          countries[users[i].location.country] = 1;
          cArr.push({[users[i].location.country]:1})
        }
    }
    setCountryList(cArr);
  }
 

  return { users, isLoading, fetchUsers, countryList };
};
