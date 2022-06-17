import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {RocketProps} from './types';

const Rocket = (props: RocketProps) => {
  const {name, type, flickr_images, description, stages} = props;

  return (
    <View style={styles.rocketWrapper}>
      <Image
        style={{width: '100%', height: 200}}
        source={{uri: flickr_images[0]}}
      />
      <Text style={{fontSize: 40}}>{name}</Text>
      <View style={styles.horizontally}>
        <Text style={{fontSize: 30}}>{type}</Text>
        <Text style={{fontSize: 20}}>Stages: {stages}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
};

export default Rocket;

const styles = StyleSheet.create({
  rocketWrapper: {
    width: '100%',
    padding: 10,
  },
  horizontally: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
