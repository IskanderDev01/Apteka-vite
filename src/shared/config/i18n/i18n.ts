import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend) // для загрузки переводов с сервера
    .use(LanguageDetector) // для определения языка пользователя
    .use(initReactI18next) // интеграция с React
    .init({
        fallbackLng: 'ru', // язык по умолчанию
        interpolation: {
            escapeValue: false, // экранирование не требуется для React
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // путь для загрузки переводов
        },
    });

export default i18n;
