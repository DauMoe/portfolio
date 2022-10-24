import { EN } from "./en";
import { VI } from "./vi";

export type LANG_ITEM = { [key:string]: any };
export type LANGUAGE_TYPE = 'en' | 'vi';
export type LANG = {
  [lang in LANGUAGE_TYPE]: {
    pageTitle: LANG_ITEM;
  };
};

const _LANGUAGE: LANG = {
  ...VI,
  ...EN
};

function checkRegion(region: LANGUAGE_TYPE) {
  return _LANGUAGE[region];
};

export const lang = checkRegion;