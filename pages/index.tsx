import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import WelcomeText from '../components/WelcomeText'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Head>
        <title>Amy Liao</title>
        <link rel="icon" type="images/png" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Amy Liao" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aldrive.vercel.app/" />
        <meta property="og:image" content="../images/share.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-background bg-contain">
        <div className="mainContainer">
          <Nav />
          <WelcomeText />
          <Introduction />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default index
