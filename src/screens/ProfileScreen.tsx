import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Image
        source={require('../../assets/avatar2.png')}
        style={styles.profileImage}
      />
      <Text style={[styles.name, { color: isDarkTheme ? '#fff' : '#000' }]}>John Doe</Text>
      <Text style={[styles.email, { color: isDarkTheme ? '#fff' : '#000' }]}>johndoe@example.com</Text>
      <Text style={[styles.phone, { color: isDarkTheme ? '#fff' : '#000' }]}>+251 912 345678</Text>
      <Button title= {t("Edit Profile")} onPress={() => {}} />
      <LanguageSelector />
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  }
});

export default ProfileScreen; 