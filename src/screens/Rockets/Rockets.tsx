import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useRef, FC} from 'react';
import Rocket from './Rocket';
import {useFetch} from './../../hooks/useFetch';
import {Api} from '../../constants/api';
import ApiErrorMessage from './../../components/ApiErrorMessage';
import Loading from './../../components/Loading';

const Rockets: FC = () => {
  const isMounted = useRef<boolean>(true);

  const {data, loading, error} = useFetch(Api.ROCKETS_URL, isMounted, []);

  if (error) {
    return <ApiErrorMessage />;
  } else if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.rocketWrapper}>
        {data.map(rocket => {
          return (
            <React.Fragment key={rocket.id}>
              <Rocket {...rocket} />
            </React.Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Rockets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rocketWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
