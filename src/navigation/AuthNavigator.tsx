import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';

type AuthNavigatorParams = {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
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