import type { NextPage } from 'next'
import Head from 'next/head'
import { useGlobalContext } from '../components/Context';
import { Header } from '../components/Header';
import { HomePage } from '../components/HomePage'
import { lang } from '../components/Language'

const Home: NextPage = () => {
  const { currentMode, currentLang } = useGlobalContext();
  const language = lang(currentLang);
  
  return(
    <div className={'scroll-smooth ' + (currentMode ? 'dark' : '')}>
      <Head>
        <title>{language.pageTitle.welcome}!</title>
        <meta property="og:title" content={language.pageTitle.welcome} key="title" />
      </Head>
      <Header language={language}/>   
      <HomePage language={language}/>
      <HomePage language={language}/>
    </div>
  )
}

export default Home
