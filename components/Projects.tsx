import React, { useEffect, useState } from 'react'
import projects from '../utils/projects.json'

const Projects = () => {
  useEffect(() => {
    const mainContainer = document.getElementsByClassName('mainContainer')[0]
    const elements = document.getElementsByClassName('project')

    Object.keys(elements).map((projectID) => {
      const currProject = document.getElementById(projectID)
      currProject.setAttribute(
        'class',
        'grid grid-flow-row grid-cols-5 grid-rows-1 gap-4 p-5 opacity-50',
      )
      const position = currProject.getBoundingClientRect()

      window.addEventListener(
        'scroll',
        () => {
          if (Math.abs(mainContainer.scrollTop - position.top) < 400) {
            currProject.setAttribute(
              'class',
              'grid grid-flow-row grid-cols-5 grid-rows-1 gap-5 p-5 motion-safe: fadeIn',
            )
          } else if (Math.abs(mainContainer.scrollTop - position.top) > 180) {
            currProject.setAttribute(
              'class',
              'grid grid-flow-row grid-cols-5 grid-rows-1 gap-5 p-5 opacity-50',
            )
          }
        },
        true,
      )
    })
  })

  return (
    <>
      <h1 className="flex items-center text-3xl flex-shrink-1 pl-10 pt-5 pb-10">My Projects</h1>
      {projects.map((project, index) => {
        return (
          <div id={index.toString()} key={Math.random()} className="project">
            <div className="flex flex-col p-5 text-right justify-evenly bg-black rounded-xl col-start-1 col-end-3">
              <h1 className="text-2xl">{project.projectName}</h1>
              <p>{project.description}</p>
              <p>{project.myContributions}</p>
              <p>{project.stack}</p>
              <p>{project.code}</p>
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-6">
              <a href={project.url} target="_blank">
                <img className="rounded-xl" src={project.image} />
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Projects
