import { EN } from "./en";
import { VI } from "./vi";

const _LANGUAGE = {
  ...VI,
  ...EN
};

export type LANGUAGE_TYPE = 'en' | 'vi';

function checkRegion(region: LANGUAGE_TYPE) {
  return _LANGUAGE[region];
};

export const lang = checkRegion;