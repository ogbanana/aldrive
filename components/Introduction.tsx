import React from 'react'

const Introduction = () => {
  return (
    <div className="pl-8 pb-12 lg:pl-12 lg:pt-5">
      <h1>
        <a href="https://www.linkedin.com/in/amyliao123/" target="_blank">
          Amy Liao
        </a>
      </h1>
      <ul>
        <li>Full Stack Developer</li>
        <li>
          <a href="https://www.gracehopper.com/curriculum" target="_blank">
            Grace Hopper Program
          </a>
        </li>
        <li>
          <a href="https://www.fullstackacademy.com/software-engineering-immersive" target="_blank">
            Fullstack Academy Alumna
          </a>
        </li>
        <li>
          Currently coding at{' '}
          <a href="https://movableink.com/careers" target="_blank">
            Movable Ink
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Introduction
