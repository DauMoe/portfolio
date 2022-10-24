import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { DARK_MODE_LOCAL_STOGARE } from '../components/ConstantVariable';
import { GlobalContext } from '../components/Context';
import { LANGUAGE_TYPE } from '../components/Language';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentMode, setMode]  = useState<boolean>(false);
  const [currentLang, setLang]  = useState<LANGUAGE_TYPE>('en');

  const toggleMode = (darkMode?: boolean) => {
    if (darkMode !== undefined) {
      localStorage.setItem(DARK_MODE_LOCAL_STOGARE, darkMode + '');
      setMode(darkMode);
    } else {
      localStorage.setItem(DARK_MODE_LOCAL_STOGARE, currentMode + '');
      setMode(!currentMode);
    }
  }

  const changeLang = (lang: LANGUAGE_TYPE) => {
    setLang(lang);
  }

  return(
    <GlobalContext.Provider value={{currentMode, toggleMode, currentLang, changeLang}}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
