import React from "react";
import Text from "components/Text";
import FaveList from "components/FaveList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const { favorites, isLoading, users } = usePeopleFetch();

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <FaveList users={users} favorites={favorites} isLoading={isLoading} /> 
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
