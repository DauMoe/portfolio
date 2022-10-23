import { createContext, useContext } from "react";

export type DarkModeContextType = {
  currentMode: boolean;
  toggleMode: (darkMode?: boolean) => void;
};

const DarkModeInit: DarkModeContextType = {
  currentMode: true,
  toggleMode: () => {}
}

export const DarkModeContext = createContext<DarkModeContextType>(DarkModeInit);
export function useDarkModeContext() {
  return useContext(DarkModeContext);
}