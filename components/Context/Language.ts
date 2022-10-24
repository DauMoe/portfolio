import { LANGUAGE_TYPE } from "../Language";

export type LanguageContextType = {
  currentLang: LANGUAGE_TYPE;
  changeLang: (lang: LANGUAGE_TYPE) => void;
};

export const LanguageInit: LanguageContextType = {
  currentLang: 'en',
  changeLang: () => {}
}