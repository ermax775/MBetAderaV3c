import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RNCamera } from 'react-native-camera';

const ParcelTrackingScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [parcelLocation, setParcelLocation] = useState({
    latitude: 9.03,
    longitude: 38.74,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to scan barcodes.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        setHasPermission(true); // Assume iOS permissions are handled in Info.plist
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Bar code with data ${data} has been scanned!`);
    // Here you can fetch parcel details using the scanned data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcel Tracking</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parcelLocation.latitude,
          longitude: parcelLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={parcelLocation} title="Parcel Location" />
      </MapView>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '50%',
  },
});

export default ParcelTrackingScreen; 