import { NextPage } from "next";
import { LANG_ITEM } from "../Language";
import bg from './../../public/black_sea.jpg';

export type FooterProps = {
  language: LANG_ITEM
}

export const Footer: NextPage<FooterProps> = ({
  language,
  ...props
}) => {
  return(
    <div id="contact">
      <div className="bg-slate-300 dark:bg-slate-900 h-144 relative">
        <div className="absolute w-1/2 h-full">

        </div>
        <div className="absolute right-0 w-1/2 h-full">
          <div className="inline-block absolute top-1/2 -translate-y-1/2 right-[15%]">
            <p className="text-white font-medium text-4xl">(+84) 33 957 1946</p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-slate-400 dark:bg-black">
        <p className="text-black dark:text-white text-xs text-center">Lê Huy Hoàng 2022 &copy; All Right reserved</p>
      </div>
    </div>
  );
}