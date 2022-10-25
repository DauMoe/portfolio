import { NextPage } from "next";
import { LANG_ITEM } from "../Language";

export type TimelineProps = {
  language: LANG_ITEM
}

export const Timeline: NextPage<TimelineProps> = ({
  language,
  ...props
}) => {
  return (
    <section className="min-h-screen relative" id="timeline">
      <div className="absolute w-4/10 top-1/2 h-full -translate-y-1/2">
        <div className="absolute top-1/2 -translate-y-1/2 right-16">
          <p className="text-slate-800 dark:text-white font-bold text-4xl">{language.timelinePage.timelineTitle}</p>
        </div>
      </div>
      <div className="absolute w-6/10 right-0 h-full">
        <div className="absolute top-1/2 -translate-y-1/2">
          {language.timelinePage.timelineData.map((timeline: any, index: number) => {
            return(
              <div className="border-l-4 border-black dark:border-white relative" key={"_timeline" + index}>
                <div className="pl-6 py-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2 before:w-4 before:h-4 before:rounded-xl before:bg-black before:dark:bg-white">
                  <p className="text-slate-800 text-lg font-bold dark:text-white">{timeline.companyName}</p>
                  <p className="text-slate-800 text-xs italic dark:text-white">{timeline.range}</p>
                  <div className="text-slate-800 mt-3 dark:text-white" dangerouslySetInnerHTML={{__html: timeline.description}}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}