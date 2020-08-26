import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Tab from "./Tab";
import Compass from "./icons/Compass";
import Chat from "./icons/Chat";
// import Camera from "@scenes/home/icons/Camera";
// import Bell from "./icons/Bell";
import User from "./icons/User";
import { ICON_SIZE, PADDING, SEGMENT } from "./icons/Constants";
import Particules from "./Particules";
import { Value } from "react-native-reanimated";
import { withTransition } from "react-native-redash";

const tabs = [
  { icon: <Compass /> },
  { icon: <Chat /> },
  // { icon: <Camera /> },
  // { icon: <Bell /> }
  { icon: <User /> }
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center"
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default () => {
  const active = new Value<number>(0)
  const transition = withTransition(active)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {/* <Particules /> */}
        {tabs.map(({ icon }, index) => (
          <View key={index} style={styles.tab}>
            <Tab onPress={() => active.setValue(index)}
              {...{ active, index, transition }}
            >
              {icon}
            </Tab>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
