import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Content, Right, Button, Title, List, ListItem, Text, Icon, Switch, Separator } from 'native-base';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';

export default class ColorPickerScreen extends React.Component {

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
        <TriangleColorPicker defaultColor= '#66d9ff' style={{ flex: 1, marginBottom: 30 }} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828'
  }
});
