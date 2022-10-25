import { NextPage } from "next";
import { HomePageProps } from "../HomePage";
import { RiMoonClearFill } from 'react-icons/ri';
import { BsSunFill } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { useEffect } from 'react';
import { DARK_MODE_LOCAL_STOGARE } from "../ConstantVariable";
import { useGlobalContext } from "../Context";
import { LANG_ITEM } from "../Language";
import Link from "next/link";

const ToggleDarkMode = (mode: Boolean, setMode: Function) => {
  setMode(mode);
}

export const Header:NextPage<HomePageProps> = ({
  language,
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
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl text-black dark:text-white tracking-tight">Portfolio</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 dark:text-white dark:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        {Array.isArray(language.navbarItem) && language.navbarItem.map((navItem: LANG_ITEM, index: number) => {
          return(
            <Link href={navItem.href} key={"_header_" + index}>
              <a className={"block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white " + (index === 0 ? 'ml-10' : 'ml-6')}>{navItem.content}</a>
            </Link>
          )
        })}
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