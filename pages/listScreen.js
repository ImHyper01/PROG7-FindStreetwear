import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = ({ navigation }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Haal de markers op vanuit de `MapScreen` of de API, afhankelijk van je implementatie
    const markersFromMap = navigation.getParam('markers', []);
    setMarkers(markersFromMap);
  }, []);

  const toggleFavorite = (markerId) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.id === markerId ? { ...marker, isFavorite: !marker.isFavorite } : marker
      )
    );
  };

  const renderMarkerItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <Text style={{ flex: 1 }}>{item.title}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <Icon
          name={item.isFavorite ? 'star' : 'star-o'}
          size={20}
          color={item.isFavorite ? 'gold' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={markers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMarkerItem}
      />
    </View>
  );
};

export default ListScreen;
