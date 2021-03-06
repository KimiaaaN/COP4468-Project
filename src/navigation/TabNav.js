import React, {useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostScreen from '../screens/Post/PostScreen';
import UserScreen from '../screens/User/UserScreen';
import AlbumScreen from '../screens/Album/AlbumScreen';
import ToDoScreen from '../screens/ToDo/ToDoScreen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserScreen" component={UserScreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
      <Tab.Screen name="ToDoScreen" component={ToDoScreen} />
    </Tab.Navigator>
  );
}
