import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryList, setCountyList] = useState();
  var countries = [];

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    response.data.results.forEach((user) => {
      countries.push(user.location.country);
    }).then(setCountyList(countries.filter((v, i, a) => a.indexOf(v) === i)),
    
    
    setIsLoading(false);
    setUsers(response.data.results);
  }

 

  return { users, isLoading, fetchUsers, countryList };
};
