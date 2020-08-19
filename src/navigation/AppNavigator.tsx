import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './HomeNavigator'
import {
  View,
} from 'react-native';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

export function AppNavigator () {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <HomeNavigator/>
    </NavigationContainer>
  )
}
