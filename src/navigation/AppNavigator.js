import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNav from './TabNav';
import UserDetail from '../screens/User/UserDetail';

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNav">
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;