import React, { FC } from 'react'
import navItems from '../utils/navItems.json'

const Nav: FC = () => {
  return (
    <>
      <ul className="flex flex-row justify-center md:justify-end w-full h-14 text-2xl pt-5 lg:pr-10 mb-8">
        {navItems &&
          navItems.map((item, index) => {
            return (
              <li key={`item + ${index}`} className="navItem">
                <a title={item.title} href={item.href} target="_blank">
                  <img src={item.image} className="h-10" />
                  <div className="toolTip">{item.title}</div>
                </a>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Nav
