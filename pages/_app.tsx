import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkModeContext } from '../components/Context/DarkMode';
import { useState } from 'react';
import { DARK_MODE_LOCAL_STOGARE } from '../components/ConstantVariable';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentMode, setMode] = useState(false);
  const toggleMode = (darkMode?: boolean) => {
    if (darkMode !== undefined) {
      localStorage.setItem(DARK_MODE_LOCAL_STOGARE, darkMode + '');
      setMode(darkMode);
    } else {
      localStorage.setItem(DARK_MODE_LOCAL_STOGARE, currentMode + '');
      setMode(!currentMode);
    }
  }

  return(
    <DarkModeContext.Provider value={{currentMode, toggleMode}}>
      <Component {...pageProps} />
    </DarkModeContext.Provider>
  )
}

export default MyApp
