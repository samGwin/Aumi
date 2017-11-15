import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Left, Body, Content, Right, Button, Icon, Title, List, ListItem, Text, Footer, FooterTab } from 'native-base';
import { StackNavigator } from 'react-navigation';

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
          <Container>
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
                    button 
                    onPress={(e) => this._onPressButton(e)}
                    style={styles.listItem}
                  >
                    <Text style={styles.listText}>{item}</Text>
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
    
    const styles = StyleSheet.create({
      listItem: {
        width: '100%',
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 0,
      },
      listText: {
        marginLeft: 10
      }
    });