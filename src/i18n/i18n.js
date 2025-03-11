import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import am from './locales/am.json';
import ar from './locales/ar.json';
import de from './locales/de.json';
import zh from './locales/zh.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am },
      ar: { translation: ar },
      de: { translation: de },
      zh: { translation: zh },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n; 