import { NextPage } from "next";
import { LANG_ITEM } from "../Language";
import { IconContext } from 'react-icons';
import { SiZalo } from "react-icons/si";
import { BsGithub, BsLinkedin, BsSkype } from 'react-icons/bs';
import Link from "next/link";
import { forwardRef } from "react";

export type FooterProps = {
  language: LANG_ITEM
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({language, ...props}, ContactPageRef) => {
  return(
    <div ref={ContactPageRef}>
      <div className="bg-slate-300 dark:bg-slate-900 relative z-40 px-16 transition delay-150">
        <div className="flex flex-row justify-around py-[40px]">
          <Link href={"https://zalo.me/0339571946"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{size: '60'}}>
                <SiZalo className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
              </IconContext.Provider>
            </a>
          </Link>
          <Link href={"https://join.skype.com/invite/gd506hPdoeTv"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{size: '60'}}>
                <BsSkype className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
              </IconContext.Provider>
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/le-hoang-webdev/"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{size: '60'}}>
                <BsLinkedin className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
              </IconContext.Provider>
            </a>
          </Link>
          <Link href={"https://github.com/DauMoe"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{size: '60'}}>
                <BsGithub className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
              </IconContext.Provider>
            </a>
          </Link>
        </div>
        <div className="py-5 table">
          <div className="table-row">
            <p className="dark:text-white text-xs table-cell">Tel :</p>
            <p className="text-sm font-semibold dark:text-white table-cell pl-1 text-black">(+84) 33 957 1946</p>
          </div>
          <div className="table-row">
            <p className="dark:text-white text-xs table-cell">Gmail :</p>
            <p className="text-sm font-semibold dark:text-white table-cell pl-1 text-black">lehuyhoang1111999@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-slate-400 dark:bg-black transition delay-150">
        <p className="text-black font-semibold dark:text-white dark:font-normal text-xs text-center">Lê Huy Hoàng 2022 &copy; All Right reserved</p>
      </div>
    </div>
  );
});