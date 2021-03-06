import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

let usersByCountry = JSON.parse(localStorage.getItem("usersByCountry"));

const UserList = ({ users, isLoading, countries ,favorites}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hoveredUserId, setHoveredUserId] = useState();
  const [countryFilter, setCountryFilter] = useState([]);
  

  useEffect(() => {
    function getUsers(){
      setFilteredUsers(users);
   }
   getUsers()
  }, [users]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  
  function isFavorite(user) {
    let index = favorites.indexOf(user.email);
    if( index > -1){
      favorites.splice(index, 1);
    } else{
      favorites.push(user.email);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  
   function filterCheck(country) {
    let tempCF = countryFilter;
    let index = countryFilter.indexOf(country);
    if (index > -1) {
       tempCF.splice(index,1)
       setCountryFilter(tempCF);
    } else {
      tempCF.push(country)
       setCountryFilter(tempCF);
    }
    if (countryFilter.length === 0){
       setFilteredUsers(users);
    } else{
      let tempUsers = [];
      tempCF.forEach(c => {
        usersByCountry[c].forEach(user =>{
          tempUsers.push(user)
        })
      });
      setFilteredUsers(tempUsers);
    }
  }
    
  return (
    <S.UserList>
      <S.Filters>
        <div style={{maxWidth : 500, display: "flex", flexWrap: "wrap"}}>
        {countries.map((country) =>{
          return(
          <CheckBox 
          style={{flex: 1}}
          key={country}
          value={country}
          label={country} 
          onChange={()=>filterCheck(country)}
          />
          )
        })}
        </div>
      </S.Filters>
      
      <S.List>
        {filteredUsers.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper 
              isVisible={ favorites.includes(user.email)|| index === hoveredUserId }
              onClick={() => isFavorite(user)}
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
