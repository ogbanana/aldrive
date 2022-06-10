import React, { FC } from 'react'

const Footer: FC = () => {
  const date = new Date()
  return (
    <div className="w-full relative text-lg pt-20 pb-20 bg-black bg-opacity-75">
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
