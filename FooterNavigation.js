import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import HomeScreen from './pages/homeScreen';
import ListScreen from './pages/listScreen';
import MapScreen from './pages/mapScreen';
import SettingsScreen from './pages/settingsScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Map: { screen: MapScreen },
  Settings: { screen: SettingsScreen },
});

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  List: { screen: ListScreen },
  Map: { screen: MapScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});