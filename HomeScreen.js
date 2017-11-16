import React from 'react';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import { Container, Header, Left, Body, Content, Right, Button, Icon, Title, List, ListItem, Text, Footer, FooterTab } from 'native-base';
import { StackNavigator } from 'react-navigation';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export default class HomeScreen extends React.Component {
    
      constructor() {
        super();
        this.state = {
          items:[
            'Aumi 1724',
            'Aumi 1972'
          ]
        }
      }
    
      static navigationOptions = {
        header: null
      }
    
      _onPressButton(e) {
        this.props.navigation.navigate('Settings');
      }
    
      _onLongPressButton(e) {
        Alert.alert('Rename this Aumi')
        this.setState({aumiName: 'Your New AUMI'})
      }
    
      _onSearchPressButton(e) {
        Alert.alert('Searching for AUMI')
        this.props.navigation.navigate('ListIcon');
      }
    
      render() {
    
        return (
          <Container style={styles.container}>
            <Header>
              <Body>
                <Title>AUMI</Title>
              </Body>
            </Header>
            <Content>
              <List 
                dataArray={this.state.items}
                renderRow={(item) =>
                  <ListItem 
                    icon
                    onPress={(e) => this._onPressButton(e)}
                    style={styles.listItem}
                  >
                    <Left>
                      <Button style={{ backgroundColor: "#4CDA64" }}>
                        <MaterialCommunityIcons active name="lightbulb-on-outline" />
                      </Button>
                    </Left>
                    <Body>
                      <Text style={styles.listText}>{item}</Text>
                    </Body>
                    <Right style={styles.listItem2}>
                      {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
                      {Platform.OS === "android" && <MaterialIcons name="chevron-right" active style={{ fontSize: 16 }} />}
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
                  onPress={() => this._onSearchPressButton()}
                >
                  <Text style={{fontSize: 15}}> Search for Aumi </Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
      }
    }