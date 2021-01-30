import React from 'react'
import projects from '../utils/projects.json'

const Projects = () => {
  return (
    <div className="projects w-full flex flex-col m-2">
      {projects.map((project) => {
        return (
          <div
            key={Math.random()}
            className="singleProject flex items-center justify-between w-full"
          >
            <div>
              <h1>{project.projectName}</h1>
            </div>
            {/* <div> */}
              <a href={project.url}>
                <img className="projectImage w-1/2" src={project.image} />
              </a>
            {/* </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default Projects
