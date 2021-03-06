import React, {useEffect} from 'react';
import { View } from 'react-native'
import {Text, BottomNavigation, BottomNavigationTab, Divider, BottomNavigationTabElement } from '@ui-kitten/components';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '@components/safe-area-layout.component';
import Tabbar from "./Tabbar";
export const MainTabBar = (props): SafeAreaLayoutElement => {
   useEffect(() => {
    //  console.log(props.state.routes)
   }, [])
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
        {/* <Tabbar /> */}
      </BottomNavigation>
    </SafeAreaLayout>
  );
};