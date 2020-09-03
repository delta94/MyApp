import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export const AppNavigator = (props): React.ReactElement => (
  <Stack.Navigator
    {...props}
    headerMode='none'
    screenOptions={{
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
    <Stack.Screen name={AppRoute.MAIN} component={MainNavigator}/>
  </Stack.Navigator>
);