import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeviceList from './DeviceList';
import SettingsScreen from './SettingsScreen';
import ColorPickerScreen from './ColorPickerScreen';

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigatePress = () => {
    this.props.navigation.navigate('Settings')
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ height: 70, backgroundColor: 'steelblue'}}>
          <Text style={styles.text}>Aumi</Text>
        </View>
        <DeviceList navigatePress={this.navigatePress}/>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  ColorPicker: {screen: ColorPickerScreen }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    paddingVertical: 10,
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
  }
});

/*
<View style={styles.container}>
<View style={{ height: 70, backgroundColor: 'steelblue'}}>
  <Text style={styles.text}>Aumi</Text>
</View>
<DeviceList/>
</View>
*/