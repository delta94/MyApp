import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
// import { TodoNavigator } from './TodoNavigator';
import { HomeNavigator } from './HomeNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { ChatNavigator } from './ChatNavigator';
import { AuthNavigator } from './AuthNavigator';
import { AppRoute } from './AppRoutes';
import { MainTabBar, MainDrawer, AboutScreen } from '@scenes/main';
import { HomeIcon, InfoIcon, LogoutIcon, PersonIcon, ChatIcon } from '@assets/icons';

type MainNavigatorParams = {
  [AppRoute.ABOUT]: any;
}

export interface AboutScreenProps {
  navigation: StackNavigationProp<MainNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<MainNavigatorParams, AppRoute.ABOUT>;
}

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const MainBottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator tabBar={props => <MainTabBar {...props} />}>
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeNavigator}
      options={{ title: 'HOME', tabBarIcon: HomeIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.PROFILE}
      component={ProfileNavigator}
      options={{ title: 'PROFILE', tabBarIcon: PersonIcon, tabBarVisible: false }}
    />
    <BottomTab.Screen
      name={AppRoute.CHAT}
      component={ChatNavigator}
      options={{ title: 'CHAT', tabBarIcon: ChatIcon, tabBarVisible: false }}
    />
  </BottomTab.Navigator>
);

MainBottomNavigator.navigationOptions = ({ navigation }) => {
  console.log('sss:', navigation)
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'ProductDetails' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}

export const MainNavigator = (): React.ReactElement => (
  <Drawer.Navigator drawerContent={props => <MainDrawer {...props} />}>
    <Drawer.Screen
      name={AppRoute.MAIN}
      component={MainBottomNavigator}
      options={{ title: 'Home', drawerIcon: HomeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.ABOUT}
      component={AboutScreen}
      options={{ title: 'About', drawerIcon: InfoIcon }}
    />
    <Drawer.Screen
      name={AppRoute.LOGOUT}
      component={AuthNavigator}
      options={{ title: 'Logout', drawerIcon: LogoutIcon }}
    />
  </Drawer.Navigator>
);