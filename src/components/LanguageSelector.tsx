import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const languageItems = [
    { label: 'English', value: 'en', flag: require('../../assets/flags/en.png') },
    { label: 'Amharic', value: 'am', flag: require('../../assets/flags/am.png') },
    { label: 'Arabic', value: 'ar', flag: require('../../assets/flags/ar.png') },
    { label: 'German', value: 'de', flag: require('../../assets/flags/de.png') },
    { label: 'Chinese', value: 'zh', flag: require('../../assets/flags/zh.png') },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="globe" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={languageItems}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer} onPress={() => changeLanguage(item.value)}>
                <Image source={item.flag} style={styles.flag} />
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default LanguageSelector;
