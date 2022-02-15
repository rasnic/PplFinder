import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { useCountryFetch, usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();
  const { countries } = useCountryFetch(users);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} countries={countries} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
