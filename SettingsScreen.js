import React from 'react';
import { Alert, StyleSheet, ScrollView, Image, Text, View, TouchableHighlight, Slider, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'AUMI Settings',
  };

  onColorPress() {
    this.props.navigation.navigate('ColorPicker')
  }


  render() {
    return (
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.item}>
            <View style={styles.viewText}>
              <Text style={styles.text}> Brightness </Text>
            </View>
            <View style={{marginLeft: 20, marginRight: 10}}>
              <Slider minimumTrackTintColor='black' maximumTrackTintColor='white'/>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <View style={{marginLeft: 20}}>
              <Text style={styles.text}> Color </Text>
            </View>
            <View>
              <Button title='Color Picker' onPress={() => this.onColorPress()}/>
            </View>
          </View>
        </ScrollView>
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
