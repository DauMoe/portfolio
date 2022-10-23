import { NextPage } from "next";
import { Header } from "../Header";
import { LANG } from "../Language";

export type HomePageProps = {
  language: LANG
}

export const HomePage: NextPage<HomePageProps> = ({
  language,
  ...props
}) => {
  return(
    <section className='dark:bg-slate-800 bg-white h-screen w-screen relative'>
      <Header language={language}/>      
    </section>
  )
}