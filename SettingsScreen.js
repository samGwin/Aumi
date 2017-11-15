import React from 'react';
import { Slider, Platform } from 'react-native';
import { Container, Header, Left, Body, Content, Right, Button, Title, List, ListItem, Text, Icon, Switch, Separator } from 'native-base';

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import styles from "./styles";

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      switch: true,
    }
  }

  onColorPress() {
    this.props.navigation.navigate('ColorPicker')
  }

  onValueChange() {
    this.setState({switch: !this.state.switch})
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>AUMI Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Separator bordered noTopBorder />
          <List>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#FF9501' }}>
                  <Entypo name="adjust" active style={{fontSize: 16}}/>
                </Button>
              </Left>
              <Body>
                <Slider style={{ width: '100%' }} />
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.onColorPress()}
            >
              <Left>
                <Button style={{ backgroundColor: '#FF9501' }}>
                  <MaterialIcons name="color-lens" active style={{fontSize: 16}} />
                </Button>
              </Left>
              <Body>
                <Text>COLOR</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>TIMERS</Text>
              </Body>
              <Right>
                {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <MaterialIcons active name="access-time" style={{fontSize: 16}} />
                </Button>
              </Left>
              <Body>
                <Text>MOTION DETECTION</Text>
              </Body>
              <Right>
                <Switch
                  value={this.state.switch}
                  onValueChange={() => this.onValueChange()}
                />
              </Right>
            </ListItem>
            <Separator/>
          </List>
        </Content>
      </Container>

    );
  }
}