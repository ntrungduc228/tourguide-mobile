import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapViewDirections from 'react-native-maps-directions';

export const MapDirection = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={'AIzaSyDmbbh44kGMgCjJXBoteXRytGrG7F9FnwM'} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        {/* <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
