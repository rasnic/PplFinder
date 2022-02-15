import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    async function get(){
    await fetchUsers();
    await fetchCountries();}
    get()
  }, []);


  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
    setIsLoading(false);
  }

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

  return { users, isLoading, fetchUsers, countries, fetchCountries };
};
