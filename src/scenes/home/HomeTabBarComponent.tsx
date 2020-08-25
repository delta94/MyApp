import React, {useEffect} from 'react';
import { BottomNavigation, BottomNavigationTab, Divider, BottomNavigationTabElement } from '@ui-kitten/components';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '@components/safe-area-layout.component';
import { ENV, URL } from 'react-native-dotenv'
export const HomeTabBar = (props): SafeAreaLayoutElement => {
  const env = () => {
    console.log(URL) // variables from .env file
    console.log(ENV)
   }
   useEffect(() => {
    env()
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
      </BottomNavigation>
    </SafeAreaLayout>
  );
};