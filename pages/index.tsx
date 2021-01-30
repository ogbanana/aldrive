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
      </Head>
      <div className="backgroundImage">
        <img src="../images/background.jpg" />
      </div>
      <div className="mainContainer flex flex-col">
        <Nav />
        <WelcomeText />
        <Introduction />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default index
