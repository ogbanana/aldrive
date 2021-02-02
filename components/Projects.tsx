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
      function glowing() {
        if (Math.abs(mainContainer.scrollTop - position.top) < 400) {
          currProject.setAttribute(
            'class',
            'grid grid-flow-row grid-cols-5 grid-rows-1 gap-5 p-5 opacity-100',
          )
        } else if (Math.abs(mainContainer.scrollTop - position.top) > 180) {
          currProject.setAttribute(
            'class',
            'grid grid-flow-row grid-cols-5 grid-rows-1 gap-5 p-5 opacity-50',
          )
        }
      }

      window.addEventListener('scroll', glowing, true)
    })
  })

  return (
    <>
      <h2 className="flex items-center text-3xl pl-10 pt-5 pb-5">My Projects</h2>
      {projects.map((project, index) => {
        return (
          <div id={index.toString()} key={Math.random()} className="project">
            <div className="singleProject flex flex-col p-5 text-right justify-evenly rounded-xl col-start-1 col-end-3 items-end">
              <h3 className="text-2xl">{project.projectName}</h3>
              <span>
                <label>Description</label>
                <p>{project.description}</p>
              </span>
              <span>
                <label>My Contributions</label>
                <p>{project.myContributions}</p>
              </span>
              <span>
                <label>Tech Stack</label>
                <p>{project.stack}</p>
              </span>
              <span>
                <label>Code</label>
                {!project.code ? (
                  <p>Private</p>
                ) : (
                  <a href={project.code} target="_blank">
                    <img src="../images/Octocat.png" className="h-10" />
                  </a>
                )}
              </span>
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-6 overflow-hidden rounded-xl border-4 border-blue-300 border-opacity-0 hover:border-opacity-70">
              <a href={project.url} target="_blank">
                <img className="items-center hover:bg-opacity-100" src={project.image} />
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Projects
