import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { AppRoute } from './AppRoutes';
import { HomeScreen } from '../scenes/home';

type HomeNavigatorParams = {
  [AppRoute.HOME]: any;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<HomeNavigatorParams, AppRoute.HOME>;
  route: RouteProp<HomeNavigatorParams, AppRoute.HOME>;
}

const Stack = createStackNavigator();

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen}/>
  </Stack.Navigator>
);