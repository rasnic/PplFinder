import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchUsers().then((u) => fetchCountries(u));
  }, []);

  useEffect(() => {
    fetchCountries(users); 
}, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
    return response.data.results
  }

  function fetchCountries(us){
    let c = {};
     let cArr = [];
       for (let i = 0; i < us.length; i++) {
         if (!c[us[i].location.country]) {
           c[us[i].location.country] = 1;
           cArr.push({[us[i].location.country]: us[i].location.country})
         }
     }
     setCountries(cArr);
     console.log(cArr);
     setIsLoading(false);
   }
   
  
  return { users, isLoading, fetchUsers ,countries, fetchCountries };
};
