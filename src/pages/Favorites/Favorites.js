import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const { favorites, isLoading, favCountries } = usePeopleFetch();

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        {/* { favCountries ?
        <UserList users={favorites} countries={favCountries} isLoading={isLoading} /> : */}
       <h1>no favorites yet!</h1>
        
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
