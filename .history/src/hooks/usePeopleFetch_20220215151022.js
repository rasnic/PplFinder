import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryList, setCountyList] = useState([]);
  var countries = [];

  useEffect(() => {
    fetchUsers()
  }, []);

  useEffect(() =>{
    fetchCountries()
  },[])


  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    response.data.results.forEach((user) => {
      countries.push(user.location.country);
    });
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchCountries(){
    setCountyList(countries);
  }

  return { users, isLoading, fetchUsers, countries };
};
