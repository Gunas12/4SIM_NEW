import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import az from "./locales/az.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    az: { translation: az },
  },
  lng: "az",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
