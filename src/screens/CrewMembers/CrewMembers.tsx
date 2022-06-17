import {View, ScrollView} from 'react-native';
import React, {useMemo, FC, useRef} from 'react';
import CrewMembersItem from './CrewMembersItem';
import {useFetch} from './../../hooks/useFetch';
import {Api} from '../../constants/api';
import Loading from './../../components/Loading';
import ApiErrorMessage from './../../components/ApiErrorMessage';

const CrewMembers: FC = () => {
  const isMounted = useRef<boolean>(true);

  const {data, loading, error} = useFetch(Api.CREW_MEMBERS_URL, isMounted, []);

  const memoizedRockets = useMemo(
    () =>
      data.map(rocket => {
        return (
          <React.Fragment key={rocket.id}>
            <CrewMembersItem {...rocket} />
          </React.Fragment>
        );
      }),
    [data],
  );

  if (error) {
    return <ApiErrorMessage />;
  } else if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>{memoizedRockets}</View>
    </ScrollView>
  );
};

export default CrewMembers;
