import { createContext, useContext } from "react";
import { DarkModeContextType, DarkModeInit } from "./DarkMode";
import { LanguageContextType, LanguageInit } from "./Language";

const ContextInit = {
  ...DarkModeInit,
  ...LanguageInit
}

export const GlobalContext = createContext<DarkModeContextType & LanguageContextType>(ContextInit);
export function useGlobalContext() {
  return useContext(GlobalContext);
}