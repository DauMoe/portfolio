import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';
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
  const HomePageRef                   = useRef<HTMLDivElement>(null);
  const SkillsPageRef                 = useRef<HTMLDivElement>(null);
  const TimelinePageRef               = useRef<HTMLDivElement>(null);
  const ProjectsPageRef               = useRef<HTMLDivElement>(null);
  const ContactPageRef                = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(HomePageRef)
  }, [])

  return(
    <div className={currentMode ? 'dark' : ''}>
      <Head>
        <title>{language.pageTitle.welcome}!</title>
        <meta property="og:title" content={language.pageTitle.welcome} key="title" />
      </Head>
      <div className='transition delay-150 dark:bg-slate-800 bg-slate-100'>
        <Header 
          language={language} 
          homePageRef={HomePageRef}
          skillsPageRef={SkillsPageRef}
          timelinePageRef={TimelinePageRef}
          projectsPageRef={ProjectsPageRef}
          contactPageRef={ContactPageRef}/>   
        <HomePage language={language} ref={HomePageRef}/>
        <Skills language={language} ref={SkillsPageRef}/>
        <Timeline language={language} ref={TimelinePageRef}/>
        <Projects language={language} ref={ProjectsPageRef}/>
        <Footer language={language} ref={ContactPageRef}/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
