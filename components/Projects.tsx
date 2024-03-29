import Image from 'next/image'
import React, { FC } from 'react'
import projects from '../utils/projects.json'

const Projects: FC = () => {
  return (
    <div className="flex flex-colitems-center">
      <div className="ml-3.5">
        <h2 className="flex w-full flex-col lg:flex-row items-center text-2xl lg:text-3xl pl-4 lg:pl-10 lg:pt-4 mt-8">
          My Projects
        </h2>
        {projects.map((project, index) => {
          return (
            <div
              id={index.toString()}
              key={index}
              className="md:grid grid-flow-row md:grid-cols-5 md:grid-rows-1 md:gap-4 p-5 md:opacity-100"
            >
              <div className="max-w-3xl bg-gray-900 flex flex-col p-5 lg:text-right justify-around rounded-xl col-start-1 col-end-3 lg:items-end mb-5 drop-shadow-3xl">
                <a href={project.url} target="_blank">
                  <h3 className="text-xl border-b border-blue-200 hover:text-pink-400 md:text-2xl mb-4 pt-2">
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
                      <Image src="/images/octocat.png" className="h-10" width={50} height={70} />
                    </a>
                  )}
                </span>
              </div>
              <div className="flex justify-center items-center col-start-3 col-end-6 overflow-hidden rounded-xl drop-shadow-3xl mb-4 md:ml-4 md:w-auto md:h-auto">
                <Image
                  className="items-center rounded-xl hover:bg-opacity-100"
                  src={project.image}
                  width={950}
                  height={600}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
