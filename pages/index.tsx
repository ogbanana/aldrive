import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'

const index = () => {
  return (
    <>
      <Head>
        <title>Amy Liao</title>
      </Head>
      <div className="backgroundImage">
        <img src="../images/background.jpg" />
      </div>
      <div className="mainContainer justify-end">
        <Nav />
      </div>
    </>
  )
}

export default index
