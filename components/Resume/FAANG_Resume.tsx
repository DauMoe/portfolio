import { NextPage } from "next";
import Link from "next/link";

export const FAANG_Resume: NextPage = () => {
  return(
    <div className="w-full relative">
      <div className="w-full font-mono p-6 tracking-normal bg-white absolute max-w-2xl left-1/2 -translate-x-1/2">
        <section className="text-center">
          <p className="font-bold text-4xl">Lê Huy Hoàng</p>
          <p className="mt-2">(+84) 33 957 1946 &#9670; Ha Noi, VN</p>
          <div className="flex justify-center mt-2 text-[14px]">
            <Link href={"mailto:lehuyhoang1111999@gmail.com"} passHref>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">
                Gmail
              </a>
            </Link>
            <span className="px-3">&#9670;</span>
            <Link href={"https://www.linkedin.com/in/le-hoang-webdev/"} passHref>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">
                Linkedln
              </a>
            </Link>
            <span className="px-3">&#9670;</span>
            <Link href={"https://join.skype.com/invite/gd506hPdoeTv"} passHref>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">
                Skype
              </a>
            </Link>
            <span className="px-3">&#9670;</span>
            <Link href={"https://github.com/DauMoe"} passHref>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">
                Github
              </a>
            </Link>
          </div>
        </section>
        <section className="mt-7" id="objective">
          <p className="uppercase font-semibold text-xl">Objective</p>
          <div className="w-full h-[2px] bg-black"></div>
          <p className="mt-2">Iam a developer live in VietNam and currently working as Software Engineer with {new Date().getFullYear()-2019} years of experience in ReactJs and Javascript. Looking for a remote full-time Frontend position</p>
        </section>
        <section className="mt-3" id="education">
          <p className="uppercase font-semibold text-xl">education</p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="flex justify-between items-center mt-2">
            <p><b>Bachelor of Information Security</b>, PTIT</p>
            <p>2019-2021</p>
          </div>
        </section>
        <section className="mt-3" id="skills">
          <p className="uppercase font-semibold text-xl">skills</p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="mt-2 table">
            <div className="table-row">
              <p className="table-cell whitespace-nowrap"><b>Language skills</b></p>
              <p className="table-cell pl-3">Javascript, HTML, CSS, SQL</p>
            </div>
            <div className="table-row">
              <p className="table-cell whitespace-nowrap pt-2"><b>Experiences</b></p>
              <p className="table-cell pl-3">ReactJs, NextJs, NodeJs, React Native, Redux, MariaDB, TailwindCSS, MySQL, MaterialUI, ...</p>
            </div>
            <div className="table-row">
              <p className="table-cell whitespace-nowrap pt-2"><b>Tools</b></p>
              <p className="table-cell pl-3">Git, Linux, Jira, Slack, Confluence, Figma, Storybook</p>
            </div>
            <div className="table-row">
              <p className="table-cell whitespace-nowrap pt-2"><b>English</b></p>
              <p className="table-cell pl-3">Can read, write. Communication at mid-range level</p>
            </div>
          </div>
        </section>
        <section className="mt-3" id="experience">
          <p className="uppercase font-semibold text-xl">Experience + Projects</p>
          <p className="italic text-xs">- Because of security reason, project name will be not showed here!</p>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="mt-2">
            <div>
              <div className="flex justify-between items-center">
                <b>CMC Global | Frontend Developer</b>
                <p className="font-xs">Dec 2021 - Sep 2022</p>
              </div>
              <div>
                <ul className="list-disc pl-6">
                  <li>Team size: 4</li>
                  <li>Description:</li>
                </ul>
                <ul className="list-[circle] pl-10">
                  <li>Working as Outsource Frontend developer. Developer new feature and improve UX/UI with client's design team</li>
                  <li>Deploy, fix bug and communicate directly with client</li>
                  <li>Help other team to develop new features</li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <b>CDiT | Fullstack Developer</b>
                <p className="font-xs">May 2019 - Aug 2021</p>
              </div>
              <div>
                <ul className="list-disc pl-6">
                    <li>Team size: 2</li>
                    <li>Description:</li>
                  </ul>
                  <ul className="list-[circle] pl-10">
                    <li>Fix bug and develop new feature for own product</li>
                    <li>Build, setup a new product project with NodeJs + Oracle + AngularJs</li>
                    <li>Deploy, fix bug and support client when having issues</li>
                    <li>Help team to develop new features</li>
                  </ul>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <b>Freelancer project | Fullstack Developer</b>
                <p className="font-xs">Jul 2022 - Sep 2022</p>
              </div>
              <div>
                <ul className="list-disc pl-6">
                    <li>Team size: 1</li>
                    <li>Github: <Link href={"https://github.com/DauMoe/kma_alo"} passHref><a className="text-blue-900 underline">Halo</a></Link></li>
                    <li>Description:</li>
                  </ul>
                  <ul className="list-[circle] pl-10">
                    <li>Social media app: Newfeed, Chat, Add/Ufriend, Update profile/avatar, Video Call (working not good)</li>
                    <li>Design system base on client requirements</li>
                    <li>Design UI + coding Android App. Technology: React Native + PeerJs</li>
                    <li>Setup Database and coding the Backend side. Technology: NodeJs + MariaDB</li>
                    <li>Deploy to Azure VM</li>
                  </ul>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <b>Freelancer project | Fullstack Developer</b>
                <p className="font-xs">Nov 2021 - Mar 2022</p>
              </div>
              <div>
                <ul className="list-disc pl-6">
                    <li>Team size: 1</li>
                    <li>Github: <Link href={"https://github.com/DauMoe/thaongu_ip_manager"} passHref><a className="text-blue-900 underline">Asset Manager</a></Link></li>
                    <li>Description:</li>
                  </ul>
                  <ul className="list-[circle] pl-10">
                    <li>User can config and create asset, add property for each asset and manager them depend on property. Import, Delete, Export, Edit large of records base on Excel</li>
                    <li>Design system base on client requirements</li>
                    <li>Design UI + coding Frontend side with ReactJs + TypeScript</li>
                    <li>Setup Database and coding the Backend side. Technology: NodeJs + MariaDB</li>
                  </ul>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <b>A lot of freelancer projects. All of them use NodeJs + MariaDB + ReactJs</b>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}