import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div className="footer flex flex-col justify-center items-center w-full h-20 pb-10 pt-10">
      © {date.getFullYear()} Amy Liao
    </div>
  )
}

export default Footer
