import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import WelcomeText from '../components/WelcomeText'

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
      </div>
      <WelcomeText />
    </>
  )
}

export default index
