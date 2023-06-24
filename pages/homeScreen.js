import React from 'react';
import Icon from 'react-native-ico-material-design';
import { View, Text, Button, TouchableOpacity  } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Icon name="format-list-bulleted" size={30} color ="black" ></Icon>
      <Text>List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
      <Icon name="map" size={30} color ="black" ></Icon>
      <Text>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon name="account-settings" size={30} color ="black" ></Icon>
      <Text>Settings</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;
