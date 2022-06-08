import React, { FC } from 'react'
import projects from '../utils/projects.json'

const Projects: FC = () => {
  return (
    <>
      <h2 className="flex w-full flex-col lg:flex-row items-center text-2xl lg:text-3xl pl-4 lg:pl-10 lg:pt-4 pb-8">
        My Projects
      </h2>
      {projects.map((project, index) => {
        return (
          <div
            id={index.toString()}
            key={index}
            className="project md:grid grid-flow-row md:grid-cols-5 md:grid-rows-1 md:gap-4 p-5 md:opacity-100"
          >
            <div className="bg-gray-900 flex flex-col p-5 lg:text-right justify-around rounded-xl col-start-1 col-end-3 lg:items-end mb-5">
              <a href={project.url} target="_blank">
                <h3 className="text-3xl border-b border-blue-200 hover:text-pink-400 lg:text-2xl mb-4 pt-2">
                  {project.projectName}
                </h3>
              </a>

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
                <p>
                  {!project.teamMate ? (
                    project.stack
                  ) : (
                    <a href={project.teamMate} target="_blank">
                      {project.stack}
                    </a>
                  )}
                </p>
              </span>
              <span>
                <label>Code</label>
                {!project.code ? (
                  <p>Private</p>
                ) : (
                  <a href={project.code} target="_blank">
                    <img src="../images/octocat.png" className="h-10" />
                  </a>
                )}
              </span>
            </div>
            <div className="flex justify-center items-center col-start-3 col-end-6 overflow-hidden rounded-xl border-2 border-blue-300 border-opacity-0 hover:border-opacity-70 mb-5">
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
