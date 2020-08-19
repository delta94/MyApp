// import React from 'react'
// import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
// import { HomeNavigator } from './HomeNavigator'
// import {
//   View,
// } from 'react-native';

// const navigatorTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'transparent',
//   },
// }

// export function AppNavigator () {
//   return (
//     <NavigationContainer theme={navigatorTheme}>
//       <HomeNavigator/>
//     </NavigationContainer>
//   )
// }

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export const AppNavigator = (props): React.ReactElement => (
  <Stack.Navigator {...props} headerMode='none'>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
    <Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>
  </Stack.Navigator>
);