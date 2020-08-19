import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import { ProfileScreen } from '../scenes/profile';

const Stack = createStackNavigator();

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>
  </Stack.Navigator>
);