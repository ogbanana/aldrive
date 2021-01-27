import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <ul className="flex flex-row justify-end w-full mr-2 mt-1 h-7">
        <li className="navItem">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Nav
