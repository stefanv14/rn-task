import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';

const Loading: FC = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
