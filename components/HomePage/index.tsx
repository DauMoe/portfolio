import { NextPage } from "next";
import Image from "next/image";
import { LANG_ITEM } from "../Language";
import ellipse from './../../public/ellipse.svg';

export type HomePageProps = {
  language: LANG_ITEM
}

export const HomePage: NextPage<HomePageProps> = ({
  language,
  ...props
}) => {
  return(
    <section className='h-screen relative w-full' id="home">
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
          <p className='text-slate-800 dark:text-white text-lg my-6'>{language.homePage.position}</p>
          <p className='text-slate-800 dark:text-white text-lg leading-relaxed'>{language.homePage.description}</p>
        </div>
      </div>
    </section>
  )
}