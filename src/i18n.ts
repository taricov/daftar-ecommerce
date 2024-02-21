import en from "./locales/en/translation"
import ar from "./locales/ar/translation"
import i18next from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
    en: {translation: en},
    ar: {translation: ar},

} as const;

i18next
.use(initReactI18next)
.init({
  resources,
  // lng: "en",
  fallbackLng: 'en',
  debug: true
});