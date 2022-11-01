import { NextPage } from "next";
import { HomePageProps } from "../HomePage";
import { RiMoonClearFill } from 'react-icons/ri';
import { BsSunFill } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import React, { Ref, RefObject, useEffect } from 'react';
import { DARK_MODE_LOCAL_STOGARE } from "../ConstantVariable";
import { useGlobalContext } from "../Context";
import { LANG_ITEM } from "../Language";
import Link from "next/link";

const ToggleDarkMode = (mode: Boolean, setMode: Function) => {
  setMode(mode);
}

export type HeaderProps = {
  language        : LANG_ITEM,
  homePageRef     : RefObject<HTMLDivElement>,
  skillsPageRef   : RefObject<HTMLDivElement>,
  timelinePageRef : RefObject<HTMLDivElement>,
  projectsPageRef : RefObject<HTMLDivElement>,
  contactPageRef  : RefObject<HTMLDivElement>,
}

const Navbar:NextPage<HeaderProps> = ({
  language,
  homePageRef,
  skillsPageRef,
  timelinePageRef,
  projectsPageRef,
  contactPageRef,
  ...props
}) => {
  const { currentMode, toggleMode } = useGlobalContext();
  useEffect(() => {
    const isDarkModeOS      : boolean       = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkModePrevious: string | null = localStorage.getItem(DARK_MODE_LOCAL_STOGARE);

    if (isDarkModePrevious !== null) {
      toggleMode(isDarkModePrevious === "false" ? false : true);
    } else {
      toggleMode(isDarkModeOS);
    }
  }, []);

  return(
    <nav className="flex items-center justify-between flex-wrap p-6 fixed top-0 z-50 w-full bg-slate-100 dark:bg-slate-800 transition delay-150">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl text-black dark:text-white tracking-tight">Portfolio</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 dark:text-white dark:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <p className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white ml-6"} onClick={() => homePageRef.current?.scrollIntoView()}>{language.navbarItem.home}</p>
          <p className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white ml-6"} onClick={() => skillsPageRef.current?.scrollIntoView()}>{language.navbarItem.skills}</p>
          <p className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white ml-6"} onClick={() => timelinePageRef.current?.scrollIntoView()}>{language.navbarItem.timeline}</p>
          <p className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white ml-6"} onClick={() => projectsPageRef.current?.scrollIntoView()}>{language.navbarItem.projects}</p>
          <p className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white ml-6"} onClick={() => contactPageRef.current?.scrollIntoView()}>{language.navbarItem.contact}</p>
        </div>
        <div>
          <div className="m-2 p-2 rounded-md align-middle cursor-pointer inline-block border-2 border-black dark:bg-white dark:border-white text-center" onClick={() => ToggleDarkMode(!currentMode, toggleMode)}>
            <IconContext.Provider value={{size: '18px'}}>
              {currentMode ? <RiMoonClearFill/> : <BsSunFill/>}
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.displayName = "Navbar";

export default Navbar;