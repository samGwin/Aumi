import React from 'react';
import { Alert, StyleSheet, ScrollView, Image, Text, View, TouchableHighlight, Slider, Button } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

export default class ColorPickerScreen extends React.Component {
  static navigationOptions = {
    title: 'Color Settings',
  };

  render() {
    return (
      <View style={styles.view}>
        <ColorPicker style={{flex: 1, marginBottom: 30}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#212021'
  },
  container: {
    flex: 1,
    paddingVertical: 15,
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
  },
  text: {
    fontSize: 20,
    color: 'steelblue'
  },
  viewText: {
    alignItems: 'center',
  },
  item: {
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  }
});
