import type { NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../components/Contact';
import { useGlobalContext } from '../components/Context';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomePage } from '../components/HomePage'
import { lang } from '../components/Language'
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';

const Home: NextPage = () => {
  const { currentMode, currentLang }  = useGlobalContext();
  const language                      = lang(currentLang);
  
  return(
    <div className={currentMode ? 'dark' : ''}>
      <Head>
        <title>{language.pageTitle.welcome}!</title>
        <meta property="og:title" content={language.pageTitle.welcome} key="title" />
      </Head>
      <div className='transition delay-150 dark:bg-slate-800 bg-slate-100'>
        <Header language={language}/>   
        <HomePage language={language}/>
        <Skills language={language}/>
        <Timeline language={language}/>
        <Projects language={language}/>
        <Footer language={language}/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
