import { EN } from "./en";
import { VI } from "./vi";

export type LANGUAGE_TYPE = 'en' | 'vi';
export type LANG = {
  [lang in LANGUAGE_TYPE]: {
    pageTitle: { [key: string]: any; };
  };
};

const _LANGUAGE: LANG = {
  ...VI,
  ...EN
};

const WHITE_LIST_LANG = Object.keys(_LANGUAGE);
// export type LANGUAGE_TYPE = typeof WHITE_LIST_LANG[number];

function checkRegion(region: LANGUAGE_TYPE) {
  return _LANGUAGE[region];
};

export const lang = checkRegion;