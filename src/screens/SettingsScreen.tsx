import React from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';
import LanguageSelector from '../components/LanguageSelector';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <View style={styles.settingItem}>
        <Image source={require('../../assets/notification1.png')} style={styles.icon} />
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <View style={styles.settingItem}>
        <Image source={require('../../assets/themes1.png')} style={styles.icon} />
        <Text style={styles.settingText}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Account Management</Text>
        <Text style={styles.settingValue}>Manage</Text>
      </View>
      <LanguageSelector />
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  }
});

export default SettingsScreen; 