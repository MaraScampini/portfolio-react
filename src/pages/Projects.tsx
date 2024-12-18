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
    <div className="mt-10 md:ms-10 flex flex-col md:flex-row gap-x-10 ">
      <div className="md:w-1/5 p-5">
        <div className="flex flex-col gap-y-5">
          {projects.map((project, index) => (
            <div
              className={`p-5 border-2 border-pastel-yellow transition-all duration-150
                      ${selectedProject.id === project.id
                  ? "bg-pastel-yellow pointer-events-none"
                  : "text-pastel-yellow cursor-pointer hover:bg-pastel-yellow hover:text-gray-background"
                }
                      `}
              key={index}
              onClick={() => handleClick(project)}>
              {project.title}
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 md:p-0 md:w-3/5 text-light-gray-text flex flex-col justify-center items-center mb-10">
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

        <div className="flex mt-5 text-pastel-yellow ">
          {selectedProject.github != ""
            ? <a
              className="border border-pastel-yellow py-3 px-6 hover:bg-pastel-yellow hover:text-gray-background transition-all duration-150"
              href={selectedProject.github}
              target="_blank">
              Github
            </a>
            :
            <div></div>
          }

          {selectedProject.deployLink != ""
            ? <a
              className="border border-pastel-yellow py-3 px-6 hover:bg-pastel-yellow hover:text-gray-background transition-all duration-150 ms-5"
              href={selectedProject.deployLink}
              target="_blank">
              Deploy
            </a>
            : <div></div>
          }

        </div>

        {renderContent(selectedProject.content)}
      </div>
    </div>
  )
}

export default Projects