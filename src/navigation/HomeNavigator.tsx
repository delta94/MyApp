import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../scenes/home/HomeScreen';

const Stack = createStackNavigator();
export function HomeNavigator() {
  return (
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}