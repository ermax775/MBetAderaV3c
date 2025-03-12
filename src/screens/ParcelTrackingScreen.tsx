import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const ParcelTrackingScreen = () => {
  const { t } = useTranslation();
  const { isDarkTheme, toggleTheme } = useTheme();
  
  
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
            title: t('Camera Permission'),
            message: t('This app needs access to your camera to scan barcodes.'),
            buttonNeutral: t('Ask Me Later'),
            buttonNegative: t('Cancel'),
            buttonPositive: t('OK'),
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
    alert(t(`Bar code with data ${data} has been scanned!`));
    // Here you can fetch parcel details using the scanned data
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#000' }]}>{t('parcelTracking')}</Text>
      <Text style={[styles.info, { color: isDarkTheme ? '#fff' : '#000' }]}>Track your parcels in real-time.</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parcelLocation.latitude,
          longitude: parcelLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={parcelLocation} title={t('parcelLocation')} />
      </MapView>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && <Button title={t('tapToScanAgain')} onPress={() => setScanned(false)} />}
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
  info: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ParcelTrackingScreen; 