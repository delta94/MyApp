import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { AppRoute } from './AppRoutes';
import { ChatScreen } from '@scenes/chat';

type ChatNavigatorParams = {
  [AppRoute.CHAT]: any;
}

export interface ChatScreenProps {
  navigation: StackNavigationProp<ChatNavigatorParams, AppRoute.CHAT>;
  route: RouteProp<ChatNavigatorParams, AppRoute.CHAT>;
}

const Stack = createStackNavigator();

export const ChatNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.CHAT} component={ChatScreen}/>
  </Stack.Navigator>
);