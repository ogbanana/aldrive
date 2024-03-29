import React, { FC } from 'react'
import allTech from '../utils/tech.json'

const TechSkills: FC = () => {
  return (
    <div className="bg-black bg-opacity-75 w-full flex flex-col items-center lg:pl-5 lg:pr-5 lg:pt-10 lg:pb-10 drop-shadow-3xl">
      <h1 className="text-xl lg:text-4xl pt-5 pb-14">Tech Stack</h1>
      <div className="flex flex-wrap justify-around w-3/5 h-full">
        {allTech.map((tech, index) => {
          let key = tech + index.toString()
          return (
            <a key={key} className="p-1" href={tech.url} target="_blank" rel="noopener noreferrer">
              <img className="techLogos" src={tech.path} />{' '}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default TechSkills
