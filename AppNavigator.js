/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ColorPickerScreen from './ColorPickerScreen';
import ListIcon from './list-icon';

const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    ColorPicker: {screen: ColorPickerScreen },
    ListIcon: {screen: ListIcon}
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);

export default () =>
<Root>
    <AppNavigator />
</Root>;