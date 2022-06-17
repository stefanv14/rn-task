import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from './../../constants/routes';
import {CrewMembersItemProps} from './types';

const CrewMembersItem = (props: CrewMembersItemProps) => {
  const {name, agency, image, id} = props;
  const {navigate} = useNavigation();

  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity onPress={() => navigate(Routes.CREW_MEMBER, {id})}>
        <Image style={styles.image} source={{uri: image}} />

        <Text style={{fontSize: 40}}>{name}</Text>
        <View style={styles.agency}>
          <Text style={{fontSize: 30}}>{agency}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CrewMembersItem;

const styles = StyleSheet.create({
  itemWrapper: {
    width: '100%',
    padding: 10,
  },
  agency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {width: '100%', height: 200},
});
