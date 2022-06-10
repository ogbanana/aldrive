import React, { FC } from 'react'
import navItems from '../utils/navItems.json'

const Nav: FC = () => {
  return (
    <div className="w-full bg-black bg-opacity-75">
      <ul className="flex flex-row justify-center md:justify-end w-full text-2xl md:pt-4 md:pb-4 md:pr-12">
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
    </div>
  )
}

export default Nav
