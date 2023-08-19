import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';

export const MapDirection = () => {
  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      Geolocation.getCurrentPosition(
        data => console.log('datlocationa', data),
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
      );
    }
  }

  requestPermissions();
  const [coordinates] = useState([
    {
      latitude: 10.8470966,
      longitude: 106.7871364,
    },
    {
      latitude: 10.9054565,
      longitude: 106.7567876,
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
        {/* <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={'AIzaSyDmbbh44kGMgCjJXBoteXRytGrG7F9FnwM'} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        /> */}
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
