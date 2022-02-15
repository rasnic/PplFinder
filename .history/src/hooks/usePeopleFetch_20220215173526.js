import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchCountries(users); 
}, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
  }

  async function fetchCountries(usrs){
    console.log(users)
   let c = {};
     let cArr = [];
       for (let i = 0; i < usrs.length; i++) {
         if (!c[usrs[i].location.country]) {
           c[usrs[i].location.country] = 1;
           cArr.push({[usrs[i].location.country]: usrs[i].location.country})
         }
     }
     setCountries(cArr);
     console.log(countries);
     setIsLoading(false);
   }

  return { users, isLoading, fetchUsers ,countries, fetchCountries };
};
