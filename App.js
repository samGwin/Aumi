import React from 'react';
import { Root } from "native-base";
import Expo from "expo";
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Left, Body, Content, Right, Button, Icon, Title, List, ListItem, Text, Footer, FooterTab } from 'native-base';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    })
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <AppNavigator />;
  }
}
