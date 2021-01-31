import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <ul className="flex flex-row justify-end w-full h-18 text-2xl pt-2 pr-2">
        <li className="navItem">
          <a href="https://github.com/ogbanana" target="_blank">
            <img src="../images/GitHub-Mark-Light-64px.png" className="h-11" />
          </a>
        </li>
        <li className="navItem">
          <a href="https://www.linkedin.com/in/amyliao123/" target="_blank">
            <img src="../images/LinkedIn.png" className="h-11" />
          </a>
        </li>
        <li className="navItem">
          <a href="mailTo:amy.g.liao@gmail.com" target="_blank">
            <img src="../images/envelope.png" className="h-10" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Nav
