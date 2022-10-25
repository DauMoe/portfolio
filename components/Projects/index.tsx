import { NextPage } from "next";
import { useGlobalContext } from "../Context";
import { LANG_ITEM } from "../Language";

export type ProjectsProps = {
  language: LANG_ITEM
}

export const Projects: NextPage<ProjectsProps> = ({
  language,
  ...props
}) => {
  const { currentLang } = useGlobalContext();

  return(
    <section className="min-h-screen relative" id="projects">

    </section>
  )
}