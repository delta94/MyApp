import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { AppRoute } from './AppRoutes';
import { ProfileScreen } from '../scenes/profile';

type TodoNavigatorParams = {
  [AppRoute.PROFILE]: any;
}

export interface ProfileScreenProps {
  navigation: StackNavigationProp<TodoNavigatorParams, AppRoute.PROFILE>;
  route: RouteProp<TodoNavigatorParams, AppRoute.PROFILE>;
}


const Stack = createStackNavigator();

export const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>
  </Stack.Navigator>
);