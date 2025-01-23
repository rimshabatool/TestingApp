import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createLanguageDetector } from 'react-native-localization-settings';
import { enableLayoutAnimations } from 'react-native-reanimated';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      signInPrompt: 'Dear Rimsha, please sign in',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      loginButton: 'Login',
    },
  },
  ur: {
    translation: {
      welcome: 'خوش آمدید',
      signInPrompt: 'پیاری رمشا، براہ کرم سائن ان کریں',
      emailPlaceholder: 'ای میل',
      passwordPlaceholder: 'پاس ورڈ',
      loginButton: 'لاگ ان کریں',
    },
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      signInPrompt: 'प्रिय Rimsha, कृपया साइन इन करें',
      emailPlaceholder: 'ईमेल',
      passwordPlaceholder: 'पासवर्ड',
      loginButton: 'लॉगिन',
    },
  },
  zh: {
    translation: {
      welcome: '欢迎',
      signInPrompt: '亲爱的 Rimsha，请登录',
      emailPlaceholder: '电子邮件',
      passwordPlaceholder: '密码',
      loginButton: '登录',
    },
  },
};

const languageDetector = createLanguageDetector();

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
