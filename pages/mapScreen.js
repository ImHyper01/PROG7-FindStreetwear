import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Voer hier de API-oproep uit om de gegevens op te halen
      const response = await fetch('https://api.example.com/locations');
      const data = await response.json();
      setMarkers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {markers.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
