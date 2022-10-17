import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { lang } from '../components/Language'

const Home: NextPage = () => {
  const language = lang('en');
  
  return(
    <div>
      <Head>
        <title>{language.pageTitle.welcome}!</title>
        <meta property="og:title" content={language.pageTitle.welcome} key="title" />
      </Head>
      <section className='dark:bg-gray-dark bg-white h-screen w-screen relative '>
        
      </section>
    </div>
  )
}

export default Home
