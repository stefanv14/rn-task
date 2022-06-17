/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Rockets from './src/screens/Rockets/Rockets';
import CrewMembers from './src/screens/CrewMembers/CrewMembers';
import CrewMember from './src/screens/CrewMember/CrewMember';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {checkConnectivity} from './src/utils/checkConnectivity';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    const checkConnectivityStatus = async () => {
      const hasInternetAccess = await checkConnectivity();
      if (!hasInternetAccess) {
        Alert.alert('No internet!');
      }
    };
    checkConnectivityStatus();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Rockets"
          screenOptions={{
            tabBarActiveTintColor: '#333',
            tabBarLabelStyle: {
              fontSize: 25,
            },
            headerShown: false,
          }}>
          <Tab.Screen
            name="CrewMembers"
            component={() => (
              <Stack.Navigator initialRouteName="CrewMembers">
                <Stack.Screen name="CrewMembers" component={CrewMembers} />
                <Stack.Screen
                  options={({route}) => ({
                    title: route?.params?.title,
                  })}
                  name="CrewMember"
                  component={CrewMember}
                />
              </Stack.Navigator>
            )}
          />
          <Tab.Screen name="Rockets" component={Rockets} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
