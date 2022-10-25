import { NextPage } from "next";
import { LANG_ITEM } from "../Language";
import { IconContext } from 'react-icons';
import { SiZalo } from "react-icons/si";
import { BsGithub, BsLinkedin, BsSkype } from 'react-icons/bs';

export type FooterProps = {
  language: LANG_ITEM
}

export const Footer: NextPage<FooterProps> = ({
  language,
  ...props
}) => {
  return(
    <div id="contact">
      <div className="bg-slate-300 dark:bg-slate-900 relative z-40 px-16 transition delay-150">
        <div className="flex flex-row justify-around py-[40px]">
          <a href={"https://zalo.me/0339571946"} target="_blank">
            <IconContext.Provider value={{size: '60'}}>
              <SiZalo className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
            </IconContext.Provider>
          </a>
          <a href={"https://join.skype.com/invite/gd506hPdoeTv"} target="_blank">
            <IconContext.Provider value={{size: '60'}}>
              <BsSkype className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
            </IconContext.Provider>
          </a>
          <a href={"https://www.linkedin.com/in/le-hoang-webdev/"} target="_blank">
            <IconContext.Provider value={{size: '60'}}>
                <BsLinkedin className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
              </IconContext.Provider>
          </a>
          <a href={"https://github.com/DauMoe"} target="_blank">
            <IconContext.Provider value={{size: '60'}}>
              <BsGithub className="text-slate-100 hover:text-slate-700 dark:text-slate-800 dark:hover:text-white transition hover:delay-150 cursor-pointer"/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="py-5">
          <p className="dark:text-white text-xs">Tel: <span className="font-bold text-sm">(+84) 33 957 1946</span></p>
          <p className="dark:text-white text-xs">Gmail: <span className="font-bold text-sm">lehuyhoang1111999@gmail.com</span></p>
        </div>
      </div>
      <div className="p-3 bg-slate-400 dark:bg-black transition delay-150">
        <p className="text-black dark:text-white text-xs text-center">Lê Huy Hoàng 2022 &copy; All Right reserved</p>
      </div>
    </div>
  );
}