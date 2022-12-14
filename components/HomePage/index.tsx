import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useRef } from "react";
import { IconContext } from "react-icons";
import { BsPaperclip } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { LANG_ITEM } from "../Language";
import ellipse from './../../public/ellipse.svg';

export type HomePageProps = {
  language: LANG_ITEM
}

const HomePage = forwardRef<HTMLDivElement, HomePageProps>(({language, ...props}, HomePageRef) => {
  return(
    <div className='h-screen relative w-full' ref={HomePageRef}>
      <div className='w-1/2 h-full absolute'>
        <div className='absolute w-3/5 top-1/2 -translate-y-1/2 right-36'>
          <Image
            src={ellipse}
            alt="Big orange here"
          />
        </div>
      </div>
      <div className='w-1/2 h-full absolute right-0'>
        <div className='absolute top-1/2 -translate-y-2/3 pr-1/2'>
          <p className='text-slate-800 dark:text-white text-5xl font-bold'>{language.homePage.title}</p>
          <p className='font-semibold text-[#df7e39] dark:text-orange-500 text-lg my-6 transition delay-100'>{language.homePage.position}</p>
          <p className='text-slate-800 dark:text-white text-lg leading-relaxed'>{language.homePage.description}</p>
          <div className="flex flex-row mt-10">
          <Link href='https://www.linkedin.com/in/le-hoang-webdev' passHref>
            <a target='_blank' rel="noopener noreferrer" className="flex items-center text-base font-medium pl-4 pr-3 py-3 leading-none border-2 rounded text-orange-600 border-orange-600 dark:text-orange-400 dark:border-orange-400 cursor-pointer transition delay-100">
              <span>Hire me (Linkedin)</span>
              <IconContext.Provider value={{size: '18'}}>
                <FaPaperPlane className="ml-1"/>
              </IconContext.Provider>
            </a>
          </Link>
          <Link href='/resume' passHref>
            <a target='_blank' rel="noopener noreferrer" className="flex items-center text-base font-medium ml-4 pl-4 pr-3 py-3 leading-none border-2 rounded text-black border-black dark:text-white dark:border-white cursor-pointer">
              <span>My Resume</span>
              <IconContext.Provider value={{size: '20'}}>
                <BsPaperclip/>
              </IconContext.Provider>
            </a>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
});

HomePage.displayName = "HomePageSection";

export default HomePage;