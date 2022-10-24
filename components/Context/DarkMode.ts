export type DarkModeContextType = {
  currentMode: boolean;
  toggleMode: (darkMode?: boolean) => void;
};

export const DarkModeInit: DarkModeContextType = {
  currentMode: true,
  toggleMode: () => {}
}