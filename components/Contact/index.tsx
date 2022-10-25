import { NextPage } from 'next';
import { useGlobalContext } from '../Context';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiZalo } from "react-icons/si";
import { BsSkype } from 'react-icons/bs';

export const Contact: NextPage = () => {
  const { currentMode } = useGlobalContext();
  return(
    <div className="fixed right-12 bottom-16 z-10">
      <IconContext.Provider value={{size: '30', color: currentMode ? 'white' : 'black'}}>
        <a href={"https://zalo.me/0339571946"} target="_blank"><SiZalo className="cursor-pointer"/></a>
        <a href={"https://join.skype.com/invite/gd506hPdoeTv"} target="_blank"><BsSkype className="mt-7 cursor-pointer"/></a>
        <a href={"https://www.linkedin.com/in/le-hoang-webdev/"} target="_blank"><AiFillLinkedin className="mt-7 cursor-pointer"/></a>
        <a href={"https://github.com/DauMoe"} target="_blank"><AiFillGithub className="mt-7 cursor-pointer"/></a>
      </IconContext.Provider>
    </div>
  )
}