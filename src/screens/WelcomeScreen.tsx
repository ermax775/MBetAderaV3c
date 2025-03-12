import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video } from 'expo-av';
import { supabase } from '../services/supabaseClient';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

// Define the type for the navigation prop
interface WelcomeScreenProps extends NativeStackScreenProps<any, any> {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const [parcels, setParcels] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchParcels = async () => {
      const { data, error } = await supabase.from('parcels').select('*');
      if (error) {
        console.error('Error fetching parcels:', error);
      } else {
        setParcels(data);
      }
    };

    fetchParcels();
  }, []);

  return (
    <View style={styles.container}>
      <LanguageSelector />
      <Image source={require('../../assets/logo7.png')} style={styles.image} />
      <Video
        source={require('../../assets/Delivery Tracking.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />
      <Text style={styles.title}>{t('welcomeTitle')}</Text>
      <Text style={styles.description}>{t('welcomeDescription')}</Text>
      <Text style={styles.features}>Features:
        - Real-time tracking
        - Multilingual support
        - Secure authentication
      </Text>
      <FlatList
        data={parcels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.parcelItem}>
            <Text>{item.name}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
      <Button title={t('login')} onPress={() => navigation.navigate('Login')} />
      <Button title={t('register')} onPress={() => navigation.navigate('Register')} />
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
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  features: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 32,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  video: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  parcelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default WelcomeScreen; 