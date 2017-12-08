import React from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { Container, Header, Left, Body, Content, Footer, FooterTab, Right, Button, Title, List, ListItem, Text, Icon, Switch, Separator } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
var moment = require('moment');

import styles from "./styles";

export default class TimerScreen extends React.Component {

  constructor() {
    super(); 
    this.state = {
      isDateTimePickerVisible: false,
      timers: [],
      changing: -1,
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleNewDateClick = () => {
    this.setState({ isDateTimePickerVisible: true});
  }

  _handleDatePicked = (date) => {
    const { changing } = this.state;
    if(changing === 0 || changing > 0) {
      newTimers = this.state.timers.slice();
      let time = moment(date).format("hh:mm");
      newTimers.splice(changing, 1, {time: time, active: true});
  
      this.setState({ timers: newTimers, changing: null });
    }
    else {
      newTimers = this.state.timers.slice();
      let time = moment(date).format("hh:mm");
      newTimers.push({time: time, active: true});

      this.setState({ timers: newTimers });
    }
    this._hideDateTimePicker();
  };

  _onPressTimer = (e, item) => {
    const index = this.state.timers.indexOf(item);
    this.setState({ changing: index, isDateTimePickerVisible: true});
  }

  onSwitchChange = (item) => {
    newTimers = this.state.timers.slice();
    const index = newTimers.indexOf(item);
    newTimers.splice(index, 1, {time: item.time, active:!item.active});
    this.setState({ timers: newTimers });
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
            <Title>Timers</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <DateTimePicker
            mode='time'
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={(date) => this._handleDatePicked(date, this.state.newCheck)}
            onCancel={this._hideDateTimePicker}
          />
          <List
            dataArray={this.state.timers}
            renderRow={(item) =>
              <ListItem
                icon
                onPress={(e) => this._onPressTimer(e, item)}
              >
                <Left>
                  <Button style={{ backgroundColor: "#4CDA64" }}>
                    <MaterialCommunityIcons active name="lightbulb-on-outline" />
                  </Button>
                </Left>
                <Body>
                  <Text>{item.time}</Text>
                </Body>
                <Right>
                  <Switch
                    value={item.active}
                    onValueChange={() => this.onSwitchChange(item)}
                  />
                </Right>
              </ListItem>
            }
          >
          </List>
        </Content>
        <Footer >
          <FooterTab>
            <Button
              full
              light
              onPress={this._handleNewDateClick}
            >
              <Text style={{ fontSize: 15 }}> Add Timer </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}