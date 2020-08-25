import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
// import { TodoNavigator } from './TodoNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { ChatNavigator } from './ChatNavigator';
import { AppRoute } from './AppRoutes';
import { HomeTabBar, HomeDrawer, AboutScreen } from '@scenes/home';
import { HomeIcon, InfoIcon, LayoutIcon, PersonIcon, ChatIcon } from '@assets/icons';

type HomeNavigatorParams = {
  [AppRoute.ABOUT]: any;
}

export interface AboutScreenProps {
  navigation: StackNavigationProp<HomeNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeNavigatorParams, AppRoute.ABOUT>;
}

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name={AppRoute.PROFILE}
      component={ProfileNavigator}
      options={{ title: 'PROFILE', tabBarIcon: PersonIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.CHAT}
      component={ChatNavigator}
      options={{ title: 'CHAT', tabBarIcon: ChatIcon }}
    />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
    <Drawer.Screen
      name={AppRoute.HOME}
      component={HomeBottomNavigator}
      options={{ title: 'Home', drawerIcon: HomeIcon }}
    />
    <Drawer.Screen
      name={AppRoute.ABOUT}
      component={AboutScreen}
      options={{ title: 'About', drawerIcon: InfoIcon }}
    />
  </Drawer.Navigator>
);