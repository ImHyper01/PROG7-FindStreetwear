import React, { useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Schakel hier de themastijlen voor de lichte en donkere modus
    // bijvoorbeeld door gebruik te maken van een thema bibliotheek zoals react-native-paper
  };

  return (
    <View>
      <Text>Settings Screen</Text>
      <View>
        <Text>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

