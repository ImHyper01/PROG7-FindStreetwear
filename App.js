import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var iconHeight = 26;
var iconWidth = 26;


export default class App extends React.Component{
  state = {
    screenText: 'press a button'
  }

  changeText = (text) => {
    console.log(text + 'has been pressed')
    this.setState({
      screenText: text
    })
  } 

  render (){
    return (
      <View style={styles.container}>
        <View>
        <Text style={{fontSize:30, color:'white'}}>{this.state.screenText}</Text>
        <StatusBar style="light" />
        </View>

        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>

          <Pressable onPress={() => this.changeText('home')} style={styles.IconBehave}>
            <Icon name="home" height={iconHeight} width={iconWidth} color='#44Baff'/>
            </Pressable>
          

            <Pressable onPress={() => this.changeText('list')} style={styles.IconBehave}>
            <Icon name="format-list-bulleted" height={iconHeight} width={iconWidth} color='#44Baff'/>
            </Pressable>


             <Pressable onPress={() => this.changeText('map')} style={styles.IconBehave}>
            <Icon name="map" height={iconHeight} width={iconWidth} color='#44Baff'/>
            </Pressable>


            <Pressable onPress={() => this.changeText('settings')} style={styles.IconBehave}>
            <Icon name="account-settings" height={iconHeight} width={iconWidth} color='#44Baff'/>
            </Pressable>

          </View>
        </View>
        
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    Buttom: 20,
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },

  IconBehave: {
     padding: 14,
  }
});

