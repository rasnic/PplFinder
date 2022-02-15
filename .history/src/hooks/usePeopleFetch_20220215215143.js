import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchUsers().then((u) => fetchCountries(u));
  }, []);


  async function fetchUsers() {
    setIsLoading(true);
    debugger
    if (!localStorage.users) {
      console.log(localStorage);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setUsers(response.data.results);
      localStorage.setItem("users", JSON.stringify(response.data.results))
    return await response.data.results
    }
    await setUsers(JSON.parse(localStorage.getItem("users")))
  }

  function fetchCountries(us){
    let c = {};
     let cArr = [];
       for (let i = 0; i < us.length; i++) {
         if (!c[us[i].location.country]) {
           c[us[i].location.country] = 1;
           cArr.push(us[i].location.country)
         }
        }
     setCountries(cArr);
     setIsLoading(false);
   }
   
  
  return { users, isLoading, fetchUsers ,countries, fetchCountries };
};
