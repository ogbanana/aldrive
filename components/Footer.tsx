import React from 'react'
import Nav from './Nav'

const Footer = () => {
  const date = new Date()
  return (
    <div className="w-full relative text-lg pt-20 pb-32">
      <div className="flex justify-center items-center">
        © {date.getFullYear()} &nbsp;
        <a href="https://www.linkedin.com/in/amyliao123/" target="_blank">
          Amy Liao
        </a>
      </div>
    </div>
  )
}

export default Footer
