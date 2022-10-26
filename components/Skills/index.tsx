import { NextPage } from "next";
import { IconContext } from "react-icons";
import { LANG_ITEM } from "../Language";
import { GrReactjs, GrOracle } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiMariadb } from 'react-icons/si';
import { useGlobalContext } from "../Context";
import { forwardRef } from "react";

export type SkillsProps = {
  language: LANG_ITEM
}

export const Skills = forwardRef<HTMLDivElement, SkillsProps>(({language, ...props}, SkillsPageRef) => {
  const { currentMode } = useGlobalContext();
  return(
    <div className="min-h-screen relative" ref={SkillsPageRef}>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <p className="text-slate-800 dark:text-white font-bold text-4xl text-center">Skills</p>
        <div className="mt-14 flex justify-around">
            <IconContext.Provider value={{size: '85', color: currentMode ? '#3dcaee' : '#00b1dd'}}>
              <GrReactjs className="mx-9 animate-spin-slow"/>
            </IconContext.Provider>
            <IconContext.Provider value={{size: '85', color: currentMode ? '#855afc' : '#4d14eb'}}>
              <TbBrandNextjs className="mx-9"/>
            </IconContext.Provider>
            <IconContext.Provider value={{size: '85', color: '#00a54a'}}>
              <FaNodeJs className="mx-9"/>
            </IconContext.Provider>
        </div>
        <div className="mt-6 flex justify-center">
          <IconContext.Provider value={{size: '85', color: currentMode  ? '#ffffff' : '#002B3C'}}>
            <SiMariadb className="mx-9"/>
          </IconContext.Provider>
          <IconContext.Provider value={{size: '85', color: currentMode  ? '#f7446b' : '#da0d39'}}>
            <GrOracle className="mx-9"/>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
});