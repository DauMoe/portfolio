import { NextPage } from "next";
import { LANG_ITEM } from "../Language";

export type SkillsProps = {
  language: LANG_ITEM
}

export const Skills: NextPage<SkillsProps> = () => {
  return(
    <section className="min-h-screen" id="skills">

    </section>
  )
}