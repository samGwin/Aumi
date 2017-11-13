import React from 'react';
import { Alert, StyleSheet, ScrollView, Image, Text, View, TouchableHighlight } from 'react-native';

import SettingsScreen from './SettingsScreen';

export default class DeviceList extends React.Component {

  constructor() {
    super();
    this.state = {
      aumiName: 'Aumi 1724'
    }
  }

  _onPressButton(e) {
    this.props.navigatePress();
  }

  _onLongPressButton(e) {
    Alert.alert('Rename this Aumi')
    this.setState({aumiName: 'Your New AUMI'})
  }

  _onSearchPressButton(e) {
    Alert.alert('Searching for AUMI')
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableHighlight
            onPress={(e) => this._onPressButton(e)}
            onLongPress={(e) => this._onLongPressButton(e)}
            underlayColor="white"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> {this.state.aumiName} </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
        <TouchableHighlight
          onPress={this._onSearchPressButton}
          underlayColor="white"
        >
          <View style={styles.button2}>
            <Text style={styles.buttonText}> Search for Aumi </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: 30,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  button2: {
    height: 70,
    alignItems: 'center',
    backgroundColor: '#ABABAB'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
