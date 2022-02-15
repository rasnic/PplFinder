import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    fetchUsers().then(fetchCountries())
  }, []);


  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
    setIsLoading(false);
  }

  async function fetchCountries(usr){
    let c = {};
      let cArr = [];
        for (let i = 0; i < usr.length; i++) {
          if (!c[usr[i].location.country]) {
            c[usr[i].location.country] = 1;
            cArr.push({[usr[i].location.country]: usr[i].location.country})
          }
      }
      setCountries(cArr);
      console.log(countries);
    }

  return { users, isLoading, fetchUsers, countries };
};
