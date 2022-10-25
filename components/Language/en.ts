const _EN = {
  pageTitle: {
    welcome: "Hi"
  },
  navbarItem: [
   {
      content: "Home",
      href: "#home"
    }, {
      content: "Skills",
      href: "#skills"
    }, {
      content: "Timeline",
      href: "#timeline"
    }, {
      content: "Projects",
      href: "#projects"
    }, {
      content: "Contact",
      href: "#contact"
    }
  ],
  homePage: {
    title: "Hi, Iam Hoàng",
    position: "Frontend Developer",
    description: `Iam a fullstack developer but prefer to become a Frontend guy. Having ${new Date().getFullYear() - 2019} years of experience. Currently Iam living in HaNoi, VietNam`
  },
  timelinePage: {
    timelineTitle: 'Timeline',
    timelineData: [
      {
        companyName: "Side Project",
        range: "Sep 2019 - Present",
        description: '<ul className="ml-2"><li>- Position: Fullstack Developer</li><li>- Tech Stack: ReactJs + NodeJs + MariaDB</li></ul>'
      }, {
        companyName: "CMC Global",
        range: "May 2022 - Present",
        description: '<ul className="ml-2"><li>- Position: Frontend Developer</li><li>- Tech Stack: NextJs + ReactJs</li></ul>'
      }, {
        companyName: "CDiT (under PTIT)",
        range: "Sep 2019 - Apr 2022",
        description: '<ul className="ml-2"><li>- Position: Fullstack Developer</li><li>- Tech Stack: NodeJs + OracleDB + AngularJs</li></ul>'
      }, {
        companyName: "Student at PTIT",
        range: "Sep 2017 - Jan 2021",
        description: '<ul className="ml-2"><li>- Major: Information Security</li><li>- Level: Bachelor</li></ul>'
      }
    ]
  }
}

export const EN = {"en": _EN};