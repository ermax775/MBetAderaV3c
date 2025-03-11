import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParcelTrackingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcel Tracking</Text>
      <Text style={styles.info}>Track your parcels in real-time here.</Text>
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
  info: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ParcelTrackingScreen; 