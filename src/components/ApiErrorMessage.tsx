import {Text, View} from 'react-native';
import React, {FC} from 'react';

const ApiErrorMessage: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>
        API server not working!
      </Text>
    </View>
  );
};

export default ApiErrorMessage;
