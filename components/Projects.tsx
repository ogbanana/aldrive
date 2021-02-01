import React, { useEffect, useState } from 'react'
import projects from '../utils/projects.json'

const Projects = () => {
  const [view, setView] = useState(false)

  useEffect(() => {
    const windowHeight = window.innerHeight
    let elements = document.getElementsByClassName('project')
    // console.log(elements)
    Object.keys(elements).map((projectID) => {
      let mainContainer = document.querySelector('.mainContainer')
      let currProject = document.getElementById(projectID)
      let position = currProject.getBoundingClientRect()

      window.addEventListener(
        'scroll',
        () => {
          console.log(
            projectID,
            position.top,
            position.bottom,
            windowHeight,
            mainContainer.scrollTop,
          )
        },
        true,
      )
    })
  })

  return (
    <>
      <h1 className="flex text-4xl mt-10 pl-7">My Projects</h1>
      {projects.map((project, index) => {
        return (
          <div
            id={index.toString()}
            key={Math.random()}
            className="project grid grid-flow-row grid-cols-2 grid-rows-1 gap-4 p-5"
          >
            <div className="flex flex-col p-5 text-right justify-evenly bg-black rounded-xl h-100">
              <h1 className="text-2xl">{project.projectName}</h1>
              <p>{project.description}</p>
              <p>{project.myContributions}</p>
              <p>{project.stack}</p>
              <p>{project.code}</p>
            </div>
            <div className="flex justify-center items-center">
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
