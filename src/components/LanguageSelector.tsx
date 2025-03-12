import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => changeLanguage(value)}
        items={[
          { label: 'English', value: 'en' },
          { label: 'Amharic', value: 'am' },
          { label: 'Arabic', value: 'ar' },
          { label: 'German', value: 'de' },
          { label: 'Chinese', value: 'zh' },
        ]}
        style={pickerSelectStyles}
        placeholder={{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  flag: {
    width: 20,
    height: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default LanguageSelector;
