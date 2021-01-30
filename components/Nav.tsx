import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <ul className="flex flex-row justify-end w-full h-10 text-2xl pr-5">
        <li className="navItem">
          <Link href="/">
            <a>Nav</a>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/about">
            <a>Nav</a>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/projects">
            <a>Nav</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Nav
