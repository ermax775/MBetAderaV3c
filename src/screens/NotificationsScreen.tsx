import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const NotificationsScreen = () => {
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#000' }]}>{t('notifications')}</Text>
      <Text style={[styles.info, { color: isDarkTheme ? '#fff' : '#000' }]}>{t("You have no new notifications.")}</Text>
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

export default NotificationsScreen;

 