import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";


const FaveList = ({ users, isLoading, favorites}) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hoveredUserId, setHoveredUserId] = useState();
  
  useEffect(() => {
    let tempUsers = [];
    function getUsers(){
      if(users && favorites){
    for (let index = 0; index < favorites.length; index++) {
          for (let j = 0; j < users.length; j++) {
            if(favorites[index] === users[j].email){
              tempUsers.push(users[j]);
              j = 0
              break
            }
          }
          }
      setFilteredUsers(tempUsers);}
   }
   getUsers()
  }, [favorites,users]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  
  function isFavorite(user) {
    let index = favorites.indexOf(user.email);
    let tempUsers = filteredUsers;
    tempUsers.splice(index,1)
    favorites.splice(index,1)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    setFilteredUsers(tempUsers)
  }
  
    
  return (
    <S.FaveList>
     
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
    </S.FaveList>
  );
};

export default FaveList;
