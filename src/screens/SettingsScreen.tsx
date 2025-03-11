import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Account Management</Text>
        <Text style={styles.settingValue}>Manage</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
  settingValue: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SettingsScreen; 