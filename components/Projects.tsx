import React from 'react'
import projects from '../utils/projects.json'

const Projects = () => {
  return (
    <>
      <h1 className="flex text-5xl mt-10 pl-7">My Projects</h1>
      {projects.map((project) => {
        return (
          <div key={Math.random()} className="grid grid-flow-row grid-cols-2 grid-rows-1 gap-4 p-5">
            <div className="flex flex-col p-10 text-xl text-right justify-evenly bg-black bg-opacity-50 hover:bg-opacity-100 rounded-xl h-100">
              <h1 className="text-2xl">{project.projectName}</h1>
              <p>{project.description}</p>
              <p>{project.myContributions}</p>
              <p>{project.stack}</p>
              <p>{project.code}</p>
            </div>
            <div className="pr-5">
              <a href={project.url} target="_blank">
                <img className="rounded-xl opacity-60 hover:opacity-100" src={project.image} />
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Projects
