import React, {useState, useEffect, useMemo} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Platform,
  TextInput,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from 'react-native-geolocation-service';
import {WebView} from 'react-native-webview';
import mapTemplate from '../../../map-template';
import {TOMTOMKEY} from '../../utils';
import * as tt from '@tomtom-international/web-sdk-maps';

export const MapDirection = () => {
  const tomtomkey = TOMTOMKEY;
  const [flag, setFlag] = useState('23');
  const [location, setLocation] = useState<any>(null);
  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      Geolocation.getCurrentPosition(
        data => {
          console.log('datlocationa', data);
          setLocation(data);
        },

        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
      );
    }
  }

  useEffect(() => {
    requestPermissions();
  }, []);

  let webRef: any = undefined;
  let [mapCenter, setMapCenter] = useState('-121.913, 37.361');
  const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;

  const onButtonClick = () => {
    // const [lng, lat] = mapCenter.split(',');
    const lng = location?.coords?.longitude;
    const lat = location?.coords?.latitude;
    webRef.injectJavaScript(
      `map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`,
    );
  };

  useEffect(() => {
    if (location && webRef) {
      webRef.injectJavaScript(
        `createMarker('accident.colors-white.svg', [${location?.coords?.longtitude}, ${location?.coords?.latitude}], '#5327c3', 'SVG icon');`,
      );
    }
  }, [location, webRef]);

  const handleMapEvent = (event: any) => {
    setMapCenter(event.nativeEvent.data);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttons}>
        <TextInput
          style={styles.textInput}
          onChangeText={setMapCenter}
          value={mapCenter}
        />
        <Button title="Set Center" onPress={onButtonClick} />
      </View> */}
      <WebView
        ref={r => (webRef = r)}
        onMessage={handleMapEvent}
        style={styles.map}
        originWhitelist={['*']}
        source={{html: mapTemplate}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    height: '15%',
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  textInput: {
    height: 40,
    width: '60%',
    marginRight: 12,
    paddingLeft: 5,
    borderWidth: 1,
  },
  map: {
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
