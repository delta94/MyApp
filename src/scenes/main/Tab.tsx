import React, { ReactElement, cloneElement } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { ICON_SIZE } from "./icons/Constants";
import Animated, { eq, multiply, greaterThan, cond } from "react-native-reanimated";
import { withTransition } from "react-native-redash";

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: Animated.Node<number>;
  transition: Animated.Node<number>; 
  index: number;
}

const styles = StyleSheet.create({});

export default ({ children, transition, active, index, onPress }: TabProps) => {
  const isActive = eq(active, index)
  const activeTransition = withTransition(isActive)
  const width = multiply(activeTransition, ICON_SIZE)
  const isGoingLeft = greaterThan(transition, active)
  const direction = cond(
    isActive,
    cond(isGoingLeft, 'rtl', 'ltr'),
    cond(isGoingLeft, 'rtl', 'ltr'),
  )
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE
        }}
      >
        <View style={StyleSheet.absoluteFill}>{children}</View>
        <Animated.View style={{ overflow: 'hidden', width }}>
          {cloneElement(children, {active: true})}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
