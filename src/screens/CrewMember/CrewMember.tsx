import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useMemo, useRef, FC} from 'react';
import {useFetch} from './../../hooks/useFetch';
import {Api} from '../../constants/api';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {PERMISSIONS, request} from 'react-native-permissions';
import ApiErrorMessage from './../../components/ApiErrorMessage';
import Loading from './../../components/Loading';

const CrewMember: FC = () => {
  const isMounted = useRef<boolean>(true);
  const navigation = useNavigation();
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();

  const {id} = route.params;

  const {data, loading, error} = useFetch(Api.CREW_MEMBERS_URL, isMounted, []);

  const findMember = useMemo(
    () => data.find((rocket: {id: string}) => rocket.id === id),
    [data],
  );

  useEffect(() => {
    setTimeout(() => {
      request(
        Platform.OS === 'ios'
          ? (PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
            PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
          : (PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE),
      ).then(result => {
        Alert.alert(`Camera ${result}`);
      });
    }, 5000);
  }, []);

  useEffect(() => {
    if (findMember) {
      navigation.setParams({
        title: findMember.name,
      });
    }
  }, [findMember]);

  if (error) {
    return <ApiErrorMessage />;
  } else if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <View style={styles.titleWrapper}>
            <Text style={styles.textName}>{findMember?.name}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CrewMember;

const styles = StyleSheet.create({
  titleWrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textName: {fontWeight: 'bold', fontSize: 30},
});
