import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useDarkModeContext } from '../components/Context/DarkMode';
import { HomePage } from '../components/HomePage'
import { lang, LANGUAGE_TYPE } from '../components/Language'

const Home: NextPage = () => {
  const [language, setLang]         = useState(lang('en'));
  const { currentMode, toggleMode } = useDarkModeContext();

  useEffect(() => {
    const _SAVED_LANG: LANGUAGE_TYPE = window.localStorage.getItem('_lang') || 'en';
    if (_SAVED_LANG !== 'en') {
      setLang(lang(_SAVED_LANG));
    }
  }, []);
  
  return(
    <div className={currentMode ? 'dark' : ''}>
      <Head>
        <title>{language.pageTitle.welcome}!</title>
        <meta property="og:title" content={language.pageTitle.welcome} key="title" />
      </Head>
      <HomePage language={language}/>
    </div>
  )
}

export default Home
