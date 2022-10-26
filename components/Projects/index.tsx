import { NextPage } from "next";
import { forwardRef } from "react";
import { useGlobalContext } from "../Context";
import { LANG_ITEM } from "../Language";

export type ProjectsProps = {
  language: LANG_ITEM
}

export const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({language, ...props}, ProjectsPageRef) => {
  const { currentLang } = useGlobalContext();

  return(
    <div className="min-h-screen relative" ref={ProjectsPageRef}>

    </div>
  )
});