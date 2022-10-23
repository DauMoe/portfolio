import { NextPage } from "next";
import { HomePageProps } from "../HomePage";
import { RiMoonClearFill } from 'react-icons/ri';
import { BsSunFill } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { useDarkModeContext } from "../Context/DarkMode";
import { useEffect } from 'react';
import { DARK_MODE_LOCAL_STOGARE } from "../ConstantVariable";

const ToggleDarkMode = (mode: Boolean, setMode: Function) => {
  setMode(mode);
}

export const Header:NextPage<HomePageProps> = ({
  language,
  ...props
}) => {
  const { currentMode, toggleMode } = useDarkModeContext();
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
    <nav className="flex items-center justify-between flex-wrap p-6">
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
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white">
            Blog
          </a>
        </div>

        <div>
          {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
          <div className="m-2 p-2 rounded align-middle cursor-pointer inline-block bg-slate-600 dark:bg-white text-center" onClick={() => ToggleDarkMode(!currentMode, toggleMode)}>
            <IconContext.Provider value={{size: '18px', color: currentMode ? 'black' : 'white'}}>
              {currentMode ? <RiMoonClearFill/> : <BsSunFill/>}
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </nav>
  )
}