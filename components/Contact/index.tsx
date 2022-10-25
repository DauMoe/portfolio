import { NextPage } from 'next';
import { useGlobalContext } from '../Context';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiZalo } from "react-icons/si";
import { BsSkype } from 'react-icons/bs';
import Link from 'next/link';

export const Contact: NextPage = () => {
  const { currentMode } = useGlobalContext();
  return(
    <div className="fixed right-12 bottom-16 z-10">
      <IconContext.Provider value={{size: '30', color: currentMode ? 'white' : 'black'}}>
        <Link href={"https://zalo.me/0339571946"} passHref>
          <a target="_blank" rel="noopener noreferrer"><SiZalo className="cursor-pointer"/></a>
        </Link>
        <Link href={"https://join.skype.com/invite/gd506hPdoeTv"} passHref>
          <a target="_blank" rel="noopener noreferrer"><BsSkype className="mt-7 cursor-pointer"/></a>
        </Link>
        <Link href={"https://www.linkedin.com/in/le-hoang-webdev/"} passHref>
          <a target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="mt-7 cursor-pointer"/></a>
        </Link>
        <Link href={"https://github.com/DauMoe"} passHref>
          <a target="_blank" rel="noopener noreferrer"><AiFillGithub className="mt-7 cursor-pointer"/></a>
        </Link>
      </IconContext.Provider>
    </div>
  )
}