import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators
} from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../scenes/auth';
import { timing } from 'react-native-reanimated';
import { Easing } from 'react-native';

type AuthNavigatorParams = {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
  [AppRoute.HOME]: undefined;
}

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
}

export interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
  route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.HOME>;
  route: RouteProp<AuthNavigatorParams, AppRoute.HOME>;
}

const Stack = createStackNavigator();
// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 500,
//     easing: Easing.linear
//   }
// }
// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// }
// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
export const AuthNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      headerMode='none'
      screenOptions={{
        gestureEnabled: true,
        // gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: TransitionSpecs.TransitionIOSSpec,
        //   close: config,
        // },
      }}
    >
      <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>
      <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>
      <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>
    </Stack.Navigator>
  )
}