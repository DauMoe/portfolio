import { NextPage } from "next";
import Head from "next/head";
import { FAANG_Resume } from "../components/Resume";

const Resume: NextPage = () => {
  return(
    <>
      <Head>
        <title>Lê Hoàng | Resume</title>
        <meta property="og:title" content="Lê Hoàng | Resume" key="title" />
      </Head>
      <FAANG_Resume/>
    </>
  )
}

Resume.displayName = "MyResume";

export default Resume;