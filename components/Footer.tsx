import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <div className="footer h-60 flex flex-col justify-center">© {date.getFullYear()} Amy Liao</div>
  )
}

export default Footer
