import React from "react";
import Spinner from "components/Spinner";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, countries } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
{       isLoading ?
        <UserList users={users} countries={countries} isLoading={isLoading} /> :
        
          <S.SpinnerWrapper>
            <S.Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        }
        }
      </S.Content>
    </S.Home>
  );
};

export default Home;
