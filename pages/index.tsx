import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import WelcomeText from '../components/WelcomeText'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import TechSkills from '../components/TechSkills'
import AnalyticsLayout from './AnalyticsLayout'

const index = () => {
  return (
    <div className="max-w-full">
      <Head>
        <title>Amy Liao</title>
        <link rel="icon" type="images/png" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Amy Liao" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amyliao.dev/" />
        <meta property="og:image" content="/images/share.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnalyticsLayout>
        <div className="bg-background bg-center md:bg-cover bg-no-repeat">
          <div className="bg-black bg-opacity-80 w-full flex justify-center">
            <div className="mainContainer">
              <Nav />
              <WelcomeText />
              <Introduction />
              <Projects />
              <TechSkills />
              <Footer />
            </div>
          </div>
        </div>
      </AnalyticsLayout>
    </div>
  )
}

export default index
