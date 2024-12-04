import { useState } from "react"
import projects from '../data/projects.json'
import { Content, Project } from "../types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const handleClick = (project: Project) => {
    setSelectedProject(project);
  }

  const renderContent = (content: Content[]) => {
    return content.map((item, index) => {
      if (item.type === "text") {
        return <p key={index} className="py-4 text-justify">{item.value}</p>
      } else if (item.type === "image") {
        return <img key={index} src={item.src} alt={item.alt} />
      } else if (item.type === "imagePair") {
        return (
          <div key={index} className="flex gap-x-5 justify-center">
            <img src={item.images![0].src} alt={item.images![0].alt} />
            <img src={item.images![1].src} alt={item.images![1].alt} />
          </div>
        )
      }
    })
  }

  return (
    <div className="mt-10 ms-10 flex gap-x-10 ">
      <div className="w-1/5">
        <div className="flex flex-col gap-y-5">
          {projects.map((project, index) => (
            <div
              className={`p-5 border-2 border-pastel-yellow
                      ${selectedProject.id === project.id
                  ? "bg-pastel-yellow pointer-events-none"
                  : "text-pastel-yellow cursor-pointer"
                }
                      `}
              key={index}
              onClick={() => handleClick(project)}>
              {project.title}
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/5 text-light-gray-text flex flex-col justify-center items-center mb-10">
        {selectedProject.languages.length != 0
          ? <p className="text-center text-pastel-yellow">
            [
            {selectedProject.languages.map((language, index) => (
              <>
                {index != 0
                  ? <span> | </span>
                  : ""
                }
                <span className="px-3">{language}</span>
              </>
            ))}
            ]
          </p>
          : <div></div>
        }

        {renderContent(selectedProject.content)}
      </div>
    </div>
  )
}

export default Projects